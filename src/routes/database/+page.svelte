<script lang="ts">

    import Table from '$lib/components/Table.svelte';
    export let data;

</script>

<Table users={data.users} duration={data.duration} />