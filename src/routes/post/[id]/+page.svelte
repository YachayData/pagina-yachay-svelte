<script>
    import { page } from '$app/stores';
    import { postArray } from '$lib/database.js';

    const postId = $page.params.id;
    const post = postArray[postId];

    console.log(post)
  </script>

<h1>{post.title}</h1>
<h2>{post.summary}</h2>
<img src={post.imageUrl} alt="post"/>