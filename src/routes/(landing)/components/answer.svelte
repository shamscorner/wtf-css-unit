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
		<Alert.Description class="[&_a]:underline [&_a]:underline-offset-4">
			{@html answer.description()}
		</Alert.Description>
	</Alert.Root>
{/each}
