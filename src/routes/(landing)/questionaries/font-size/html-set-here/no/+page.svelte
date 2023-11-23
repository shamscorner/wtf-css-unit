<script lang="ts">
	import { goto } from '$app/navigation';
	import LL from '$lib/i18n/i18n-svelte';
	import Answer from '../../../../components/answer.svelte';
</script>

<Answer
	answers={Object.values(
		$LL.questionaries.whichFontSize.htmlSetHere.question.items.no.answer
	)}
	on:reset={() => goto('/')}
/>
