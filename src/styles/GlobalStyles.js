import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
.light-theme{
    --primary-color: #02c9af;
    --primary-color-light: #47d6c3;
    --secondary-color: #ff7675;
    --background-dark-color: #e3fdfafa;
    --background-dark-grey: #9aefe4fa;
    --border-color: #98dfd6;
    --background-light-color: #d3d5d5fa;
    --background-light-color-2: #03ffdbfa;
    --white-color: #141414fa;
    --font-light-color: #2a2a2afa;
    --font-dark-color: #414242fa;
    --font-dark-color-2: #535454fa;
    --sidebar-dark-color: #c3ebe5fa;
    --scrollbar-bg-color: #d5fdf7fa;
    --scrollbar-thump-color: #84dfd2fa;
    --scrollbar-track-color: #e6ebeafa;
    --glass-color: #47d6c34a;
    --glass-color-2: #89b3aa40;
    --glass-color-3: #091a1829;
    --span-color:#02c9af57;
}
.dark-theme{
    --primary-color: #02c9af;
    --primary-color-light: #47d6c3;
    --secondary-color: #789d98;
    --background-dark-color: #060606;
    --background-dark-grey: #293c3a;
    --border-color: #325653;
    --background-light-color: #F1F1F1;
    --background-light-color-2: #48f1db7a;
    --white-color: #FFF;
    --font-light-color: #8bada8;
    --font-dark-color: #525454;
    --font-dark-color-2: #1e1e1e;
    --sidebar-dark-color: #000;
    --scrollbar-bg-color: #515252;
    --scrollbar-thump-color: #828584;
    --scrollbar-track-color: #494a4a;
    --glass-color: #47d6c34a;
    --glass-color-2: #091a1829;
    --glass-color-3: #05b79312;
    --span-color:rgba(25, 29, 43, 0.44);
}
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    list-style: none;
    text-decoration: none;
    font-family: calibri;
    font-size: 1.1rem;
}
body{
    background-color: var(--background-dark-color);
    color:var(--font-light-color);
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius:10px;    
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius:10px;    
    background-color: #383838;
}
a{
    font-family:inherit;
    color:inherit;
    font-size:1rem;
}
h1{
    font-size: 2rem;
    color: var(--white-color);
    span{
        font-size: 3rem;
    }
}
span{
    color: var(--primary-color);
}
.u-margin-bottom{
margin-bottom: 4rem;
}
.mode {
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }  
}
//Global media queries

//hamburger menu
.ham-burger-menu{
    display: none;
position: absolute;
right: 10%;
top: 2%;
z-index: 15;
svg{
    font-size:3rem;
}
}
.nav-toggle{
    transform: translateX(0);
    z-index: 20;
}
@media screen and (max-width: 1200px) {
    .ham-burger-menu{
        display: block;
    }

  }

`;
export default GlobalStyles;
