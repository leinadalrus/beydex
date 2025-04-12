import { ref, watch } from 'vue'
import { IBeyData } from '@/models/IBeyData.js'
import { IBeyInfo } from '@/models/IBeyInfo.js'

interface IMessageHead {
    method: string
    body: string
}

const asyncData = {
    data: String,
    err: Error
}

const { data, err } = asyncData

const messageHeads = ref<IMessageHead[]>([])

const useHandleSubmit = async () => {
    await fetch(`/api/${data}`, {
        method: 'POST'
    })

    if (err != null) return err
}

const convertBlobToBase64 = (blob: Blob) => {
    new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onerror = reject

        reader.onload = () => {
            resolve(reader.result)
        }

        reader.readAsDataURL(blob)
    })
}

export const saveTradeAsync = async (
    trade: IBeyInfo,
    filenamePath: string
): Promise<IBeyInfo> => {
    const response = await fetch(trade.webviewPath!)
    const blob = await response.blob()
    const beyData = convertBlobToBase64(blob) as unknown as IBeyData

    return {
        id: 0,
        name: trade.name,
        description: trade.description,
        data: beyData,
        filenamePath: filenamePath,
        webviewPath: trade.webviewPath
    }
}

watch(messageHeads, useHandleSubmit)
