export interface HyperionClientOptions {
    async: boolean;
}

export interface StreamDeltasRequest {
    code: string;
    table: string;
    scope: string;
    payer: string;
    start_from: number | string;
    read_until: number | string;
}

export interface RequestFilter {
    field: string;
    value: string;
}

export interface StreamActionsRequest {
    contract: string;
    account: string;
    action: string;
    filters: RequestFilter[];
    start_from: number | string;
    read_until: number | string;
}

export interface ActionContent {
    "@timestamp": string;
    global_sequence: number;
    account_ram_deltas: {
        delta: number;
        account: string;
    }
    act: {
        authorization: {
            permission: string;
            actor: string;
        }
        account: string;
        name: string;
        data: any;
    }
    block_num: number;
    action_ordinal: number;
    creator_action_ordinal: number;
    cpu_usage_us: number;
    net_usage_words: number;
    code_sequence: number;
    abi_sequence: number;
    trx_id: string;
    producer: string;
    notified: string;
}

export interface DeltaContent {
    code: string;
    table: string;
    scope: string;
    payer: string;
    data: any;
}

export interface IncomingData {
    type: "action" | "string";
    mode: "live" | "history";
    content: ActionContent | DeltaContent
}

export interface LIBData {
    chain_id: string;
    block_num: number;
    block_id: string;
}

export interface ForkData {
    chain_id: string;
    starting_block: number;
    ending_block: number;
    new_id: string;
}
