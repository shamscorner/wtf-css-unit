<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import Answer from '$routes/(landing)/components/answer.svelte';
</script>

<Answer
	answers={Object.values(
		$LL.questionaries.whichWidthOrHeight.typeOfWidth.fixedOrRelativeWidth.items
			.fixedWidthSize.answers
	)}
/>
