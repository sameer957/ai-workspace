import { execute } from './executor';
import { AgentResponse } from '../utils/types';

async function callOllama(prompt: string): Promise<string> {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'mistral',
      prompt,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama error: ${response.statusText}`);
  }

  const data = (await response.json()) as { response: string };
  return data.response;
}

export async function runAgent(
  userMessage: string,
  selectedTools: string[]
): Promise<AgentResponse> {
  const toolResults = await execute(selectedTools);

  const executionLog = toolResults.map((r) => ({
    toolName: r.toolName,
    operation: r.operation,
    success: r.success,
    error: r.error,
  }));

  const prompt = `You are a helpful workspace assistant.
You have access to Gmail, GitHub, and Notion data.

STRICT RULES - FOLLOW EXACTLY:
1. NEVER return raw JSON in your response. Ever.
2. NEVER use code blocks or backticks. Ever.
3. ALWAYS write in plain conversational English only.
4. Summarize data in simple numbered or bulleted lists.
5. If a tool returned data, describe it in human readable form.
6. ONLY add an ACTION block if the user EXPLICITLY asks to send email.
7. NEVER suggest or propose actions unless the user directly requested one.
8. If the user is just asking for a summary or overview, just answer, NO action block.

For GitHub pull requests — list them like:
- PR #123: "Fix login bug" by John Doe

For Notion tasks — list them like:
- Complete Q1 Report (In Progress, High priority)

For Gmail emails — list them like:
- HDFC Bank: Payment unsuccessful on your debit card

If the user wants to PERFORM AN ACTION — write what you will do in plain English, then add:
ACTION:
{
  "tool": "gmail",
  "operation": "sendEmail",
  "input": { "to": "email", "subject": "subject", "body": "body" },
  "summary": "one line description"
}

NEVER return raw JSON. NEVER use backticks. ALWAYS plain English.
If user provides email address use it as-is.

User question: ${userMessage}

Tool results:
${JSON.stringify(toolResults, null, 2)}`;

  const answer = await callOllama(prompt);

  let finalAnswer = answer;
  let proposedAction = null;

  if (answer.includes('ACTION:')) {
    const parts = answer.split('ACTION:');
    finalAnswer = parts[0].trim();
    try {
      const rawJson = parts[1].trim();
      const parsed = JSON.parse(rawJson);
      proposedAction = {
        ...parsed,
        summary: parsed.summary ?? `${parsed.operation} via ${parsed.tool}`,
      };
    } catch (e) {
      console.error('ACTION parse error:', e);
      finalAnswer = answer;
    }
  }

  return { answer: finalAnswer, executionLog, proposedAction };
}
