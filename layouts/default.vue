 <script lang="ts" setup>
    console.log("loaded")

</script>

<template>
    <section class="main">
        <div>
            <slot />
            <AppFooter/>
        </div>
    </section>
</template>

<style scoped>
    .main{
        background-color: rgba(255, 252, 251, 1);
        z-index: -2;
    }
</style>