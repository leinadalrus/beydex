import { onMounted, ref, watch } from 'vue'
import { Directory, Filesystem } from '@capacitor/filesystem'
import { Preferences } from '@capacitor/preferences'
import { Storage } from '@ionic/storage'
import { IBeyInfo } from '@/models/IBeyInfo'
import { IBeyData } from '@/models/IBeyData'

const beywatches = ref<IBeyInfo[]>([])
const TRADING_KEYNAME = 'tradings'

const BEY_STORE = new Storage()
await BEY_STORE.create()

const cacheTradingCards = async () => {
    Preferences.set({
        key: TRADING_KEYNAME,
        value: JSON.stringify(beywatches.value)
    })
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

const loadSavedAsync = async () => {
    const tradingList = await Preferences.get({ key: TRADING_KEYNAME })
    const tradesInPreferences = tradingList.value ? JSON.parse(tradingList.value) : []

    for (const trade of tradesInPreferences) {
        const item = await Filesystem.readFile({
            path: trade.filepath,
            directory: Directory.Data
        })

        trade.webviewPath = `data:image/jpeg;base64, ${item.data}`
    }
}

export const saveTradeAsync = async (trade: IBeyInfo, filename: string): Promise<IBeyInfo> => {
    const response = await fetch(trade.webviewPath!)
    const blob = await response.blob()
    const beyData = convertBlobToBase64(blob) as unknown as IBeyData
    const base64Data = convertBlobToBase64(blob) as unknown as string

    const savedTrade = await Filesystem.writeFile({
        path: filename,
        data: base64Data,
        directory: Directory.Data
    })

    return {
        id: 0,
        name: filename,
        description: filename,
        data: beyData,
        filenamePath: savedTrade.uri,
        webviewPath: trade.webviewPath
    }
}


export const useTradingGallery = () => {
    onMounted(loadSavedAsync)

    const save = async (uuid: number) => {
        const id = await BEY_STORE.get('id')
        if (id != uuid) return 0
        return id
    }
    return save
}

watch(beywatches, cacheTradingCards)
