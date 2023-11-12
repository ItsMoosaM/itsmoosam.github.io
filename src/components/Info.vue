<script setup>
import SliderVue from '../components/Slider.vue';
import { ref } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();

const cleanUrl = () => {
    history.pushState('object or string', 'Title', '/ ');
    // location.href = "/"
}

let isVisible = ref(false);
const toggleNav = () => {
    isVisible.value = !isVisible.value
}
// setInterval(cleanUrl(), 1000)
</script>

<template>
    <div class="all-container">
        <div id="home" class="home containers">
            <div class="header-container">
                <!-- <div class="logo">
                <img src="../assets/MMM-Logo-No-Reflection.png" alt="">
                    <h1>ItsMoosaM</h1>
                </div> -->
                <div class="nav-container" :class="{ visible: isVisible }">
                    <ul>
                        <TransitionGroup name="nav-transition">
                            <li class="links icon"><a class="barIcon" href="javascript:void(0)" @click="toggleNav"><img
                                        v-if="!isVisible" src="../assets/bars-solid.svg" alt=""><img v-if="isVisible"
                                        src="../assets/xmark-solid.svg" alt=""></a></li>
                            <li class="links 1"><a href="/#home">Home</a></li>
                            <li class="links 2"><a href="/#skills">Skills</a></li>
                            <li class="links 3"><a href="/#projects">Projects</a></li>
                            <li class="links 4"><a href="/#about">About</a></li>
                            <li class="links 5"><a href="/#contact">Contact</a></li>
                        </TransitionGroup>
                    </ul>
                </div>
            </div>
            <div class="text-container">
                <div class="text-inner-container">
                    <h1>Moosa Mughal</h1>
                    <!-- <br>
                    <h3>ItsMoosaM</h3> -->
                    <br>
                    <h4>Learner, Programmer, Animator, Engineer</h4>
                </div>
            </div>
        </div>
        <div id="skills" class="skills containers">
            <div class="ContainerTitle">
                <h1>My Skills</h1>
            </div>
            <!-- <div class="rank-info">
                <div class="ranking-container">
                    <div class="ranking-scale-outer-container">
                        <div class="ranking-scale-container">
                            <div class="rank 1 top">Expert</div>
                            <div class="rank 2 yes">Proficient</div>
                            <div class="rank 3 yes">Competent</div>
                            <div class="rank 4 yes">Advanced Beginner</div>
                            <div class="rank 5 yes bottom">Novice</div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="mySkills">
                <div class="theSkills 1">
                    <img src="../assets/blender-logo.png" alt="">
                    <div class="textcontainer">
                        <h2>Blender</h2>
                        <h3>I started learning blender a few years ago as I was interested in 3D modeling and animation and
                            am now able to make fairly decent projects with the skills I have acquired.</h3>
                        <!-- <button @click="router.push('/projects')">More Info</button> -->
                    </div>
                </div>
                <div class="theSkills 2">
                    <div class="textcontainer">
                        <h2>Game Development</h2>
                        <h3>
                            I have also been into game development for a few years and this has helped me learn programming
                            concepts in the C# language,
                            as the main game engine I used was Unity. You can look at some of my games <a
                                @click="router.push('/projects')">here</a>.
                        </h3>
                        <!-- <button>More Info</button> -->
                    </div>
                    <img class='unitylogo' src="../assets/unity-new-20212110.jpg" alt="">
                </div>
                <div class="theSkills 3">
                    <img src="../assets/html5-logo-31819.png" alt="">
                    <div class="textcontainer">
                        <h2>Web Developement</h2>
                        <h3>
                            I have also been learning web development on and off for about a year and this portfolio has
                            been developed with the skills I have learnt.
                        </h3>
                        <!-- <button>More Info</button> -->
                    </div>
                </div>
                <div class="theSkills 4"></div>
                <div class="theSkills 5"></div>
                <div class="theSkills 6"></div>
                <!-- <div class="theSkills 7"></div>
                <div class="theSkills 8"></div> -->
            </div>
        </div>
        <div id="projects" class="projects containers">
            <div class="ContainerTitle">
                <h1>My Projects</h1>
            </div>
            <div class="theProjects 1">
                <div class="mainProjects">
                    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/1oGgOVob4So?si=fHHOgEznVREilLxc"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
                <div class="textcontainer">
                    <h2>The Blacksmith</h2>
                    <h3>My most recent short film made with Blender. This short film helped
                        learn alot about animmating and using prex</h3>
                    <!-- <button @click="router.push('/projects')">More Info</button> -->
                </div>
            </div>
            <div class="theProjects 2">
                <div class="textcontainer">
                    <h2>Back to Life</h2>
                    <h3>
                        A platformer game I made for the <a href="https://gaming-m.itch.io/back-to-life" target="_blank" rel="noopener noreferrer">GameDev.tv Game Jam 2022</a>. For the theme: DEATH IS ONLY THE BEGINNING.

                    </h3>
                    <!-- <button>More Info</button> -->
                </div>
                <a href="https://sharemygame.com/@Gaming_M/back-to-life" target="_blank"><img
                        src="../assets/backToLifeIMG.png" alt=""></a>
                <div class="mainProjects"></div>
            </div>
            <div class="theProjects 3">
                <!-- <div class="mainProjects"> </div> -->
                <a href="https://itsmoosam.github.io/mmdb-store-ics3u-assignment-06/" target="_blank"><img
                            src="..\assets\mmdbIMG.png" alt=""></a>
                <div class="textcontainer">
                    <h2>Web Developement</h2>
                    <h3>
                        I have also been learning web development on and off for more than an year and this portfolio has
                        been developed with the skills I have learnt. On the left is a movie website I made that uses the TMDB API.
                    </h3>
                    <!-- <button>More Info</button> -->
                </div>
            </div>
        </div>
        <div id="about" class="about containers">
            <div class="ContainerTitle">
                <h1>About Me</h1>
            </div>
        </div>
        <div id="contact" class="contact containers">
            <div class="ContainerTitle">
                <h1>Contact</h1>
            </div>
        </div>
        <a href="/#home">
            <div class="toTop">
                <img src="../assets/circle-up-solid.svg" class="arrow" alt="">
            </div>
        </a>
    </div>
