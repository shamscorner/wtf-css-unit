<script lang="ts">
	import {
		RadioMultiOption,
		type RadioMultiOptionItemType
	} from '$lib/components/ui/radio-multi-option';
	import { page } from '$app/stores';
	// import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let items: RadioMultiOptionItemType[];
	export let key: string;
	export let title: string;

	export let value;

	function setValue(e: CustomEvent<string>) {
		$page.url.searchParams.set(key, e.detail);
		history.replaceState(history.state, '', $page.url);
	}
</script>

<!-- <div class="pb-5">
	<SuperDebug
		data={{
			value
		}}
	/>
</div> -->

<RadioMultiOption bind:value {items} {title} on:click={setValue} />
