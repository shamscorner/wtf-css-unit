<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import Question from '$routes/(landing)/components/question.svelte';
</script>

<Question
	title={$LL.questionaries.whatSpacingTo.spaceForFixedSize.questions.title()}
	items={Object.values(
		$LL.questionaries.whatSpacingTo.spaceForFixedSize.questions.items
	).map((i) => ({
		title: i.title(),
		value: i.value(),
		hint: i.hint(),
		to: i.to()
	}))}
/>
