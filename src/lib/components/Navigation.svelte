<script lang="ts">
    import { drawerStore } from "@skeletonlabs/skeleton";
    import { page } from "$app/stores";

    function drawerClose(): void {
        drawerStore.close();
    }

    $: curPath = $page.url.pathname;

</script>

<nav class="list-nav p-4">
    <ul>
        <li><a class="{curPath === '/' ? 'variant-filled-primary' : ''}" href='/' on:click={drawerClose} >Home</a></li>
        <li><a class="{curPath === '/about' ? 'variant-filled-primary' : ''}" href="/about" on:click={drawerClose}>About</a></li>
        <li><a class="{curPath === '/protected' ? 'variant-filled-primary' : ''}" href="/protected" on:click={drawerClose}>Protected</a></li>
    </ul>
</nav>