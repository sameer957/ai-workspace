import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Tools
 *
 */
export type ToolsModel = runtime.Types.Result.DefaultSelection<Prisma.$ToolsPayload>;
export type AggregateTools = {
    _count: ToolsCountAggregateOutputType | null;
    _avg: ToolsAvgAggregateOutputType | null;
    _sum: ToolsSumAggregateOutputType | null;
    _min: ToolsMinAggregateOutputType | null;
    _max: ToolsMaxAggregateOutputType | null;
};
export type ToolsAvgAggregateOutputType = {
    id: number | null;
    messageId: number | null;
};
export type ToolsSumAggregateOutputType = {
    id: number | null;
    messageId: number | null;
};
export type ToolsMinAggregateOutputType = {
    id: number | null;
    messageId: number | null;
    name: string | null;
    operation: string | null;
    success: boolean | null;
    error: string | null;
    createdAt: Date | null;
};
export type ToolsMaxAggregateOutputType = {
    id: number | null;
    messageId: number | null;
    name: string | null;
    operation: string | null;
    success: boolean | null;
    error: string | null;
    createdAt: Date | null;
};
export type ToolsCountAggregateOutputType = {
    id: number;
    messageId: number;
    name: number;
    operation: number;
    success: number;
    result: number;
    error: number;
    createdAt: number;
    _all: number;
};
export type ToolsAvgAggregateInputType = {
    id?: true;
    messageId?: true;
};
export type ToolsSumAggregateInputType = {
    id?: true;
    messageId?: true;
};
export type ToolsMinAggregateInputType = {
    id?: true;
    messageId?: true;
    name?: true;
    operation?: true;
    success?: true;
    error?: true;
    createdAt?: true;
};
export type ToolsMaxAggregateInputType = {
    id?: true;
    messageId?: true;
    name?: true;
    operation?: true;
    success?: true;
    error?: true;
    createdAt?: true;
};
export type ToolsCountAggregateInputType = {
    id?: true;
    messageId?: true;
    name?: true;
    operation?: true;
    success?: true;
    result?: true;
    error?: true;
    createdAt?: true;
    _all?: true;
};
export type ToolsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Tools to aggregate.
     */
    where?: Prisma.ToolsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tools to fetch.
     */
    orderBy?: Prisma.ToolsOrderByWithRelationInput | Prisma.ToolsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ToolsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tools
    **/
    _count?: true | ToolsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ToolsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ToolsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ToolsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ToolsMaxAggregateInputType;
};
export type GetToolsAggregateType<T extends ToolsAggregateArgs> = {
    [P in keyof T & keyof AggregateTools]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTools[P]> : Prisma.GetScalarType<T[P], AggregateTools[P]>;
};
export type ToolsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ToolsWhereInput;
    orderBy?: Prisma.ToolsOrderByWithAggregationInput | Prisma.ToolsOrderByWithAggregationInput[];
    by: Prisma.ToolsScalarFieldEnum[] | Prisma.ToolsScalarFieldEnum;
    having?: Prisma.ToolsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ToolsCountAggregateInputType | true;
    _avg?: ToolsAvgAggregateInputType;
    _sum?: ToolsSumAggregateInputType;
    _min?: ToolsMinAggregateInputType;
    _max?: ToolsMaxAggregateInputType;
};
export type ToolsGroupByOutputType = {
    id: number;
    messageId: number;
    name: string;
    operation: string;
    success: boolean;
    result: runtime.JsonValue | null;
    error: string | null;
    createdAt: Date;
    _count: ToolsCountAggregateOutputType | null;
    _avg: ToolsAvgAggregateOutputType | null;
    _sum: ToolsSumAggregateOutputType | null;
    _min: ToolsMinAggregateOutputType | null;
    _max: ToolsMaxAggregateOutputType | null;
};
export type GetToolsGroupByPayload<T extends ToolsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ToolsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ToolsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ToolsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ToolsGroupByOutputType[P]>;
}>>;
export type ToolsWhereInput = {
    AND?: Prisma.ToolsWhereInput | Prisma.ToolsWhereInput[];
    OR?: Prisma.ToolsWhereInput[];
    NOT?: Prisma.ToolsWhereInput | Prisma.ToolsWhereInput[];
    id?: Prisma.IntFilter<"Tools"> | number;
    messageId?: Prisma.IntFilter<"Tools"> | number;
    name?: Prisma.StringFilter<"Tools"> | string;
    operation?: Prisma.StringFilter<"Tools"> | string;
    success?: Prisma.BoolFilter<"Tools"> | boolean;
    result?: Prisma.JsonNullableFilter<"Tools">;
    error?: Prisma.StringNullableFilter<"Tools"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Tools"> | Date | string;
    message?: Prisma.XOR<Prisma.MessagesScalarRelationFilter, Prisma.MessagesWhereInput>;
};
export type ToolsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    operation?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    message?: Prisma.MessagesOrderByWithRelationInput;
};
export type ToolsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ToolsWhereInput | Prisma.ToolsWhereInput[];
    OR?: Prisma.ToolsWhereInput[];
    NOT?: Prisma.ToolsWhereInput | Prisma.ToolsWhereInput[];
    messageId?: Prisma.IntFilter<"Tools"> | number;
    name?: Prisma.StringFilter<"Tools"> | string;
    operation?: Prisma.StringFilter<"Tools"> | string;
    success?: Prisma.BoolFilter<"Tools"> | boolean;
    result?: Prisma.JsonNullableFilter<"Tools">;
    error?: Prisma.StringNullableFilter<"Tools"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Tools"> | Date | string;
    message?: Prisma.XOR<Prisma.MessagesScalarRelationFilter, Prisma.MessagesWhereInput>;
}, "id">;
export type ToolsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    operation?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ToolsCountOrderByAggregateInput;
    _avg?: Prisma.ToolsAvgOrderByAggregateInput;
    _max?: Prisma.ToolsMaxOrderByAggregateInput;
    _min?: Prisma.ToolsMinOrderByAggregateInput;
    _sum?: Prisma.ToolsSumOrderByAggregateInput;
};
export type ToolsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ToolsScalarWhereWithAggregatesInput | Prisma.ToolsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ToolsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ToolsScalarWhereWithAggregatesInput | Prisma.ToolsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Tools"> | number;
    messageId?: Prisma.IntWithAggregatesFilter<"Tools"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Tools"> | string;
    operation?: Prisma.StringWithAggregatesFilter<"Tools"> | string;
    success?: Prisma.BoolWithAggregatesFilter<"Tools"> | boolean;
    result?: Prisma.JsonNullableWithAggregatesFilter<"Tools">;
    error?: Prisma.StringNullableWithAggregatesFilter<"Tools"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Tools"> | Date | string;
};
export type ToolsCreateInput = {
    name: string;
    operation: string;
    success: boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: string | null;
    createdAt?: Date | string;
    message: Prisma.MessagesCreateNestedOneWithoutToolUsedInput;
};
export type ToolsUncheckedCreateInput = {
    id?: number;
    messageId: number;
    name: string;
    operation: string;
    success: boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: string | null;
    createdAt?: Date | string;
};
export type ToolsUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operation?: Prisma.StringFieldUpdateOperationsInput | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.MessagesUpdateOneRequiredWithoutToolUsedNestedInput;
};
export type ToolsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    messageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operation?: Prisma.StringFieldUpdateOperationsInput | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ToolsCreateManyInput = {
    id?: number;
    messageId: number;
    name: string;
    operation: string;
    success: boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: string | null;
    createdAt?: Date | string;
};
export type ToolsUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operation?: Prisma.StringFieldUpdateOperationsInput | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ToolsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    messageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operation?: Prisma.StringFieldUpdateOperationsInput | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ToolsListRelationFilter = {
    every?: Prisma.ToolsWhereInput;
    some?: Prisma.ToolsWhereInput;
    none?: Prisma.ToolsWhereInput;
};
export type ToolsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ToolsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    operation?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ToolsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
};
export type ToolsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    operation?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ToolsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    operation?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ToolsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
};
export type ToolsCreateNestedManyWithoutMessageInput = {
    create?: Prisma.XOR<Prisma.ToolsCreateWithoutMessageInput, Prisma.ToolsUncheckedCreateWithoutMessageInput> | Prisma.ToolsCreateWithoutMessageInput[] | Prisma.ToolsUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.ToolsCreateOrConnectWithoutMessageInput | Prisma.ToolsCreateOrConnectWithoutMessageInput[];
    createMany?: Prisma.ToolsCreateManyMessageInputEnvelope;
    connect?: Prisma.ToolsWhereUniqueInput | Prisma.ToolsWhereUniqueInput[];
};
export type ToolsUncheckedCreateNestedManyWithoutMessageInput = {
    create?: Prisma.XOR<Prisma.ToolsCreateWithoutMessageInput, Prisma.ToolsUncheckedCreateWithoutMessageInput> | Prisma.ToolsCreateWithoutMessageInput[] | Prisma.ToolsUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.ToolsCreateOrConnectWithoutMessageInput | Prisma.ToolsCreateOrConnectWithoutMessageInput[];
    createMany?: Prisma.ToolsCreateManyMessageInputEnvelope;
    connect?: Prisma.ToolsWhereUniqueInput | Prisma.ToolsWhereUniqueInput[];
};
export type ToolsUpdateManyWithoutMessageNestedInput = {
    create?: Prisma.XOR<Prisma.ToolsCreateWithoutMessageInput, Prisma.ToolsUncheckedCreateWithoutMessageInput> | Prisma.ToolsCreateWithoutMessageInput[] | Prisma.ToolsUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.ToolsCreateOrConnectWithoutMessageInput | Prisma.ToolsCreateOrConnectWithoutMessageInput[];
    upsert?: Prisma.ToolsUpsertWithWhereUniqueWithoutMessageInput | Prisma.ToolsUpsertWithWhereUniqueWithoutMessageInput[];
    createMany?: Prisma.ToolsCreateManyMessageInputEnvelope;
    set?: Prisma.ToolsWhereUniqueInput | Prisma.ToolsWhereUniqueInput[];
    disconnect?: Prisma.ToolsWhereUniqueInput | Prisma.ToolsWhereUniqueInput[];
    delete?: Prisma.ToolsWhereUniqueInput | Prisma.ToolsWhereUniqueInput[];
    connect?: Prisma.ToolsWhereUniqueInput | Prisma.ToolsWhereUniqueInput[];
    update?: Prisma.ToolsUpdateWithWhereUniqueWithoutMessageInput | Prisma.ToolsUpdateWithWhereUniqueWithoutMessageInput[];
    updateMany?: Prisma.ToolsUpdateManyWithWhereWithoutMessageInput | Prisma.ToolsUpdateManyWithWhereWithoutMessageInput[];
    deleteMany?: Prisma.ToolsScalarWhereInput | Prisma.ToolsScalarWhereInput[];
};
export type ToolsUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: Prisma.XOR<Prisma.ToolsCreateWithoutMessageInput, Prisma.ToolsUncheckedCreateWithoutMessageInput> | Prisma.ToolsCreateWithoutMessageInput[] | Prisma.ToolsUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.ToolsCreateOrConnectWithoutMessageInput | Prisma.ToolsCreateOrConnectWithoutMessageInput[];
    upsert?: Prisma.ToolsUpsertWithWhereUniqueWithoutMessageInput | Prisma.ToolsUpsertWithWhereUniqueWithoutMessageInput[];
    createMany?: Prisma.ToolsCreateManyMessageInputEnvelope;
    set?: Prisma.ToolsWhereUniqueInput | Prisma.ToolsWhereUniqueInput[];
    disconnect?: Prisma.ToolsWhereUniqueInput | Prisma.ToolsWhereUniqueInput[];
    delete?: Prisma.ToolsWhereUniqueInput | Prisma.ToolsWhereUniqueInput[];
    connect?: Prisma.ToolsWhereUniqueInput | Prisma.ToolsWhereUniqueInput[];
    update?: Prisma.ToolsUpdateWithWhereUniqueWithoutMessageInput | Prisma.ToolsUpdateWithWhereUniqueWithoutMessageInput[];
    updateMany?: Prisma.ToolsUpdateManyWithWhereWithoutMessageInput | Prisma.ToolsUpdateManyWithWhereWithoutMessageInput[];
    deleteMany?: Prisma.ToolsScalarWhereInput | Prisma.ToolsScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ToolsCreateWithoutMessageInput = {
    name: string;
    operation: string;
    success: boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: string | null;
    createdAt?: Date | string;
};
export type ToolsUncheckedCreateWithoutMessageInput = {
    id?: number;
    name: string;
    operation: string;
    success: boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: string | null;
    createdAt?: Date | string;
};
export type ToolsCreateOrConnectWithoutMessageInput = {
    where: Prisma.ToolsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ToolsCreateWithoutMessageInput, Prisma.ToolsUncheckedCreateWithoutMessageInput>;
};
export type ToolsCreateManyMessageInputEnvelope = {
    data: Prisma.ToolsCreateManyMessageInput | Prisma.ToolsCreateManyMessageInput[];
    skipDuplicates?: boolean;
};
export type ToolsUpsertWithWhereUniqueWithoutMessageInput = {
    where: Prisma.ToolsWhereUniqueInput;
    update: Prisma.XOR<Prisma.ToolsUpdateWithoutMessageInput, Prisma.ToolsUncheckedUpdateWithoutMessageInput>;
    create: Prisma.XOR<Prisma.ToolsCreateWithoutMessageInput, Prisma.ToolsUncheckedCreateWithoutMessageInput>;
};
export type ToolsUpdateWithWhereUniqueWithoutMessageInput = {
    where: Prisma.ToolsWhereUniqueInput;
    data: Prisma.XOR<Prisma.ToolsUpdateWithoutMessageInput, Prisma.ToolsUncheckedUpdateWithoutMessageInput>;
};
export type ToolsUpdateManyWithWhereWithoutMessageInput = {
    where: Prisma.ToolsScalarWhereInput;
    data: Prisma.XOR<Prisma.ToolsUpdateManyMutationInput, Prisma.ToolsUncheckedUpdateManyWithoutMessageInput>;
};
export type ToolsScalarWhereInput = {
    AND?: Prisma.ToolsScalarWhereInput | Prisma.ToolsScalarWhereInput[];
    OR?: Prisma.ToolsScalarWhereInput[];
    NOT?: Prisma.ToolsScalarWhereInput | Prisma.ToolsScalarWhereInput[];
    id?: Prisma.IntFilter<"Tools"> | number;
    messageId?: Prisma.IntFilter<"Tools"> | number;
    name?: Prisma.StringFilter<"Tools"> | string;
    operation?: Prisma.StringFilter<"Tools"> | string;
    success?: Prisma.BoolFilter<"Tools"> | boolean;
    result?: Prisma.JsonNullableFilter<"Tools">;
    error?: Prisma.StringNullableFilter<"Tools"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Tools"> | Date | string;
};
export type ToolsCreateManyMessageInput = {
    id?: number;
    name: string;
    operation: string;
    success: boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: string | null;
    createdAt?: Date | string;
};
export type ToolsUpdateWithoutMessageInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operation?: Prisma.StringFieldUpdateOperationsInput | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ToolsUncheckedUpdateWithoutMessageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operation?: Prisma.StringFieldUpdateOperationsInput | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ToolsUncheckedUpdateManyWithoutMessageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operation?: Prisma.StringFieldUpdateOperationsInput | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ToolsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    messageId?: boolean;
    name?: boolean;
    operation?: boolean;
    success?: boolean;
    result?: boolean;
    error?: boolean;
    createdAt?: boolean;
    message?: boolean | Prisma.MessagesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tools"]>;
