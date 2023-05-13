<script lang="ts">

    import Table from '$lib/components/Table.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
    export let data;

</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center space-y-5">
    <h3>Data fetched from <strong> Vercel Postgres </strong></h3>
    <Table users={data.users} duration={data.duration} />

    <h4>Schema</h4>
    <CodeBlock language="sql" code={`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        image VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`} />

    <h4> Raw </h4>
    <CodeBlock language="json" code={ JSON.stringify(data.users, null, 2) } />
</div>
