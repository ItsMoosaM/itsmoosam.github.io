<script setup>



const cleanUrl = () => {
    history.pushState('object or string', 'Title', '/ ');
    // location.href = "/"
}

// setInterval(cleanUrl(), 1000)
</script>

<template>
    <div class="all-container">
        <div id="home" class="home containers">
            <div class="header-container">
                <div class="logo">
                    <h1>ItsMoosaM</h1>
                </div>
                <div class="nav-container">
                    <ul>
                        <li class="links 1"><a href="/#home">Home</a></li>
                        <li class="links 2"><a href="/#skills">Skills</a></li>
                        <li class="links 3"><a href="/#projects">Projects</a></li>
                        <li class="links 4"><a href="/#about">About</a></li>
                        <li class="links 5"><a href="/#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-container">
                <div class="text-inner-container">
                    <h1>Moosa Mughal</h1>
                    <br>
                    <h4>Learner, Programmer, Animator, Engineer</h4>
                </div>
            </div>
        </div>
        <div id="skills" class="skills containers">
            <div class="mySkillsTitle">
                <h1>My Skills</h1>
            </div>
            <div class="rank-info">
            </div>
            <div class="mySkills">
                <div class="theSkills 1"></div>
                <div class="theSkills 2"></div>
                <div class="theSkills 3"></div>
                <div class="theSkills 4"></div>
                <div class="theSkills 5"></div>
                <div class="theSkills 6"></div>
                <div class="theSkills 7"></div>
                <div class="theSkills 8"></div>
            </div>
        </div>
        <div id="projects" class="projects containers">
            <h1>My Projects</h1>
        </div>
        <div id="about" class="about containers">
            <h1>About Me</h1>
        </div>
        <div id="contact" class="contact containers">
            <h1>Contact</h1>
        </div>
        <a href="/#home">
            <div class="toTop">
                <img src="../assets/circle-up-solid.svg" class="arrow" alt="">
            </div>
        </a>
    </div>
</template>

<style scoped>
.toTop {
    width: 4rem;
    height: 4rem;
    border-radius: 9999rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    text-align: center;
    background-color: transparent;
}

.arrow {
    width: 3rem;
    height: auto;
    font-size: 3rem;
    background-color: transparent;
    color: #00A6B9;
    filter: invert(44%) sepia(79%) saturate(822%) hue-rotate(146deg) brightness(94%) contrast(102%);
}

.toTop:hover {
    transition: .2s ease;
    background-color: #00273a;
}

.containers {
    height: 100vh;
    text-align: center;
    background-image: radial-gradient(#001824, transparent, transparent);
}

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
    cursor: pointer;

    background-image: linear-gradient(to right bottom, #00A6B9, #07D100);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-container {
    grid-column: span 6;
    display: grid;
    justify-content: center;

    background-image: linear-gradient(to right, #00A6B9, #07D100);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

    -webkit-background-clip: none;
    -webkit-text-fill-color: #00A6B9;

    background-color: #00545d39;
    /* color: #00A6B9; */
    transition: background-color .6s ease, transform .2s ease, color .6s ease;
}

.text-container {
    background-image: radial-gradient(#001824, transparent, transparent);
    height: 92vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.text-inner-container {
    opacity: 0;
    font-size: 150%;
    position: absolute;
    text-align: center;
    animation: titleEnter 4s alternate 1s forwards;

    background-image: linear-gradient(to right, #00A6B9, #07D100);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-inner-container h4 {
    font-family: 'Source Code Pro';
    font-size: 90%;
}

@keyframes titleEnter {
    0% {
        opacity: 0;
        transform: scale(0.6);
        /* background-image: linear-gradient(to right, #00A6B9, #07D100); */
    }

    50% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 1;
        transform: scale(1);
        /* background-image: linear-gradient(to right, #00A6B9, #07D100); */
    }
}

.skills {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 1rem;
    background-image: radial-gradient(rgba(0, 166, 185, 0.6), transparent, transparent);
}

.rank-info {
    border-radius: 1rem;
    grid-column: span 2;
    margin: 1rem 0rem 1rem 1rem;
    grid-row: span 9;
    background-color: #00A6B9;
}

.mySkills {
    grid-column: span 4;
    grid-row: span 9;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    row-gap: 1rem;
    margin: 1rem 1rem 1rem 0rem;
}

.mySkillsTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: span 6;
    grid-row: span 1;
}

.theSkills {
    border-radius: 2rem;
    grid-column: span 1;
    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    background-color: rgba(0, 166, 185, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.125);
}

.contact {

}
</style>