<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<div class="topnav">
    <a href="https://www.facebook.com/yachaydata" target="_blank">News</a>
    <a href="#contact" target="_blank">Contact</a>
    <a href="#about" target="_blank">About</a>

    <div class="image-container">
        <a href="#about" target="_blank">
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
</style>