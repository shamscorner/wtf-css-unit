<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import Question from '$routes/(landing)/components/question.svelte';
</script>

<Question
	title={$LL.questionaries.whichFontSize.relativeToParent.question.title()}
	items={Object.values(
		$LL.questionaries.whichFontSize.relativeToParent.question.items
	).map((i) => ({
		title: i.title(),
		value: i.value(),
		hint: i.hint(),
		to: i.to()
	}))}
/>