</template>

<style scoped>
.list-move,
.nav-transition-enter-active,
.nav-transition-enter-active {
    transition: opacity 1s linear, transform .5s ease;
}

.nav-transition-enter-from,
.nav-transition-leave-to {
    opacity: 0;
    transform: scale(0) translateX(100px);
}

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
    transition: .6s ease;

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
    transition: .8s ease;
    background-color: #00273a;
}

.containers {
    height: 100vh;
    text-align: center;
    background-image: radial-gradient(#001824, transparent, transparent);
}

.skills {
    /* height: 100vh; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 1rem;
    /* background-image: radial-gradient(rgba(0, 166, 185, 0.6), transparent, transparent); */
    background-image: linear-gradient(to bottom, #010208, #010208, transparent, transparent, transparent, #010208), url(../assets/MMM-Logo-No-Reflection.png);
    background-position: center;
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
    grid-column: span 8;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-image: linear-gradient(to right bottom, #00A6B9, #07D100);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.logo img {
    height: 3rem;
    border-radius: .5rem;
    margin-right: 1rem;
}

.nav-container {
    grid-column: span 8;
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
    font-size: 130%;
    text-shadow: 0 0 30px rgba(49, 179, 142, 0.5), 0 0 30px rgba(7, 209, 0, 0.4);
}

.links a {
    display: block;
    color: #07D100;
    text-align: center;
    padding: 1rem 2rem;
    text-decoration: none;
}

.links a:hover {
    transform: scale(1.1);
    -webkit-background-clip: none;
    -webkit-text-fill-color: #00A6B9;

    /* background-color: #00545d39; */
    color: #00A6B9;
    transition: all .6s ease, background-color .6s ease, transform .2s ease, color .6s ease;
}

.icon {
    display: none;
}

.barIcon {
    -webkit-background-clip: none;
    -webkit-text-fill-color: transparent;
    background-color: transparent;
}

.barIcon img {
    background-color: transparent;
    height: 2rem;
    filter: invert(49%) sepia(81%) saturate(1561%) hue-rotate(78deg) brightness(101%) contrast(120%);
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
    animation: titleEnter 4s alternate 1s forwards, textGlow 1s alternate-reverse 1s infinite linear;

    /* text-shadow: 0 0 20px rgba(49, 179, 142, 0.5), 0 0 20px rgba(7, 209, 0, 0.4); */

    background-image: linear-gradient(to right, #00A6B9, #07D100);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

.text-inner-container h4 {
    font-family: 'Source Code Pro';
    font-size: 90%;
    text-shadow: 0 0 50px rgba(49, 179, 142, 0.5), 0 0 50px rgba(7, 209, 0, 0.4);
}

@keyframes textGlow {
    0% {
        text-shadow: 0 0 20px rgba(49, 179, 142, 0.5), 0 0 20px rgba(7, 209, 0, 0.4);
    }

    100% {
        text-shadow: 0 0 40px rgba(49, 179, 142, 0.5), 0 0 40px rgba(7, 209, 0, 0.4);

    }
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



.rank-info {
    /* border-radius: 1rem; */
    grid-column: span 1;
    grid-row: span 6;
    margin: 1rem 0rem 1rem 1rem;
    color: #010208;


    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
}

.ranking-info {
    grid-column: span 1;
    grid-row: span 1;
}

.mySkills {
    grid-column: span 3;
    grid-row: span 6;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    row-gap: 1rem;
    margin: 1rem 1rem 1rem 0rem;
    /* overflow: auto; */
}

.projects {
    grid-column: span 3;
    grid-row: span 6;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, minmax(0, 1fr));
    gap: 1rem;
    /* row-gap: 1rem; */
    margin: 1rem 1rem 1rem 0rem;
}

.theProjects {
    border-radius: 2rem;
    grid-column: span 2;
    grid-row: span 2;
    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    background-color: rgba(0, 166, 185, 0.2);
    /* border: px solid rgba(255, 255, 255, 0.1); */
    margin: 0rem 2rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* max-height: 15rem; */
    align-items: center;
    justify-content: center;
    color: #00eeff;
}

.theProjects .mainProjects {
    background-color: transparent;
    grid-column: span 2;
    grid-row: span 3;
    width: 80%;
    height: auto;
    /* filter: invert(9%) sepia(13%) saturate(4419%) hue-rotate(160deg) brightness(92%) contrast(102%); */
    margin: auto;
}

.ContainerTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: span 3;
    /* grid-row: span 1; */
}

.theSkills {
    border-radius: 2rem;
    grid-column: span 2;
    grid-row: span 1;
    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    background-color: rgba(0, 166, 185, 0.2);
    /* border: px solid rgba(255, 255, 255, 0.1); */
    margin: 0rem 2rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* max-height: 15rem; */
    align-items: center;
    justify-content: center;
    color: #00eeff;
}

.theSkills img {
    background-color: transparent;
    grid-column: span 2;
    grid-row: span 3;
    width: 80%;
    max-width: 350px;
    height: auto;
    /* filter: invert(9%) sepia(13%) saturate(4419%) hue-rotate(160deg) brightness(92%) contrast(102%); */
    margin: auto;
}

.theProjects a {
    color: #00eeff;
    background-color: transparent;
    grid-column: span 2;
    grid-row: span 3;
    width: 60%;
    max-width: 350px;
    height: auto;
    /* filter: invert(9%) sepia(13%) saturate(4419%) hue-rotate(160deg) brightness(92%) contrast(102%); */
    margin: auto;
}
.theProjects img{
    border-radius: 0.25rem;
}
.theProjects a:hover {
    width: 68%;
    cursor: pointer;
    /* animation: ease-in; */
    transition: 0.3s;
}

.textcontainer {
    grid-column: span 4;
    grid-row: span 3;
    background-color: transparent;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    overflow: overlay;
}

.textcontainer a {
    cursor: pointer;
    text-decoration: underline;
}

.textcontainer a:hover {
    color: #09ff00;
}

.textcontainer h2 {
    /* grid-column: span 4; */
    margin: auto;
    margin-top: 1rem;
    font-size: 200%;
    text-align: center;
    background-color: transparent;
    grid-row: span 1;
    /* -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black; */
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}

.textcontainer h3 {
    /* grid-column: span 4; */
    margin: auto;
    width: 70%;
    margin-top: .5rem;
    font-size: 100%;
    grid-row: span 2;
    background-color: transparent;
    /* margin-left: 1rem; */
    text-align: justify;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

.textcontainer button {
    grid-row: span 1;
    height: auto;
    margin: .5rem 2rem;
}

.textcontainer button:hover {}

.unitylogo {
    border-radius: 1rem;
    /* height: ; */
    /* width: auto; */
}

.ranking-container {
    grid-column: span 1;
    grid-row: span 6;
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.ranking-info {
    grid-column: span 1;
    grid-row: span 1;

    overflow: overlay;
    height: 100%;
    padding: 1rem;
    border-radius: .5rem;
    background-color: #00A6B9;
    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    background-color: rgba(0, 166, 185, 0.4);
    /* border: 1px solid rgba(255, 255, 255, 0.125); */
}

.ranking-scale-outer-container {

    grid-column: span 1;
    grid-row: span 1;

    width: 100%;
    height: 100%;
    border-radius: 1rem;
    display: grid;

    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    background-color: rgba(0, 166, 185, 0.4);
}

.ranking-scale-container {

    margin: auto;

    border: #353535 solid 2px;
    width: 80%;
    height: 80%;
    max-width: 8rem;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
}

.rank {
    /* margin: auto 1rem auto 1rem; */
    background-color: rgb(7, 209, 0.75);
    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(14px) saturate(180%);

    grid-column: span 1;
    grid-row: span 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}

.top {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

.yes {
    background-color: #04922F;
    border-top: #007523 solid 1px;
}

.yes:hover {
    background-color: #07D100;
    transition: all .2s ease;
}

.contact {}

@media screen and (max-width: 680px) {
    .nav-container .links {
        display: none;
        opacity: 0;
    }

    .projects {
        grid-column: span 3;
        grid-row: span 6;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(7, minmax(0, 1fr));
        gap: 1rem;
        /* row-gap: 1rem; */
        margin: 1rem 1rem 1rem 0rem;
    }

    .theProjects {
        border-radius: 2rem;
        grid-column: span 2;
        grid-row: span 2;
        backdrop-filter: blur(14px) saturate(180%);
        -webkit-backdrop-filter: blur(14px) saturate(180%);
        background-color: rgba(0, 166, 185, 0.2);
        /* border: px solid rgba(255, 255, 255, 0.1); */
        margin: 0rem 2rem;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);

    }

    .theProjects .mainProjects {
        background-color: transparent;
        grid-column: span 1;
    }

    .theSkills {
        grid-column: span 2;
        grid-row: span 1;
        backdrop-filter: blur(14px) saturate(180%);
        -webkit-backdrop-filter: blur(14px) saturate(180%);
        background-color: rgba(0, 166, 185, 0.2);
        /* border: px solid rgba(255, 255, 255, 0.1); */
        margin: 0rem 2rem;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
        /* max-height: 15rem; */
        align-items: center;
        justify-content: center;
        color: #00eeff;
    }

    .theSkills img {
        background-color: transparent;
        grid-column: span 1;
        grid-row: span 1;
        width: 50%;
        height: auto;
        /* filter: invert(9%) sepia(13%) saturate(4419%) hue-rotate(160deg) brightness(92%) contrast(102%); */
        margin: auto;
    }

    @keyframes navDisapper {
        0% {
            opacity: 1;
        }

        90% {
            opacity: 0;
        }

        100% {
            display: none;
        }
    }

    .nav-container .icon {
        float: center;
        display: block;
        opacity: 1;
    }

}

@media screen and (max-width: 680px) {
    .nav-container.visible .links {
        display: block;
        opacity: 1;
        transition: 1s all ease;
    }

    .nav-container.visible {
        background-color: #07D100;
        backdrop-filter: blur(6px) saturate(180%);
        -webkit-backdrop-filter: blur(6px) saturate(180%);
        background-color: rgba(0, 166, 185, 0.75);
        border-radius: 1rem;
        border: 0px solid rgba(255, 255, 255, 0.125);
        color: #07D100;
        width: 100%;
        height: 100vh;
        display: block;
        z-index: 10;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: 1s all ease;
    }

    .nav-container.visible .links {
        -webkit-text-fill-color: #07D100;
        background-color: transparent;
        text-shadow: none;
        color: #07D100;
        float: none;
        display: block;

        transition: 1s all ease;
    }

    .nav-container.visible ul {
        background-color: transparent;
        transition: 1s all ease;
    }
}
</style>