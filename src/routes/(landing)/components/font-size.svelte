<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import Answer from './answer.svelte';
	import Question from './question.svelte';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	let fontSize: 'html' | 'body' | 'text-related' | 'inline' | 'layout' | '' =
		'';
	let htmlSetHere: 'yes' | 'no' | '' = '';
	let responsive: 'yes' | 'no' | '' = '';

	function reset() {
		fontSize = '';
		htmlSetHere = '';
		responsive = '';

		$page.url.searchParams.delete('fontSize');
		$page.url.searchParams.delete('htmlSetHere');
		$page.url.searchParams.delete('responsive');
		history.replaceState(history.state, '', $page.url);
	}
</script>

<div class="mb-5">
	<SuperDebug
		data={{
			fontSize,
			htmlSetHere,
			responsive
		}}
	/>
</div>

{#if !fontSize}
	<Question
		bind:value={fontSize}
		key="fontSize"
		title={$LL.questionaries.whichFontSize.title()}
		items={Object.values($LL.questionaries.whichFontSize.question.items).map(
			(i) => ({
				title: i.title(),
				value: i.value(),
				hint: i.hint()
			})
		)}
	/>
{/if}

{#if fontSize === 'html'}
	{#if !htmlSetHere}
		<Question
			bind:value={htmlSetHere}
			key="htmlSetHere"
			title={$LL.questionaries.whichFontSize.question.items[0].question.title()}
			items={Object.values(
				$LL.questionaries.whichFontSize.question.items[0].question.items
			).map((i) => ({
				title: i.title(),
				value: i.value(),
				hint: i.hint()
			}))}
		/>
	{/if}

	{#if htmlSetHere === 'no'}
		<Answer
			answers={Object.values(
				$LL.questionaries.whichFontSize.question.items[0].question.items[0]
					.answer
			)}
			on:reset={reset}
		/>
	{/if}

	{#if htmlSetHere === 'yes'}
		{#if !responsive}
			<Question
				bind:value={responsive}
				key="responsive"
				title={$LL.questionaries.whichFontSize.question.items[0].question.items[1].question.title()}
				items={Object.values(
					$LL.questionaries.whichFontSize.question.items[0].question.items[1]
						.question.items
				).map((i) => ({
					title: i.title(),
					value: i.value(),
					hint: i.hint()
				}))}
			/>
		{/if}

		{#if responsive === 'no'}
			<Answer
				answers={Object.values(
					$LL.questionaries.whichFontSize.question.items[0].question.items[1]
						.question.items[0].answer
				)}
				on:reset={reset}
			/>
		{/if}

		{#if responsive === 'yes'}
			<Answer
				answers={Object.values(
					$LL.questionaries.whichFontSize.question.items[0].question.items[1]
						.question.items[1].answer
				)}
				on:reset={reset}
			/>
		{/if}
	{/if}
{/if}
