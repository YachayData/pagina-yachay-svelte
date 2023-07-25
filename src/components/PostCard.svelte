<script>
    export let post;
</script>

<!-- <div > -->
<div class="post-container" onclick={`location.href='post/${post.id}';`} style="cursor: pointer;">
    <div class="image-container">
        <img src={post.imageUrl} alt="post"/>
    </div>
    <div class="post-text-container">
        <h3>{post.title}</h3>
        <h4 class="post-text">{post.summary.substring(0, 160)}...</h4>
    </div>
</div>

<style>
    .post-container {
        border-top: 1px solid lightgrey;
        display: flex;
        margin-bottom: 1rem;
        height: 14rem ;

        /* background-color: red; */
    }

    img {
        width: 100%;
        min-width: 16rem;
        height: 14rem;
        object-fit: cover;
    }

    h3 {
        font-family: 'Oswald', sans-serif;
        font-size: 1.4rem;
    }
    .post-text {
        font: 1.2em serif;
        color: #555555;
        text-align: left;
        padding: 0rem 2rem;

        /* background-color: green; */
    }

    @media screen and (max-width: 600px) {
        .post-text {
            visibility: hidden;
        }

        .post-container {
            height: 11.5rem;
        }

        img {
            min-width: 16rem;
            height: 11.5rem;
        }
    }

</style>