<script setup lang="ts">
import { ref } from 'vue'
import { IonContent, IonCol, IonGrid, IonImg, IonRow } from '@ionic/vue'
import { IBeyInfo } from '@/models/IBeyInfo'
const beywatches = ref<IBeyInfo[]>([])
</script>

<template>
    <ion-content>
        <ion-grid>
            <ion-row>
                <ion-col size="2" v-for="bey in beywatches" :key="bey.id">
                    <ion-img :src="bey.webviewPath"></ion-img>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
</template>
