<template>
    <v-layout row wrap align-content-center>
        <app-left-panel class="sidePanel"></app-left-panel>
        <transition name="fade">
            <app-show-info-panel></app-show-info-panel>
        </transition>
        <transition name="fade">
            <app-exact-item-panel></app-exact-item-panel>
        </transition>
    </v-layout>

</template>

<script>
    import showInfoPanels from './showList/showInfoPanel.vue';
    import exactItemPanel from './showExactItem/ExactItemPanel.vue';
    import leftPanel from '../addPanels/leftPanel.vue';

    export default {
        components: {
            appLeftPanel: leftPanel,
            appShowInfoPanel: showInfoPanels,
            appExactItemPanel: exactItemPanel,
        }
    }

</script>

<style scoped lang="scss">
    $yellow: #ffe300;
    .fade-enter-active, .component-fade-leave-active {
        transition: all 1s;
    }
    .fade-enter, .component-fade-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
