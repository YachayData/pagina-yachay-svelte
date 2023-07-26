<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="topnav">
    <div class="social-media-icons">
        <a href="https://www.facebook.com/yachaydata" target="_blank" class="fa fa-facebook"> </a>
        <a href="https://twitter.com/yachaydata" target="_blank class=" class="fa fa-twitter"> </a>
        <a href="https://www.instagram.com/yachaydata/" target="_blank class=" class="fa fa-instagram"> </a>
    </div>

    <div class="image-container">
        <a href="/">
            <img src="https://www.yachaydata.cl/wp-content/uploads/2021/02/a3-2.png" alt="logo" />
        </a>
    </div>
</div>
<div class="white-space"></div>

<style>
    .white-space {
        height: 7rem;
    }
    .topnav {
        overflow: hidden;
        background-color: #0F0F0F;
        position: fixed;
        width: 100%;
        z-index: 2;
        height: 6.4rem;
        display: flex;

    }

    .image-container {
        height: 100%;
        /* height: 5.5; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 3px solid #dbe4ed; */
        /* background-color: red; */
    }

    /* Social media icons */
    .fa {
        height: 30px;
        width: 30px;
        text-align: center;

        padding: 10px 10px;
        font-size: 30px;
        text-decoration: none;
        margin: 20px 10px;
        border-radius: 50px;
        
        color: white;
        background: #333333;
    }

    .fa-facebook:hover {
        background: #3B5998;
    }

    .fa-twitter:hover {
        background: #55ACEE;
    }

    .fa-instagram:hover {
        background: #125688;
    }
    
    /* .topnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    } */
    
    /* .topnav a:hover {
      background-color: #ddd;
      color: black;
    } */
    
    /* .topnav a.active {
      background-color: #04AA6D;
      color: white;
    } */

    .image-container {
        text-align: center;
        width: 76%;
    }

    /* .social-media-icons {
        visibility: hidden;
        background-color: ;
    } */

    
    @media screen and (max-width: 990px) {
        .social-media-icons {
            visibility: hidden;
            width: 0px;
            /* background-color: red; */
        }

        .image-container {
            width: 100%;
        }

        /* .topnav {
            display: block;
        } */
    }

</style>