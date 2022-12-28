<script setup>

</script>

<template>

</template>

<style scoped>
.header-container {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(8, 1fr);
    height: 8vh;
    background-image: linear-gradient(to bottom, #001824, transparent);
}

.logo {
    grid-column: span 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-container {
    grid-column: span 6;
    display: grid;
    justify-content: center;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.links {
    float: left;
    font-size: 110%;
}

.links a {
    display: block;
    color: white;
    text-align: center;
    padding: 1rem 1.5rem;    
    text-decoration: none;
}

.links a:hover {
    transform: scale(1.1);
    background-color: #00535D;
    /* color: #00A6B9; */
    transition: background-color .6s ease, transform .2s ease, color .6s ease;
}
</style>