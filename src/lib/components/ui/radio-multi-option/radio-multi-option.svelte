<script lang="ts">
	import { Heading } from '$lib/components/ui/heading';
	import LL from '$lib/i18n/i18n-svelte';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';
	import { cn } from '$lib/utils';
	import type { Props } from '.';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { createEventDispatcher } from 'svelte';

	type $$Props = SvelteHTMLElements['div'] & Props;

	const dispatch = createEventDispatcher();

	let className: $$Props['class'] = undefined;
	export let items: $$Props['items'] = [];
	export let value: $$Props['value'];

	export { className as class };
</script>

<div {...$$restProps} class={cn(className)}>
	<Heading element="h2">
		{$LL.questionaries.whatDeclaring.title()}
	</Heading>

	<div class="pt-8">
		<RadioGroup.Root bind:value class="space-y-6">
			{#each items as item, idx (item.title)}
				<div class="flex space-x-2">
					<RadioGroup.Item
						value={item.value}
						id={`r-${idx}-${item.value}`}
						on:click={() => dispatch('click', item.value)}
					/>
					<Label for={`r-${idx}-${item.value}`}>
						{item.title}<br />
						{#if item.hint}
							<span class="text-sm text-muted">
								{item.hint}
							</span>
						{/if}
					</Label>
				</div>
			{/each}
		</RadioGroup.Root>
	</div>
</div>