export type ToolsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    messageId?: boolean;
    name?: boolean;
    operation?: boolean;
    success?: boolean;
    result?: boolean;
    error?: boolean;
    createdAt?: boolean;
    message?: boolean | Prisma.MessagesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tools"]>;
export type ToolsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    messageId?: boolean;
    name?: boolean;
    operation?: boolean;
    success?: boolean;
    result?: boolean;
    error?: boolean;
    createdAt?: boolean;
    message?: boolean | Prisma.MessagesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tools"]>;
export type ToolsSelectScalar = {
    id?: boolean;
    messageId?: boolean;
    name?: boolean;
    operation?: boolean;
    success?: boolean;
    result?: boolean;
    error?: boolean;
    createdAt?: boolean;
};
export type ToolsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "messageId" | "name" | "operation" | "success" | "result" | "error" | "createdAt", ExtArgs["result"]["tools"]>;
export type ToolsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | Prisma.MessagesDefaultArgs<ExtArgs>;
};
export type ToolsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | Prisma.MessagesDefaultArgs<ExtArgs>;
};
export type ToolsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | Prisma.MessagesDefaultArgs<ExtArgs>;
};
export type $ToolsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tools";
    objects: {
        message: Prisma.$MessagesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        messageId: number;
        name: string;
        operation: string;
        success: boolean;
        result: runtime.JsonValue | null;
        error: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["tools"]>;
    composites: {};
};
export type ToolsGetPayload<S extends boolean | null | undefined | ToolsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ToolsPayload, S>;
export type ToolsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ToolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ToolsCountAggregateInputType | true;
};
export interface ToolsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tools'];
        meta: {
            name: 'Tools';
        };
    };
    /**
     * Find zero or one Tools that matches the filter.
     * @param {ToolsFindUniqueArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolsFindUniqueArgs>(args: Prisma.SelectSubset<T, ToolsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ToolsClient<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolsFindUniqueOrThrowArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ToolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ToolsClient<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsFindFirstArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolsFindFirstArgs>(args?: Prisma.SelectSubset<T, ToolsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ToolsClient<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsFindFirstOrThrowArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ToolsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ToolsClient<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tools.findMany()
     *
     * // Get first 10 Tools
     * const tools = await prisma.tools.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const toolsWithIdOnly = await prisma.tools.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ToolsFindManyArgs>(args?: Prisma.SelectSubset<T, ToolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tools.
     * @param {ToolsCreateArgs} args - Arguments to create a Tools.
     * @example
     * // Create one Tools
     * const Tools = await prisma.tools.create({
     *   data: {
     *     // ... data to create a Tools
     *   }
     * })
     *
     */
    create<T extends ToolsCreateArgs>(args: Prisma.SelectSubset<T, ToolsCreateArgs<ExtArgs>>): Prisma.Prisma__ToolsClient<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tools.
     * @param {ToolsCreateManyArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tools = await prisma.tools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ToolsCreateManyArgs>(args?: Prisma.SelectSubset<T, ToolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tools and returns the data saved in the database.
     * @param {ToolsCreateManyAndReturnArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tools = await prisma.tools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tools and only return the `id`
     * const toolsWithIdOnly = await prisma.tools.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ToolsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ToolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tools.
     * @param {ToolsDeleteArgs} args - Arguments to delete one Tools.
     * @example
     * // Delete one Tools
     * const Tools = await prisma.tools.delete({
     *   where: {
     *     // ... filter to delete one Tools
     *   }
     * })
     *
     */
    delete<T extends ToolsDeleteArgs>(args: Prisma.SelectSubset<T, ToolsDeleteArgs<ExtArgs>>): Prisma.Prisma__ToolsClient<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tools.
     * @param {ToolsUpdateArgs} args - Arguments to update one Tools.
     * @example
     * // Update one Tools
     * const tools = await prisma.tools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ToolsUpdateArgs>(args: Prisma.SelectSubset<T, ToolsUpdateArgs<ExtArgs>>): Prisma.Prisma__ToolsClient<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tools.
     * @param {ToolsDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ToolsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ToolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tools = await prisma.tools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ToolsUpdateManyArgs>(args: Prisma.SelectSubset<T, ToolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tools and returns the data updated in the database.
     * @param {ToolsUpdateManyAndReturnArgs} args - Arguments to update many Tools.
     * @example
     * // Update many Tools
     * const tools = await prisma.tools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tools and only return the `id`
     * const toolsWithIdOnly = await prisma.tools.updateManyAndReturn({
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
    updateManyAndReturn<T extends ToolsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ToolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tools.
     * @param {ToolsUpsertArgs} args - Arguments to update or create a Tools.
     * @example
     * // Update or create a Tools
     * const tools = await prisma.tools.upsert({
     *   create: {
     *     // ... data to create a Tools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tools we want to update
     *   }
     * })
     */
    upsert<T extends ToolsUpsertArgs>(args: Prisma.SelectSubset<T, ToolsUpsertArgs<ExtArgs>>): Prisma.Prisma__ToolsClient<runtime.Types.Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tools.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
    **/
    count<T extends ToolsCountArgs>(args?: Prisma.Subset<T, ToolsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ToolsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolsAggregateArgs>(args: Prisma.Subset<T, ToolsAggregateArgs>): Prisma.PrismaPromise<GetToolsAggregateType<T>>;
    /**
     * Group by Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ToolsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ToolsGroupByArgs['orderBy'];
    } : {
        orderBy?: ToolsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ToolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tools model
     */
    readonly fields: ToolsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Tools.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ToolsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    message<T extends Prisma.MessagesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MessagesDefaultArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Tools model
 */
export interface ToolsFieldRefs {
    readonly id: Prisma.FieldRef<"Tools", 'Int'>;
    readonly messageId: Prisma.FieldRef<"Tools", 'Int'>;
    readonly name: Prisma.FieldRef<"Tools", 'String'>;
    readonly operation: Prisma.FieldRef<"Tools", 'String'>;
    readonly success: Prisma.FieldRef<"Tools", 'Boolean'>;
    readonly result: Prisma.FieldRef<"Tools", 'Json'>;
    readonly error: Prisma.FieldRef<"Tools", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Tools", 'DateTime'>;
}
/**
 * Tools findUnique
 */
export type ToolsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsInclude<ExtArgs> | null;
    /**
     * Filter, which Tools to fetch.
     */
    where: Prisma.ToolsWhereUniqueInput;
};
/**
 * Tools findUniqueOrThrow
 */
export type ToolsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsInclude<ExtArgs> | null;
    /**
     * Filter, which Tools to fetch.
     */
    where: Prisma.ToolsWhereUniqueInput;
};
/**
 * Tools findFirst
 */
export type ToolsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsInclude<ExtArgs> | null;
    /**
     * Filter, which Tools to fetch.
     */
    where?: Prisma.ToolsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tools to fetch.
     */
    orderBy?: Prisma.ToolsOrderByWithRelationInput | Prisma.ToolsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tools.
     */
    cursor?: Prisma.ToolsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tools.
     */
    distinct?: Prisma.ToolsScalarFieldEnum | Prisma.ToolsScalarFieldEnum[];
};
/**
 * Tools findFirstOrThrow
 */
export type ToolsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsInclude<ExtArgs> | null;
    /**
     * Filter, which Tools to fetch.
     */
    where?: Prisma.ToolsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tools to fetch.
     */
    orderBy?: Prisma.ToolsOrderByWithRelationInput | Prisma.ToolsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tools.
     */
    cursor?: Prisma.ToolsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tools.
     */
    distinct?: Prisma.ToolsScalarFieldEnum | Prisma.ToolsScalarFieldEnum[];
};
/**
 * Tools findMany
 */
export type ToolsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsInclude<ExtArgs> | null;
    /**
     * Filter, which Tools to fetch.
     */
    where?: Prisma.ToolsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tools to fetch.
     */
    orderBy?: Prisma.ToolsOrderByWithRelationInput | Prisma.ToolsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tools.
     */
    cursor?: Prisma.ToolsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tools.
     */
    distinct?: Prisma.ToolsScalarFieldEnum | Prisma.ToolsScalarFieldEnum[];
};
/**
 * Tools create
 */
export type ToolsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tools.
     */
    data: Prisma.XOR<Prisma.ToolsCreateInput, Prisma.ToolsUncheckedCreateInput>;
};
/**
 * Tools createMany
 */
export type ToolsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tools.
     */
    data: Prisma.ToolsCreateManyInput | Prisma.ToolsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Tools createManyAndReturn
 */
export type ToolsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * The data used to create many Tools.
     */
    data: Prisma.ToolsCreateManyInput | Prisma.ToolsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Tools update
 */
export type ToolsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tools.
     */
    data: Prisma.XOR<Prisma.ToolsUpdateInput, Prisma.ToolsUncheckedUpdateInput>;
    /**
     * Choose, which Tools to update.
     */
    where: Prisma.ToolsWhereUniqueInput;
};
/**
 * Tools updateMany
 */
export type ToolsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Tools.
     */
    data: Prisma.XOR<Prisma.ToolsUpdateManyMutationInput, Prisma.ToolsUncheckedUpdateManyInput>;
    /**
     * Filter which Tools to update
     */
    where?: Prisma.ToolsWhereInput;
    /**
     * Limit how many Tools to update.
     */
    limit?: number;
};
/**
 * Tools updateManyAndReturn
 */
