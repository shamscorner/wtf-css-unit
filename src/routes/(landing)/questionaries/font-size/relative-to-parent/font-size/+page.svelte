<script lang="ts">
	import { goto } from '$app/navigation';
	import LL from '$lib/i18n/i18n-svelte';
	import Answer from '$routes/(landing)/components/answer.svelte';
</script>

<Answer
	answers={Object.values(
		$LL.questionaries.whichFontSize.relativeToParent.question.items.fontSize
			.answer
	)}
	on:reset={() => goto('/')}
/>
