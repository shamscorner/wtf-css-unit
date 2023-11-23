<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import type { LocalizedString } from 'typesafe-i18n';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let answers: {
		title: () => LocalizedString;
		description: () => LocalizedString;
	}[];

	function reset() {
		dispatch('reset');
	}

	function goBack() {
		history.back();
	}
</script>

{#each answers as answer (answer.title())}
	<Alert.Root class="mb-5">
		<Alert.Title>{answer.title()}</Alert.Title>
		<Alert.Description>
			{@html answer.description()}
		</Alert.Description>
	</Alert.Root>
{/each}

<Button class="mr-4" on:click={goBack}>
	{$LL.common.back()}
</Button>
<Button variant="link" on:click={reset}>
	{$LL.common.reset()}
</Button>
