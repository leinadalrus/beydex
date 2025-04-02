import { IBeyData } from "./IBeyData"

export interface IBeyInfo {
    id: number
    name: string
    data: IBeyData
    description: string
    filenamePath: string
    webviewPath?: string
}
