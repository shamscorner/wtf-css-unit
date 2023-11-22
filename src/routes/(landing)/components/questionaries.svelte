<script lang="ts">
	import type { FontSizeType, WhatDeclaringType } from '$lib/types';
	import WhatDeclaring from './what-declaring.svelte';
	import FontSize from './font-size.svelte';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	let whatDeclaring: WhatDeclaringType | '' = '';

	const whatDeclaringComponents: Record<WhatDeclaringType, any> = {
		'font-size': FontSize,
		spacing: FontSize,
		positioning: FontSize,
		'details-effects': FontSize,
		'flex-grid': FontSize,
		'width-height': FontSize
	};

	let fontSize: FontSizeType | '' = '';
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
		<WhatDeclaring bind:value={whatDeclaring} />
	{/if}

	{#if whatDeclaring}
		<svelte:component
			this={whatDeclaringComponents[whatDeclaring]}
			bind:value={fontSize}
		/>
	{/if}
</div>
