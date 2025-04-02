<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Beydex</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>

            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Beydex</ion-title>
                </ion-toolbar>
            </ion-header>

            <ExploreContainer name="Beydex" />

            <ion-fab vertical="bottom" horizontal="center" slot="fixed">
                <ion-fab-button @click="useTradingGallery()">
                    <ion-icon :icon="bandageSharp"></ion-icon>
                </ion-fab-button>
            </ion-fab>

            <ion-list>
                <MessageListItem
                    v-for="message in messages"
                    :key="message.id"
                    :read="false"
                    :fromName="message.fromName"
                    :subject="message.subject"
                    :date="message.date"
                />
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonContent,
    IonFab,
    IonHeader,
    IonIcon,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar
} from '@ionic/vue'
import ExploreContainer from '@/components/ExploreContainer.vue'
import MessageListItem from '@/components/MessageListItem.vue'
import { getMessages, Message } from '@/data/messages'
import { ref } from 'vue'
import { bandageSharp } from 'ionicons/icons'
import { useTradingGallery } from '@/composables/useTradingGallery'

const messages = ref<Message[]>(getMessages())

const refresh = (ev: CustomEvent) => {
    setTimeout(() => {
        ev.detail.complete()
    }, 3000)
}
</script>
