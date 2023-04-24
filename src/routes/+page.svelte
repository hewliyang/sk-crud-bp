<script lang="ts">
	import { noteStore } from "$lib/stores";
	import { toastStore, type ModalSettings, modalStore } from "@skeletonlabs/skeleton";

	function deleteNote(noteId: string): void {
		const confirmDelete: ModalSettings = {
			type: 'confirm',
			title: 'Delete Note',
			body: 'Are you sure you want to delete this note?',
			response: (r: boolean) => {
				if (r) {
					noteStore.update((notes) => notes.filter((n) => n.id !== noteId));
					toastStore.trigger({
						message: "Note deleted succesfully!",
						background: "variant-ghost-success",
					});
					return;
				}
				toastStore.trigger({
					message: 'Note not deleted',
					background: 'variant-ghost-error',
				});
			}
		}
		modalStore.trigger(confirmDelete)
	}

</script>

<div class="container h-full mx-auto flex justify-center flex-col gap-y-8">
	<div class="flex items-center justify-between">
		<h2> Notes </h2>
		<a href="/new" class="btn variant-glass-primary"> New Note </a>	
	</div>

	{#if $noteStore.length === 0}
		<p class="my-4">Click <strong>New Note</strong> to create your first note!</p>
	{/if}

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each $noteStore as note}
			<div class="card p-4 variant-ghost-primary flex flex-col gap-2 relative">
				<button 
					on:click={() => deleteNote(note.id)}
					class="btn-icon-sm rounded-lg variant-filled-error absolute -top-1.5 -right-1.5">
					X
				</button>
				<div>
					{note.content}
				</div>
				<div class="flex gap-1 flex-wrap">
					{#each note.tags as tag}
					<span class="badge variant-filled-secondary">{tag}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