export type ToolsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * The data used to update Tools.
     */
    data: Prisma.XOR<Prisma.ToolsUpdateManyMutationInput, Prisma.ToolsUncheckedUpdateManyInput>;
    /**
     * Filter which Tools to update
     */
    where?: Prisma.ToolsWhereInput;
    /**
     * Limit how many Tools to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Tools upsert
 */
export type ToolsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tools to update in case it exists.
     */
    where: Prisma.ToolsWhereUniqueInput;
    /**
     * In case the Tools found by the `where` argument doesn't exist, create a new Tools with this data.
     */
    create: Prisma.XOR<Prisma.ToolsCreateInput, Prisma.ToolsUncheckedCreateInput>;
    /**
     * In case the Tools was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ToolsUpdateInput, Prisma.ToolsUncheckedUpdateInput>;
};
/**
 * Tools delete
 */
export type ToolsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsInclude<ExtArgs> | null;
    /**
     * Filter which Tools to delete.
     */
    where: Prisma.ToolsWhereUniqueInput;
};
/**
 * Tools deleteMany
 */
export type ToolsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Tools to delete
     */
    where?: Prisma.ToolsWhereInput;
    /**
     * Limit how many Tools to delete.
     */
    limit?: number;
};
/**
 * Tools without action
 */
export type ToolsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: Prisma.ToolsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tools
     */
    omit?: Prisma.ToolsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ToolsInclude<ExtArgs> | null;
};
//# sourceMappingURL=Tools.d.ts.map