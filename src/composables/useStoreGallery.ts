import { onMounted, ref, watch } from 'vue'
import { Directory, Filesystem } from '@capacitor/filesystem'
import { Preferences } from '@capacitor/preferences'
import { IBeyInfo } from '@/models/IBeyInfo'
import { IBeyData } from '@/models/IBeyData'

// Cordova SQLite
import { Drivers, Storage } from '@ionic/storage'
import CordovaSQliteDriver from 'localforage-cordovasqlitedriver'

export const BEYDEX_STORAGE = new Storage({
    name: '__mybeydexdatabase',
    driverOrder: [
        CordovaSQliteDriver._driver,
        Drivers.IndexedDB,
        Drivers.LocalStorage
    ]
})

await BEYDEX_STORAGE.defineDriver(CordovaSQliteDriver)

const beywatches = ref<IBeyInfo[]>([])
const BEYDEX_KEYNAME = 'beydices'

await BEYDEX_STORAGE.create()

const cacheTradingCards = async () => {
    Preferences.set({
        key: BEYDEX_KEYNAME,
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
    const tradingList = await Preferences.get({ key: BEYDEX_KEYNAME })
    const tradesInPreferences = tradingList.value
        ? JSON.parse(tradingList.value)
        : []

    for (const trade of tradesInPreferences) {
        const item = await Filesystem.readFile({
            path: trade.filepath,
            directory: Directory.Data
        })

        trade.webviewPath = `data:image/jpeg;base64, ${item.data}`
    }
}

export const saveTradeAsync = async (
    trade: IBeyInfo,
    filename: string
): Promise<IBeyInfo> => {
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

export const useStoreGallery = () => {
    onMounted(loadSavedAsync)

    const save = async (uuid: number) => {
        const id = await BEYDEX_STORAGE.get('id')
        if (id != uuid) return 0
        return id
    }
    return save
}

watch(beywatches, cacheTradingCards)

// Publicly exported functions
export async function getXBeyAsAll() {
    return await BEYDEX_STORAGE.keys()
}

export async function getXBeyFromID(id: string) {
    return await BEYDEX_STORAGE.get(id)
}

export async function setXBeyFromPairs(key: string, data: string) {
    await BEYDEX_STORAGE.set(key, data)
}

export async function removeXBeyFromID(id: string) {
    await BEYDEX_STORAGE.remove(id)
}

export async function clearXBeyAsAll() {
    await BEYDEX_STORAGE.clear()
}
