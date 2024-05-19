export interface ResponseData {
    code: number,
    message: string,
    ok: boolean
}

export interface TradeMark {
    id?: number,
    tmName: string,
    loginUrl: string
}

export type Records = TradeMark[];

export interface TradeMarkResponseData extends ResponseData {
    data: {
        records: Records,
        pages: number,
        current: number,
        total: number,
        size: number,
        searchCount: boolean
    }
}