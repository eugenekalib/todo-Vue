<template>
    <div :class="['container', $style.todoWrapper]">
        <h2 :class="$style.heading">Список задач</h2>
        <div :class="$style.cardsWrapper">
            <TodoCard 
            v-for="(task, index) in tasks"
            :key="task.id"
            :text="task.text"
            />
        </div>
    </div>
</template>

<script setup>
import TodoCard from '@/components/TodoCard.vue';
const tasks = [
    { text: 'Карточка' },
    { text: 'Карточка с очень большим длинным текстом' },
    { text: 'Карточка с текстом' },
    { text: 'Карточка' },
    { text: 'Карточка' },
    { text: 'Карточка' },
];
</script>

<style module>
.todoWrapper {
    padding-top: 50px;
}
.heading {
    font-weight: 700;
    font-size: 24px;
}
.cardsWrapper {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 50px;
}
</style>