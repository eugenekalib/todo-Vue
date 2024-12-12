<template>
<button :class="[$style.button, buttonClass]">{{ buttonText }}</button>
</template>

<script setup>
import { computed, useCssModule } from 'vue';

const classList = useCssModule();

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    buttonText: {
        type: String,
        default: 'Кнопка',
    }
});
const buttonClass = computed(() => {
    const typeToClassMap = {
        outline: classList.outline || '',
        green: classList.green || '',
        red: classList.red || '',
    }
    return typeToClassMap[props.type]
})
</script>

<style module>
.button {
    padding: 8px 20px;
    color: var(--color-white);
    border-radius: 2px;
}
.outline {
    background: transparent;
    border: 1px solid var(--color-white);
}
.green {
    background-color: var(--color-success);
    border: 1px solif var(--color-success);
}
.red {
    background-color: var(--color-error);
    border: 1px solid var(--color-error);
}
</style>
