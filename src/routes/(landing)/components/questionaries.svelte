<script lang="ts">
	import type { WhatDeclaringType } from '$lib/types';
	import WhatDeclaring from './what-declaring.svelte';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	let whatDeclaring: WhatDeclaringType | '' = '';
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
</div>
