<template>
<header :class="$style.header">
    <div :class="['container', $style.headerWrapper]">
        <AppLogo />
        <AppButton type="create"/>
    </div>
</header>
</template>

<script setup>
import AppLogo from '@/components/ui/AppLogo.vue';
import AppButton from '@/components/ui/AppButton.vue';
</script>

<style module>
.header {
    padding-block: 12px;
    background-color: var(--color-black);
}
.headerWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
