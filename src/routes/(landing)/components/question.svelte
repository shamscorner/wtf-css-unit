<script lang="ts">
	import { Heading } from '$lib/components/ui/heading';
	import { cn } from '$lib/utils';

	type ItemType = {
		title: string;
		value: string;
		hint: string;
		to: string;
	};

	export let items: ItemType[];
	export let title = '';
</script>

<div {...$$restProps} class={cn($$restProps.class)}>
	<Heading element="h2">
		{@html title}
	</Heading>
	<ul class="mt-5 max-w-sm space-y-4">
		{#each items as item (item.title)}
			<li>
				<a
					href={item.to}
					class="block border border-primary px-4 py-2 transition hover:bg-primary hover:text-primary-foreground"
				>
					{item.title} <br />
					{#if item.hint}
						<span class="text-sm text-muted">
							{item.hint}
						</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</div>
