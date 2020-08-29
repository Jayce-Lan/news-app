<template>
    <div class="center">
        <!-- 使用插槽插入 -->
        <slot></slot>
    </div>
</template>
<style scoped>
    .center {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>