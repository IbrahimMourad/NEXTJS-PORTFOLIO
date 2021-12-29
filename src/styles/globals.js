import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  // Navbar 

  .navbar-light .navbar-toggler{
    border:none;
  }
  .navbar-light .container{
    max-width: 1140px;
    width: 100%;
    padding: 0 48px;
  }
  @media screen and (max-width:520px){
    .navbar-light .container{
      
      padding: 0 16px;
    }
  }

 
  .navbar .navbar-brand,
  .navbar-light .navbar-nav .nav-link{
    color:rgba(255,255,255,0.75);
    transition:transform .3s ease-in-out, color 0.3s ease-in-out;
    padding-right:8px;
    padding-left:8px;
  }
  .navbar .navbar-brand{
    padding:0;
    display: flex;
    align-items: center;
    
  }
  @media screen and (max-width:768px){
    .navbar-light .navbar-nav .nav-link{
    margin-left:30px
    }
  }
  .navbar .navbar-brand:hover,
  .navbar .navbar-nav .nav-link:hover{
    color:rgba(255,255,255,1);
  }

  .navbar-light .navbar-nav .nav-link.active{
    color:rgba(255,255,255,1);
    }
      @media screen and (max-width:768px){
    .navbar-light .navbar-nav .nav-link:hover,
    .navbar-light .navbar-nav .nav-link.active{
      color:rgba(255,255,255,1);
      transform:translateX(8px);
      border-left:2px solid #FFF;
    }
  }
  .navbar-light .navbar-toggler.collapsed,
  .navbar-toggler:focus-visible ,
  .navbar-toggler:focus{
    box-shadow:none;
    outline:none;
    border:none;
  }
 
  .navbar-light .navbar-toggler .navbar-toggler-icon{
    transition:background .3s ease;
    background-image:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(255,255,255,0.75)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
  }


`;

export default GlobalStyles;
