<template>
    <button :class="[$style.todoButton, buttonClasses]">
        {{ buttonText }}
    </button>
</template>

<script setup>
import { computed, useCssModule } from 'vue';

const classesList = useCssModule();

const props = defineProps({
    type: {
        type: String,
        required: true,
    }
});

const buttonText = computed(() => {
    const text = {
        change: 'Изменить',
        delete: 'Удалить',
    };
    return text[props.type];
});
const buttonClasses = computed(() => {
    const buttonClass = {
        change: classesList.changeButton,
        delete: classesList.deleteButton,
    };
    return buttonClass[props.type] || '';
});
</script>

<style module>
.todoButton {
    border-radius: 2px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-transform: lowercase;
    margin-left: 10px;
}
.changeButton {
    background-color: yellow;
}
.deleteButton {
    background-color: red;
}
</style>
