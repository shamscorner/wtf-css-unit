<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import type { WhatDeclaringType } from '$lib/types';
	import { RadioMultiOption } from '$lib/components/ui/radio-multi-option';
	import { page } from '$app/stores';

	export let value: WhatDeclaringType | '';

	const whatDeclaringItems = Object.values(
		$LL.questionaries.whatDeclaring.items
	).map((i) => ({
		title: i.title(),
		value: i.value() as WhatDeclaringType,
		hint: i.hint()
	}));

	function setValue(e: CustomEvent<WhatDeclaringType>) {
		$page.url.searchParams.set('whatDeclaring', e.detail);
		history.replaceState(history.state, '', $page.url);
	}
</script>

<div>
	<RadioMultiOption
		bind:value
		items={whatDeclaringItems}
		title={$LL.questionaries.whatDeclaring.title()}
		on:click={setValue}
	/>
</div>
