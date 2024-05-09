<script setup>

</script>

<template>
    <header >
        <div class="wrapper">
            <nav class="header-navigation">
                <div class="header-contacts">
                    <span class="header-link swis t-w">mvmax1000@yandex.ru</span>
                    <span class="header-link swis t-w">8 (925) 892-75-75</span>
                </div>
                <div class="header-links">
                    <NuxtLink to="/portfolio" class="header-link swis t-w">Портфолио</NuxtLink>
                    <NuxtLink to="/" class="header-link swis t-w">Интернет-магазин</NuxtLink>
                    <NuxtLink to="/konkurs" class="header-link swis t-w">Конкурс</NuxtLink>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        background-color: rgba(23, 7, 7, 1);
        height: 80px;
    }
    .wrapper{
        max-width: 1440px;
        height: 100%;
        padding: 30px 44px;    
    }
    .t-w{
        color: rgba(255, 252, 251, 1);
    }
    .swis{
        font-family: Swis721CnBTRusbyme-Roman;;
    }
    .header-navigation{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header-contacts{
        display: flex;
        gap:40px;
    }
    .header-links{
        display: flex;
        gap: 25px;
    }
    .header-link{
        font-weight: 400;
        font-size: 16px; 
        line-height: 120%;
    }
</style>