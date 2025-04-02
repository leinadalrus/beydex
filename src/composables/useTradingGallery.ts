import { ref, watch } from 'vue'
import { Preferences } from '@capacitor/preferences'
import { Storage } from '@ionic/storage'
import { IBeyInfo } from '@/models/IBeyInfo'

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

export const useTradingGallery = () => {
    const save = async (uuid: number) => {
        const id = await BEY_STORE.get('id')
        if (id != uuid) return 0
        return id
    }
    return save
}

watch(beywatches, cacheTradingCards)
