import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Conversations
 *
 */
export type ConversationsModel = runtime.Types.Result.DefaultSelection<Prisma.$ConversationsPayload>;
export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null;
    _avg: ConversationsAvgAggregateOutputType | null;
    _sum: ConversationsSumAggregateOutputType | null;
    _min: ConversationsMinAggregateOutputType | null;
    _max: ConversationsMaxAggregateOutputType | null;
};
export type ConversationsAvgAggregateOutputType = {
    id: number | null;
};
export type ConversationsSumAggregateOutputType = {
    id: number | null;
};
export type ConversationsMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    createdAt: Date | null;
};
export type ConversationsMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    createdAt: Date | null;
};
export type ConversationsCountAggregateOutputType = {
    id: number;
    title: number;
    createdAt: number;
    _all: number;
};
export type ConversationsAvgAggregateInputType = {
    id?: true;
};
export type ConversationsSumAggregateInputType = {
    id?: true;
};
export type ConversationsMinAggregateInputType = {
    id?: true;
    title?: true;
    createdAt?: true;
};
export type ConversationsMaxAggregateInputType = {
    id?: true;
    title?: true;
    createdAt?: true;
};
export type ConversationsCountAggregateInputType = {
    id?: true;
    title?: true;
    createdAt?: true;
    _all?: true;
};
export type ConversationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to aggregate.
     */
    where?: Prisma.ConversationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Conversations to fetch.
     */
    orderBy?: Prisma.ConversationsOrderByWithRelationInput | Prisma.ConversationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ConversationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Conversations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Conversations
    **/
    _count?: true | ConversationsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ConversationsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ConversationsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType;
};
export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
    [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConversations[P]> : Prisma.GetScalarType<T[P], AggregateConversations[P]>;
};
export type ConversationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationsWhereInput;
    orderBy?: Prisma.ConversationsOrderByWithAggregationInput | Prisma.ConversationsOrderByWithAggregationInput[];
    by: Prisma.ConversationsScalarFieldEnum[] | Prisma.ConversationsScalarFieldEnum;
    having?: Prisma.ConversationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConversationsCountAggregateInputType | true;
    _avg?: ConversationsAvgAggregateInputType;
    _sum?: ConversationsSumAggregateInputType;
    _min?: ConversationsMinAggregateInputType;
    _max?: ConversationsMaxAggregateInputType;
};
export type ConversationsGroupByOutputType = {
    id: number;
    title: string | null;
    createdAt: Date;
    _count: ConversationsCountAggregateOutputType | null;
    _avg: ConversationsAvgAggregateOutputType | null;
    _sum: ConversationsSumAggregateOutputType | null;
    _min: ConversationsMinAggregateOutputType | null;
    _max: ConversationsMaxAggregateOutputType | null;
};
export type GetConversationsGroupByPayload<T extends ConversationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConversationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConversationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConversationsGroupByOutputType[P]>;
}>>;
export type ConversationsWhereInput = {
    AND?: Prisma.ConversationsWhereInput | Prisma.ConversationsWhereInput[];
    OR?: Prisma.ConversationsWhereInput[];
    NOT?: Prisma.ConversationsWhereInput | Prisma.ConversationsWhereInput[];
    id?: Prisma.IntFilter<"Conversations"> | number;
    title?: Prisma.StringNullableFilter<"Conversations"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Conversations"> | Date | string;
    messages?: Prisma.MessagesListRelationFilter;
};
export type ConversationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    messages?: Prisma.MessagesOrderByRelationAggregateInput;
};
export type ConversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ConversationsWhereInput | Prisma.ConversationsWhereInput[];
    OR?: Prisma.ConversationsWhereInput[];
    NOT?: Prisma.ConversationsWhereInput | Prisma.ConversationsWhereInput[];
    title?: Prisma.StringNullableFilter<"Conversations"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Conversations"> | Date | string;
    messages?: Prisma.MessagesListRelationFilter;
}, "id">;
export type ConversationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ConversationsCountOrderByAggregateInput;
    _avg?: Prisma.ConversationsAvgOrderByAggregateInput;
    _max?: Prisma.ConversationsMaxOrderByAggregateInput;
    _min?: Prisma.ConversationsMinOrderByAggregateInput;
    _sum?: Prisma.ConversationsSumOrderByAggregateInput;
};
export type ConversationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConversationsScalarWhereWithAggregatesInput | Prisma.ConversationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConversationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConversationsScalarWhereWithAggregatesInput | Prisma.ConversationsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Conversations"> | number;
    title?: Prisma.StringNullableWithAggregatesFilter<"Conversations"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Conversations"> | Date | string;
};
export type ConversationsCreateInput = {
    title?: string | null;
    createdAt?: Date | string;
    messages?: Prisma.MessagesCreateNestedManyWithoutConversationInput;
};
export type ConversationsUncheckedCreateInput = {
    id?: number;
    title?: string | null;
    createdAt?: Date | string;
    messages?: Prisma.MessagesUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationsUpdateInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessagesUpdateManyWithoutConversationNestedInput;
};
export type ConversationsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessagesUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationsCreateManyInput = {
    id?: number;
    title?: string | null;
    createdAt?: Date | string;
};
export type ConversationsUpdateManyMutationInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConversationsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ConversationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConversationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConversationsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ConversationsScalarRelationFilter = {
    is?: Prisma.ConversationsWhereInput;
    isNot?: Prisma.ConversationsWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ConversationsCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.ConversationsCreateWithoutMessagesInput, Prisma.ConversationsUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ConversationsCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.ConversationsWhereUniqueInput;
};
export type ConversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationsCreateWithoutMessagesInput, Prisma.ConversationsUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ConversationsCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.ConversationsUpsertWithoutMessagesInput;
    connect?: Prisma.ConversationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationsUpdateToOneWithWhereWithoutMessagesInput, Prisma.ConversationsUpdateWithoutMessagesInput>, Prisma.ConversationsUncheckedUpdateWithoutMessagesInput>;
};
export type ConversationsCreateWithoutMessagesInput = {
    title?: string | null;
    createdAt?: Date | string;
};
export type ConversationsUncheckedCreateWithoutMessagesInput = {
    id?: number;
    title?: string | null;
    createdAt?: Date | string;
};
export type ConversationsCreateOrConnectWithoutMessagesInput = {
    where: Prisma.ConversationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationsCreateWithoutMessagesInput, Prisma.ConversationsUncheckedCreateWithoutMessagesInput>;
};
export type ConversationsUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.ConversationsUpdateWithoutMessagesInput, Prisma.ConversationsUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.ConversationsCreateWithoutMessagesInput, Prisma.ConversationsUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.ConversationsWhereInput;
};
export type ConversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.ConversationsWhereInput;
    data: Prisma.XOR<Prisma.ConversationsUpdateWithoutMessagesInput, Prisma.ConversationsUncheckedUpdateWithoutMessagesInput>;
};
export type ConversationsUpdateWithoutMessagesInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationsUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ConversationsCountOutputType
 */
