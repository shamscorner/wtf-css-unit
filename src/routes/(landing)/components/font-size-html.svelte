<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import type { FontSizeHtmlSetHereType } from '$lib/types';
	import { RadioMultiOption } from '$lib/components/ui/radio-multi-option';
	import { page } from '$app/stores';
	import { fontSizeComponents } from './components';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	let value: FontSizeHtmlSetHereType | '';

	const items = Object.values($LL.questionaries.fontSize.setHere.items).map(
		(i) => ({
			title: i.title(),
			value: i.value() as FontSizeHtmlSetHereType,
			hint: i.hint()
		})
	);

	function setValue(e: CustomEvent<FontSizeHtmlSetHereType>) {
		$page.url.searchParams.set('fontSizeHtml', e.detail);
		history.replaceState(history.state, '', $page.url);
	}
</script>

<div>
	<div class="pb-5">
		<SuperDebug
			data={{
				value
			}}
		/>
	</div>

	{#if !value}
		<RadioMultiOption
			bind:value
			{items}
			title={$LL.questionaries.fontSize.setHere.title()}
			on:click={setValue}
		/>
	{/if}

	{#if value}
		<svelte:component this={fontSizeComponents.html.options[value]} />
	{/if}
</div>
