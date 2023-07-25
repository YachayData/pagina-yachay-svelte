<script>
    import CoolText from '../components/CoolText.svelte';
</script>

<div class="side-bar">
    <CoolText text="busqueda"/>
    <br />
    <CoolText text="post recientes"/>
    <br />
    <CoolText text="páginas"/>
    <div class="paginas-side-bar">
        <div>Conócenos</div>
        <div>FAQ Yachay</div>
        <div>Lo más recientes</div>
        <div>Visualizador datos COVID-19</div>
    </div>
    <br />
    <CoolText text="categorías"/>
</div>

<style>
    .side-bar {
        width: 610px;
        margin-left: 2rem;
        background-color: pink;
    }

    .paginas-side-bar {
        font-family: 'Oswald', sans-serif;
        text-align: left;
    }
    
    .paginas-side-bar div{
        margin: 1rem 0rem;
    }
</style>