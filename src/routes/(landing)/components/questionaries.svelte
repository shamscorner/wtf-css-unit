<script lang="ts">
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import FontSize from './font-size.svelte';
	import { RadioMultiOption } from '$lib/components/ui/radio-multi-option';
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';

	type WhatDeclaringType =
		| 'font-size'
		| 'spacing'
		| 'positioning'
		| 'details-effects'
		| 'flex-grid'
		| 'width-height';

	const whatDeclaringComponents: Record<WhatDeclaringType, any> = {
		'font-size': FontSize,
		spacing: FontSize,
		positioning: FontSize,
		'details-effects': FontSize,
		'flex-grid': FontSize,
		'width-height': FontSize
	};

	let whatDeclaring: WhatDeclaringType | '' = '';

	function setValue(e: CustomEvent<WhatDeclaringType>) {
		$page.url.searchParams.set('whatDeclaring', e.detail);
		history.replaceState(history.state, '', $page.url);
	}
</script>

<div class="h-full overflow-y-auto">
	<div class="pb-5">
		<SuperDebug
			data={{
				whatDeclaring
			}}
		/>
	</div>

	{#if !whatDeclaring}
		<RadioMultiOption
			bind:value={whatDeclaring}
			items={Object.values($LL.questionaries.whatDeclaring.items).map((i) => ({
				title: i.title(),
				value: i.value(),
				hint: i.hint()
			}))}
			title={$LL.questionaries.whatDeclaring.title()}
			on:click={setValue}
		/>
	{/if}

	{#if whatDeclaring}
		<svelte:component this={whatDeclaringComponents[whatDeclaring]} />
	{/if}
</div>
