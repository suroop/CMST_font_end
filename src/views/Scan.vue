<template>
    <el-container>
        <el-header>
            <a href="" class="logo">LOGO</a>
            <div class="group">
                <ul class="navigation">
                    <li><a href="">指纹识别</a></li>
                    <li><a href="">漏洞扫描</a></li>
                    <li><a href="">安全资讯</a></li>
                    <li><a href="">我的信息</a></li>
                </ul>
            </div>
            <div class="sign_in_up">
                <div class="avatar">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </div>
                <el-row>
                    <el-button @click="goToLR(1)">登录</el-button>
                    <el-button @click="goToLR(2)">注册</el-button>
                </el-row>
            </div>
        </el-header>
        <el-main>
            <img src="../assets/fingerprint.svg" class="pic" alt="pic" />
            <div class="shell">
                <input type="text" placeholder="Search">
                <a href="#">
                    <i class="fa fa-hand-o-right"></i>
                    <i class="fa fa-search"></i>
                </a>
            </div>
        </el-main>
        <el-footer>
            <div class="waves">
                <div class="wave wave1" ></div>
                <div class="wave wave2" ></div>
                <div class="wave wave3" ></div>
                <div class="wave wave4" ></div>
            </div>
            <ul class="social_icon">
                <li><a href=""><i class="fa fa-weixin"></i></a></li>
                <li><a href=""><i class="fa fa-weibo"></i></a></li>
                <li><a href=""><i class="fa fa-google"></i></a></li>
                <li><a href=""><i class="fa fa-qq"></i></a></li>
            </ul>
            <ul class="menu">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <p>©2023 刘晨辉 | All Rights Reserved</p>
        </el-footer>
    </el-container>
</template>

<script>

    export default {
        name: "Scan",
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            goToLR(num){
                    this.$router.push({path: '/login', query: {num: num}});
            },
        }
    }
</script>

<style rel="stylesheet">

    .el-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #ecf5ff;
    }
    .el-header{
        width: 100%;
        height: 80px;
        background-color: #04befe;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        overflow-x: hidden;
        overflow-y: hidden;
        padding: 10px 20px;
        gap: 5px;
        box-shadow: 0 15px 15px rgba(4,190,254,0.5);
        position: relative;
        box-sizing: border-box;
    }
    .logo{
        color: #fff;
        text-decoration:none;
        font-size:1.5em;
        font-weight:700;
        text-transform:uppercase;
        letter-spacing: 0.1em;
    }
    .group{
        display: flex;
        align-items: center;

    }
    .el-header ul{
        position: relative;
        display: flex;
        gap: 30px;
        list-style: none;
    }
    .el-header ul li a{
        position: relative;
        font-size: 1em;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.2em;
    }
    .el-header ul li a:before{
        content: '';
        position: absolute;
        bottom: -10px;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transform: scaleX(0);
        transition: transform 0.5s ease-in-out;
        transform-origin: right;
    }
    .el-header ul li a:hover:before{
        transform: scaleX(1);
        transform-origin: left;
    }
    .el-header .sign_in_up{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .el-header .sign_in_up .el-button{
        background-color: transparent;
        font: 20px Consolas;
        color: #fff;
        border: none;
        padding: 0 2px;
        text-align: center !important;
        margin: auto;
    }
    .el-main {
        min-height: 500px;
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;

    }
    .pic{
        height: 250px;
        width: auto;
    }

    .shell {
        position: relative;
        width: 1000px;
        padding: 15px 30px;
        background-color: #04befe;
        border-radius: 20px;
        box-shadow: 0 10px 50px #04befe, 0 0 0 20px #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .shell input {
        width: 70%;
        height: 70px;
        color: #fff;
        font: 800 35px Consolas;
        border: 0;
        background-color: transparent;
    }

    .shell input::placeholder {
        color: #FFF;
    }

    .shell a {
        font-size: 70px;
        position: absolute;
        right: 30px;
        top: 15px;
        color: #fff;
        width: 150px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .shell a .fa {
        margin: 10px 13px;
        transition: .3s;
        height: 70px;
        width: 70px;
    }

    .shell a .fa-search {
        transform: translateX(0);
        opacity: 1;
        pointer-events: all;
    }

    .shell a .fa-hand-o-right {
        transform: translateX(-120px);
        opacity: 0 !important;
        pointer-events: none;
    }

    .shell a:hover .fa-search {
        transform: translateX(100px);
        opacity: 0 !important;
        pointer-events: none;
    }
    .shell a:hover .fa-hand-o-right {
        transform: translateX(80px);
        opacity: 1 !important;
        pointer-events: all;
    }

    .shell a::before {
        content: 'GO!';
        position: absolute;
        display: block;
        font-size: 50px;
        background-color: #04befe;
        padding: 5px 30px;
        top: 50px;
        right: -25px;
        border-radius: 10px;
        transition: .3s;
        opacity: 0;
        transition-delay: 100ms;
        z-index: -9999;
        pointer-events: none;
    }

    .shell a:hover::before{
        top: -115px;
        animation: box 1s infinite ease;
        opacity: 1;
        pointer-events: none;
    }

    .el-footer{
        background-color: #04befe;
        width: 100%;
        min-height: 120px;
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: content-box;
        position: relative;
    }
    .el-footer .social_icon,.el-footer .menu{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
        flex-wrap: wrap;
    }
    .el-footer .social_icon li,.el-footer .menu li{
        list-style: none;
    }
    .el-footer .social_icon li a{
        font-size: 20px;
        color: #fff;
        margin:0 10px;
        display: inline-block;
        transition: 0.5s;
    }
    .el-footer .social_icon li a:hover{
        transform: translateY(-10px);
    }
    .el-footer .menu li a{
        font-size: 1em;
        color: #fff;
        margin:0 10px;
        display: inline-block;
        transition: 0.5s;
        opacity: 0.5;
    }
    .el-footer .menu li a:hover{
        opacity: 1;
    }
    .el-footer p {
        color: #fff;
        text-align: center;
        margin-top: 15px;
        margin-bottom:10px ;
        font-size: 12px;
    }
    .wave{
        position: absolute;
        top: -100px;
        left: 0;
        width: 100%;
        height: 100px;
        background: url("../assets/wave.png");
        background-size: 1000px 100px;
    }
    .wave1{
        z-index: 1000;
        opacity: 1;
        bottom: 0;
        animation: animateWave 4s linear infinite;
    }
    .wave2{
        z-index: 999;
        opacity: 0.5;
        bottom: 0;
        animation: animateWave_02 4s linear infinite;
    }
    .wave3{
        z-index: 1000;
        opacity: 0.2;
        bottom: 15px;
        animation: animateWave 3s linear infinite;
    }
    .wave4{
        z-index: 999;
        opacity: 0.5;
        bottom: 10px;
        animation: animateWave_02 3s linear infinite;
    }
    @keyframes box {
        0%{
            transform: rotate(0deg);
        }
        33%{
            transform: rotate(8deg);
        }
        66%{
            transform: rotate(-8deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    @keyframes animateWave {
        0%{
            background-position-x: 1000px;
        }
        100%{
            background-position-x: 0;
        }

    }
    @keyframes animateWave_02 {
        0%{
            background-position-x: 0;
        }
        100%{
            background-position-x: 1000px;
        }

    }
    @media (max-width:700px){
        .el-header .sign_in_up .el-row{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }
</style>