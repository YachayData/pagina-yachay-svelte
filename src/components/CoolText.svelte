<script>
    export let text;
</script>

<div class="container">
    <div class="lined">
        <div class="cool-text">
            {text}
        </div>
    </div>
</div>

<style>
    .container {
        height: 30px;
    }

    .cool-text {
        background-color: #ff005b;
        padding: 5px 13px;

        transform: skew(-15deg);
        -webkit-transform: skewX(-15deg);
        -moz-transform: skewX(-15deg);
        -ms-transform: skewX(-15deg);
        -o-transform: skewX(-15deg);
        
        color: #fff;
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        font-weight:bold;

        height: 20px;
        width: fit-content;
    }

    .lined {
        position: relative;
        background: none;
        height: 15px; /* Set the height of your div here */
    }

    .lined::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px; /* Set the thickness of the line, e.g., 1px */
        background: black; /* Set the color of the line here */
    }
</style>