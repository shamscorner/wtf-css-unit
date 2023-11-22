<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import type { FontSizeType } from '$lib/types';
	import { RadioMultiOption } from '$lib/components/ui/radio-multi-option';
	import { page } from '$app/stores';

	export let value: FontSizeType | '';

	const fontSizeItems = Object.values($LL.questionaries.fontSize.items).map(
		(i) => ({
			title: i.title(),
			value: i.value() as FontSizeType,
			hint: i.hint()
		})
	);

	function setValue(e: CustomEvent<FontSizeType>) {
		$page.url.searchParams.set('fontSize', e.detail);
		history.replaceState(history.state, '', $page.url);
	}
</script>

<div>
	<RadioMultiOption
		bind:value
		items={fontSizeItems}
		title={$LL.questionaries.fontSize.title()}
		on:click={setValue}
	/>
</div>
