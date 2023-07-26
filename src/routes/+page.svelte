<script>
    import PostCard from '../components/PostCard.svelte'
    import { postArray } from '../../static/database.js';
    import SideBar from '../components/SideBar.svelte';
    import NavBar from '../components/NavBar.svelte';
</script>

<NavBar />
<center>
    <div class="content">
        <div>
            {#each postArray as post}
                <PostCard {post}/>
            {/each}
        </div>
        <SideBar />
    </div>
</center>

<style>
    div {
        max-width: 70rem;
    }

    .content {
        display: flex;
    }
    

    @media screen and (max-width: 900px) {
        .content {
            display: block;
            text-align: center;
            /* width: 100% */
        }
    }
</style>