export type ConversationsCountOutputType = {
    messages: number;
};
export type ConversationsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs;
};
/**
 * ConversationsCountOutputType without action
 */
export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: Prisma.ConversationsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ConversationsCountOutputType without action
 */
export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessagesWhereInput;
};
export type ConversationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    createdAt?: boolean;
    messages?: boolean | Prisma.Conversations$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ConversationsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversations"]>;
export type ConversationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["conversations"]>;
export type ConversationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["conversations"]>;
export type ConversationsSelectScalar = {
    id?: boolean;
    title?: boolean;
    createdAt?: boolean;
};
export type ConversationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "createdAt", ExtArgs["result"]["conversations"]>;
export type ConversationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | Prisma.Conversations$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ConversationsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ConversationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ConversationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ConversationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Conversations";
    objects: {
        messages: Prisma.$MessagesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["conversations"]>;
    composites: {};
};
export type ConversationsGetPayload<S extends boolean | null | undefined | ConversationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConversationsPayload, S>;
export type ConversationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConversationsCountAggregateInputType | true;
};
export interface ConversationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Conversations'];
        meta: {
            name: 'Conversations';
        };
    };
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {ConversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationsFindUniqueArgs>(args: Prisma.SelectSubset<T, ConversationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConversationsClient<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationsClient<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationsFindFirstArgs>(args?: Prisma.SelectSubset<T, ConversationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConversationsClient<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationsClient<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     *
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ConversationsFindManyArgs>(args?: Prisma.SelectSubset<T, ConversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Conversations.
     * @param {ConversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     *
     */
    create<T extends ConversationsCreateArgs>(args: Prisma.SelectSubset<T, ConversationsCreateArgs<ExtArgs>>): Prisma.Prisma__ConversationsClient<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Conversations.
     * @param {ConversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ConversationsCreateManyArgs>(args?: Prisma.SelectSubset<T, ConversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationsCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ConversationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Conversations.
     * @param {ConversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     *
     */
    delete<T extends ConversationsDeleteArgs>(args: Prisma.SelectSubset<T, ConversationsDeleteArgs<ExtArgs>>): Prisma.Prisma__ConversationsClient<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Conversations.
     * @param {ConversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ConversationsUpdateArgs>(args: Prisma.SelectSubset<T, ConversationsUpdateArgs<ExtArgs>>): Prisma.Prisma__ConversationsClient<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Conversations.
     * @param {ConversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ConversationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ConversationsUpdateManyArgs>(args: Prisma.SelectSubset<T, ConversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationsUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ConversationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Conversations.
     * @param {ConversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends ConversationsUpsertArgs>(args: Prisma.SelectSubset<T, ConversationsUpsertArgs<ExtArgs>>): Prisma.Prisma__ConversationsClient<runtime.Types.Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationsCountArgs>(args?: Prisma.Subset<T, ConversationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConversationsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationsAggregateArgs>(args: Prisma.Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>;
    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ConversationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConversationsGroupByArgs['orderBy'];
    } : {
        orderBy?: ConversationsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Conversations model
     */
    readonly fields: ConversationsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Conversations.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ConversationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    messages<T extends Prisma.Conversations$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Conversations model
 */
export interface ConversationsFieldRefs {
    readonly id: Prisma.FieldRef<"Conversations", 'Int'>;
    readonly title: Prisma.FieldRef<"Conversations", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Conversations", 'DateTime'>;
}
/**
 * Conversations findUnique
 */
export type ConversationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationsInclude<ExtArgs> | null;
    /**
     * Filter, which Conversations to fetch.
     */
    where: Prisma.ConversationsWhereUniqueInput;
};
/**
 * Conversations findUniqueOrThrow
 */
export type ConversationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationsInclude<ExtArgs> | null;
    /**
     * Filter, which Conversations to fetch.
     */
    where: Prisma.ConversationsWhereUniqueInput;
};
/**
 * Conversations findFirst
 */
export type ConversationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationsInclude<ExtArgs> | null;
    /**
     * Filter, which Conversations to fetch.
     */
    where?: Prisma.ConversationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Conversations to fetch.
     */
    orderBy?: Prisma.ConversationsOrderByWithRelationInput | Prisma.ConversationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Conversations.
     */
    cursor?: Prisma.ConversationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Conversations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Conversations.
     */
    distinct?: Prisma.ConversationsScalarFieldEnum | Prisma.ConversationsScalarFieldEnum[];
};
/**
 * Conversations findFirstOrThrow
 */
export type ConversationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationsInclude<ExtArgs> | null;
    /**
     * Filter, which Conversations to fetch.
     */
    where?: Prisma.ConversationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Conversations to fetch.
     */
    orderBy?: Prisma.ConversationsOrderByWithRelationInput | Prisma.ConversationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Conversations.
     */
    cursor?: Prisma.ConversationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Conversations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Conversations.
     */
    distinct?: Prisma.ConversationsScalarFieldEnum | Prisma.ConversationsScalarFieldEnum[];
};
/**
 * Conversations findMany
 */
export type ConversationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationsInclude<ExtArgs> | null;
    /**
     * Filter, which Conversations to fetch.
     */
    where?: Prisma.ConversationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Conversations to fetch.
     */
    orderBy?: Prisma.ConversationsOrderByWithRelationInput | Prisma.ConversationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Conversations.
     */
    cursor?: Prisma.ConversationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Conversations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Conversations.
     */
    distinct?: Prisma.ConversationsScalarFieldEnum | Prisma.ConversationsScalarFieldEnum[];
};
/**
 * Conversations create
 */
export type ConversationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Conversations.
     */
    data?: Prisma.XOR<Prisma.ConversationsCreateInput, Prisma.ConversationsUncheckedCreateInput>;
};
/**
 * Conversations createMany
 */
export type ConversationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: Prisma.ConversationsCreateManyInput | Prisma.ConversationsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Conversations createManyAndReturn
 */
export type ConversationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * The data used to create many Conversations.
     */
    data: Prisma.ConversationsCreateManyInput | Prisma.ConversationsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Conversations update
 */
export type ConversationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Conversations.
     */
    data: Prisma.XOR<Prisma.ConversationsUpdateInput, Prisma.ConversationsUncheckedUpdateInput>;
    /**
     * Choose, which Conversations to update.
     */
    where: Prisma.ConversationsWhereUniqueInput;
};
/**
 * Conversations updateMany
 */
export type ConversationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: Prisma.XOR<Prisma.ConversationsUpdateManyMutationInput, Prisma.ConversationsUncheckedUpdateManyInput>;
    /**
     * Filter which Conversations to update
     */
    where?: Prisma.ConversationsWhereInput;
    /**
     * Limit how many Conversations to update.
     */
    limit?: number;
};
/**
 * Conversations updateManyAndReturn
 */
export type ConversationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * The data used to update Conversations.
     */
    data: Prisma.XOR<Prisma.ConversationsUpdateManyMutationInput, Prisma.ConversationsUncheckedUpdateManyInput>;
    /**
     * Filter which Conversations to update
     */
    where?: Prisma.ConversationsWhereInput;
    /**
     * Limit how many Conversations to update.
     */
    limit?: number;
};
/**
 * Conversations upsert
 */
export type ConversationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Conversations to update in case it exists.
     */
    where: Prisma.ConversationsWhereUniqueInput;
    /**
     * In case the Conversations found by the `where` argument doesn't exist, create a new Conversations with this data.
     */
    create: Prisma.XOR<Prisma.ConversationsCreateInput, Prisma.ConversationsUncheckedCreateInput>;
    /**
     * In case the Conversations was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ConversationsUpdateInput, Prisma.ConversationsUncheckedUpdateInput>;
};
/**
 * Conversations delete
 */
export type ConversationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationsInclude<ExtArgs> | null;
    /**
     * Filter which Conversations to delete.
     */
    where: Prisma.ConversationsWhereUniqueInput;
};
/**
 * Conversations deleteMany
 */
export type ConversationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: Prisma.ConversationsWhereInput;
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number;
};
/**
 * Conversations.messages
 */
export type Conversations$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    where?: Prisma.MessagesWhereInput;
    orderBy?: Prisma.MessagesOrderByWithRelationInput | Prisma.MessagesOrderByWithRelationInput[];
    cursor?: Prisma.MessagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
/**
 * Conversations without action
 */
export type ConversationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: Prisma.ConversationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversations
     */
    omit?: Prisma.ConversationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationsInclude<ExtArgs> | null;
};
//# sourceMappingURL=Conversations.d.ts.map