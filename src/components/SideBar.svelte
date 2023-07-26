<script>
    import CoolText from '../components/CoolText.svelte';
    import { postArray } from '$lib/database.js';
</script>

<div class="side-bar">
    <CoolText text="busqueda"/>
    <br/>
    <div class="search-container">
      <form action="/action_page.php">
        <input type="text" placeholder="BUSCAR" name="search">
      </form>
    </div>

    <br />
    <br />
    <CoolText text="post recientes"/>
    <br/>
    <div class="post-recientes">
        {#each postArray as post}
            <div>
                <a href={`post/${post.id}`}>{post.title}</a>
            </div>
            <br/>
        {/each}
    </div>

    <br />
    <br />
    <CoolText text="páginas"/>
    <div class="paginas-side-bar">
        <div>Conócenos</div>
        <div>FAQ Yachay</div>
        <div>Lo más recientes</div>
        <div>Visualizador datos COVID-19</div>
    </div>
    
    <br />
    <br />
    <CoolText text="categorías"/>
</div>

<style>
    .side-bar {
        width: 830px;
        margin-left: 2rem;
    }

    .paginas-side-bar {
        font-family: 'Oswald', sans-serif;
        text-align: left;
    }
    
    .paginas-side-bar div{
        margin: 0rem 0rem;
    }
    
    .search-container {
        background-color: red;
    }

    .post-recientes {
        text-align: left;
    }
    a {
        color: #000;
        font-weight: bold;
        text-decoration: none;
        text-align: left;
    }

    input {
        width: 100%;
        height: 30px;
    }

    .paginas-side-bar div{
        color: #000;
        font-weight:600;
        padding-bottom: 10px;
    }

    @media screen and (max-width: 900px) {
        .side-bar {
            visibility: hidden;
        }
    }

    CoolText {
        padding: 20px 0px;
    }
</style>