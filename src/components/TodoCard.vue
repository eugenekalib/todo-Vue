<template>
    <div 
    :class="$style.card"
    @mouseover="isHovered = true" 
    @mouseleave="isHovered = false" 
    >
        <p> {{ text }} </p>
        <div :class="$style.buttons">
            <TodoButton v-show="isHovered" type="change" />
            <TodoButton v-show="isHovered" type="delete" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoButton from '@/components/ui/TodoButton.vue';

const isHovered = ref(false);

defineProps({
    text: {
        type: String,
        required: true,
    }
})
</script>

<style module>
.card {
    border-radius: 20px;
    background-color: var(--color-white);
    padding: 20px;
    height: fit-content;
    font-weight: 500;
    font-size: 20px;
    position: relative;
}
.buttons {
    position: absolute;
    right: 20px;
    top: -11px;
    margin-left: 10px;
}
</style>
