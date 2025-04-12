<script setup lang="ts">
import { ref } from 'vue'
import {
    IonCard,
    IonContent,
    IonCol,
    IonGrid,
    IonImg,
    IonRow
} from '@ionic/vue'
import { useStoreGallery } from '@/composables/useStoreGallery'
import { IBeyInfo } from '@/models/IBeyInfo'
const beywatches = ref<IBeyInfo[]>([])
</script>

<template>
    <ion-content>
        <ion-grid>
            <ion-row>
                <ion-col size="2" v-for="bey in beywatches" :key="bey.id">
                    <ion-card @vue:mounted="useStoreGallery()"></ion-card>
                    <ion-img :src="bey.webviewPath"></ion-img>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
</template>
