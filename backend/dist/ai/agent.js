"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAgent = runAgent;
const executor_1 = require("./executor");
async function callOllama(prompt) {
    const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "mistral",
            prompt,
            stream: false,
        }),
    });
    if (!response.ok) {
        throw new Error(`Ollama error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
}
async function runAgent(userMessage, selectedTools) {
    const toolResults = await (0, executor_1.execute)(selectedTools);
    const executionLog = toolResults.map((r) => ({
        toolName: r.toolName,
        operation: r.operation,
        success: r.success,
        error: r.error,
    }));
    // const prompt = `You are a helpful workspace assistant.
    // You have access to Gmail, GitHub, and Notion data.
    // IMPORTANT RULES:
    // 1. Always respond in clean, natural human-readable text. NEVER return raw JSON in your answer.
    // 2. Summarize the tool results in a friendly, concise way.
    // 3. If the user wants to READ information — summarize it clearly in plain English.
    // 4. If the user wants to PERFORM AN ACTION — summarize what you will do in plain English, then add the ACTION block.
    // ACTION block format (only for write operations):
    // ACTION:
    // {
    //   "tool": "gmail",
    //   "operation": "sendEmail",
    //   "input": { "to": "email", "subject": "subject", "body": "body" },
    //   "summary": "one line description"
    // }
    // NEVER return raw JSON in your response text.
    // NEVER wrap content in code blocks or backticks.
    // ALWAYS write in plain conversational English.
    // NEVER skip the ACTION block when user asks to send email.
    // If the user provides an email address, use it as-is.
    // User question: ${userMessage}
    // Tool results:
    // ${JSON.stringify(toolResults, null, 2)}`;
    const prompt = `You are a helpful workspace assistant.
You have access to Gmail, GitHub, and Notion data.

STRICT RULES - FOLLOW EXACTLY:
1. NEVER return raw JSON in your response. Ever.
2. NEVER use code blocks or backticks. Ever.
3. ALWAYS write in plain conversational English only.
4. Summarize data in simple numbered or bulleted lists.
5. If a tool returned data, describe it in human readable form.

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

For PR review: tool=github, operation=createReview, input={repo, prNumber, body, event}

NEVER return raw JSON. NEVER use backticks. ALWAYS plain English.
If user provides email address use it as-is.

User question: ${userMessage}

Tool results:
${JSON.stringify(toolResults, null, 2)}`;
    const answer = await callOllama(prompt);
    console.log("RAW MODEL RESPONSE:", answer);
    let finalAnswer = answer;
    let proposedAction = null;
    if (answer.includes("ACTION:")) {
        const parts = answer.split("ACTION:");
        finalAnswer = parts[0].trim();
        try {
            const rawJson = parts[1].trim();
            console.log("RAW JSON TO PARSE:", rawJson); // add this
            const parsed = JSON.parse(rawJson);
            console.log("PARSED ACTION:", parsed); // add this
            proposedAction = {
                ...parsed,
                summary: parsed.summary ?? `${parsed.operation} via ${parsed.tool}`,
            };
            console.log("FINAL proposedAction:", proposedAction); // add this
        }
        catch (e) {
            console.log("ACTION parse error:", e);
            finalAnswer = answer;
        }
    }
    return { answer: finalAnswer, executionLog, proposedAction };
}
//# sourceMappingURL=agent.js.map