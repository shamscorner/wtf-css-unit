<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Icons } from '$lib/components/icons';
	import Questionaries from './questionaries.svelte';
</script>

<section
	class="grid h-full grid-cols-1 gap-8 md:grid-cols-2"
	aria-describedby="onboarding-title"
>
	<!-- greeting -->
	<div class="space-y-4 px-6 pb-20 pt-10 md:ml-auto md:max-w-xl">
		<p>{@html $LL.onboarding.greeting()}</p>
		<h1 id="onboarding-title" class="max-w-md text-2xl font-bold">
			{$LL.onboarding.title()}
		</h1>
		<p>{$LL.onboarding.subtitle()}</p>
		<div class="pt-4">
			<Button size="lg" title={$LL.common.slogan()}>
				{$LL.onboarding.callToAction.letsStart()}
				<Icons.arrowRight class="ml-2 h-5 w-5" />
			</Button>
		</div>
	</div>

	<!-- quick statistics -->
	<div class="bg-accent px-6 py-10">
		<div class="md:mr-auto md:max-w-xl">
			<Questionaries />
		</div>
	</div>
</section>
