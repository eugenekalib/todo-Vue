<template>
    <TodoSection />
    <AppModal>
        <h2>[Создание]</h2>
        <p>Название</p>
        <AppInput placeholder="Задачи на сегодня"/>
        <AppButton type="green" text="Создать"/>
    </AppModal>
</template>

<script setup>
import TodoSection from '@/components/TodoSection.vue'
import AppModal from './AppModal.vue';
import AppButton from './ui/AppButton.vue';
import AppInput from './ui/AppInput.vue';
</script>

<style module>
    
</style>
