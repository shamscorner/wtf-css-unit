<script lang="ts">
	import { Icons } from '$lib/components/icons';
	import { Button } from '$lib/components/ui/button';
</script>

<footer
	class="relative flex items-center justify-center gap-3 bg-primary px-4 py-3 text-secondary-foreground"
>
	<p class="text-center text-sm font-medium">
		<b>Shamim Hossain</b> - Full-stack developer @secureship
	</p>
	<Button
		href="https://x.com/shamscorner"
		target="_blank"
		variant="complement"
		size="icon"
		class="shrink-0 border-secondary-foreground"
		title="I am not going to change the icon, ok!"
	>
		<Icons.twitter class="h-4 w-4" />
	</Button>
	<Button
		href="https://github.com/shamscorner"
		target="_blank"
		variant="complement"
		size="icon"
		class="shrink-0 border-secondary-foreground"
	>
		<Icons.github class="h-4 w-4" />
	</Button>
	<Button
		href="https://www.linkedin.com/in/shamscorner/"
		target="_blank"
		variant="complement"
		size="icon"
		class="shrink-0 border-secondary-foreground"
	>
		<Icons.linkedin class="h-4 w-4" />
	</Button>
</footer>
