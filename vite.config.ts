/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// Cordova SQLite
import { Drivers, Storage } from '@ionic/storage'
import CordovaSQliteDriver from 'localforage-cordovasqlitedriver'

const store = new Storage({
    driverOrder: [
        CordovaSQliteDriver._driver,
        Drivers.IndexedDB,
        Drivers.LocalStorage
    ]
})

await store.defineDriver(CordovaSQliteDriver)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), legacy()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    test: {
        globals: true,
        environment: 'jsdom'
    }
})
