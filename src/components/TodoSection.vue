<template>
    <div :class="['container', $style.todoWrapper]">
        <h2 :class="$style.heading">Список задач</h2>
        <div :class="$style.cardsWrapper">
            <TodoCard 
            v-for="task in tasks"
            :key="task.id"
            :text="task.text"
            />
        </div>
    </div>
</template>

<script setup>
import TodoCard from '@/components/TodoCard.vue';
import { onMounted } from "vue";
import getTodos from '@/api/api-todos';
import { reactive } from 'vue';

const tasks = reactive([]);

const getTodoList = async () => {
    const response = await getTodos();
    tasks.push(...response);
} 

onMounted(async () => {
    await getTodoList();
})

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