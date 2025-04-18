import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useAppOrder = defineStore('appOrder', () => {
    const orderStage = ref([
        { stageId: 1, stageStatus: true},
        { stageId: 2, stageStatus: false },
    ])

    const toSecondStage = () => {
        orderStage.value[0].stageStatus = false;
        orderStage.value[1].stageStatus = true;
    }
    const toFinalStage = () => {
        orderStage.value[1].stageStatus = false;
        orderStage.value[0].stageStatus = false
        
    }
    const resetStage = () => {
        orderStage.value[0].stageStatus = true;
        orderStage.value[1].stageStatus = false;
    }

    return {
        orderStage,
        toSecondStage,
        toFinalStage,
        resetStage
    }
});