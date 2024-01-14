<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import type { LocalizedString } from 'typesafe-i18n';

	export let answers: {
		title: () => LocalizedString;
		description: () => LocalizedString;
	}[];
</script>

{#each answers as answer (answer.title())}
	<Alert.Root class="mb-5">
		<Alert.Title>{@html answer.title()}</Alert.Title>
		{#if answer.description()}
			<Alert.Description>{@html answer.description()}</Alert.Description>
		{/if}
	</Alert.Root>
{/each}
