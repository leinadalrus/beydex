<script setup lang="ts">
import { IonIcon } from '@ionic/vue'
import { shapesSharp, square } from 'ionicons/icons'
</script>

<template>
    <ion-tab-button tab="beydex" href="/tabs/homeTab">
        <ion-icon :icon="shapesSharp">BeyDex</ion-icon>
    </ion-tab-button>
    <ion-tab-button tab="tab2" href="/tabs/messagesTab">
        <ion-icon :icon="square" />
        <ion-label>Messages</ion-label>
    </ion-tab-button>
</template>
