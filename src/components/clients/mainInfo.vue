<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">
                <app-left-panel class="sidePanel"></app-left-panel>
            </div>
            <transition name="fade">
                <app-show-info-panel class="col-md-offset-2 col-md-10"></app-show-info-panel>
            </transition>
            <transition name="fade">
                <app-exact-item-panel class="col-md-offset-2 col-md-10"></app-exact-item-panel>
            </transition>
        </div>

    </div>
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
    .sidePanel{
        position:absolute;
    }
    .fade-enter-active, .component-fade-leave-active {
        transition: all 1s;
    }
    .fade-enter, .component-fade-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
