<script lang="ts">
	import { goto } from "$app/navigation";
	import { noteStore } from "$lib/stores";
    import { InputChip, toastStore, type ToastSettings } from "@skeletonlabs/skeleton";

    let tags: string[] = [];
    let content: string;

    const t: ToastSettings = {
        message: 'Note created successfully!',
        background: 'variant-filled-success',
    };

    function createNote(): void {
        noteStore.update((notes) => [...notes, {
            id: crypto.randomUUID(),
            content,
            tags
        }]);
        content = '';
        tags = [];
        toastStore.trigger(t)
        goto("/")
    }

</script>


<div class="container h-full mx-auto gap-8 flex flex-col">
    <form class="card p-4 flex flex-col gap-3">
        <h2 class="mb-4">New Note</h2>
        <textarea bind:value={content} class="textarea mb-4" rows="4" placeholder="Enter some long form content." />
        <InputChip bind:value={tags} name="tags" placeholder="Tags..." class="mb-4"/>
        <button on:click={createNote} type="button" class="btn variant-glass-primary self-end">Create</button>
    </form>
</div>