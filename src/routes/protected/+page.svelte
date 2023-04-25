<script lang="ts">

	import { signIn, signOut } from "@auth/sveltekit/client";
    import { Avatar, CodeBlock } from "@skeletonlabs/skeleton";

    export let data;

    const { session } = data;

</script>


<div class="p-5 flex flex-col gap-y-5 items-center">
    {#if session}
        <button on:click={() => signOut()} class="btn variant-filled-secondary w-24">Sign Out</button>
        <p>Signed in as <strong>{session.user?.name ?? "User"}</strong></p>
        <Avatar src={session.user?.image ?? ""} width="w-8" rounded="rounded-lg" />
        <img src="./surprise.png" alt="Secret" class="rounded-xl"/>
        <strong>You can only see this because you are logged in!</strong>

        <h3 class="mb-5">Auth Details</h3>
        <CodeBlock language="json" code={JSON.stringify(session, null, 2)} />
    {:else}
        <button on:click={() => signIn()} class="btn variant-filled-tertiary">Sign In</button>
        <span>You are not signed in!</span>
    {/if}
</div>