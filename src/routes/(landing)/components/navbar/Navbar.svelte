<script lang="ts">
	import { Icons } from '$lib/components/icons';

	import { Button } from '$lib/components/ui/button';
</script>

<header class="shadow-lg">
	<div
		class="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
	>
		<Button href="/" variant="outline" size="icon">
			<Icons.home class="h-4 w-4" />
		</Button>

		<Button
			href="https://github.com/shamscorner/wtf-css-unit"
			target="_blank"
			variant="outline"
			size="icon"
		>
			<Icons.github class="h-4 w-4" />
		</Button>
	</div>
</header>
