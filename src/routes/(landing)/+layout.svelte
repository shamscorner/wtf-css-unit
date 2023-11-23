<script lang="ts">
	import Footer from './components/footer/Footer.svelte';
	import Navbar from './components/navbar/Navbar.svelte';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Icons } from '$lib/components/icons';
	import { page } from '$app/stores';

	$: isHomepage = $page.url.pathname === '/';
</script>

<div class="flex h-full flex-col">
	<Navbar />

	<main class="flex-1">
		<section
			class="grid h-full grid-cols-1 grid-rows-[auto,1fr] gap-8 bg-accent md:grid-cols-2 md:grid-rows-none"
			aria-describedby="onboarding-title"
		>
			<!-- greeting -->
			<div class="space-y-4 px-6 pb-10 pt-10 md:ml-auto md:max-w-xl md:pb-20">
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
			<div class="bg-background px-6 py-10">
				<div class="md:mr-auto md:max-w-xl">
					<slot />

					{#if !isHomepage}
						<div class="mt-10">
							<Button class="mr-4" on:click={() => history.back()}>
								{$LL.common.back()}
							</Button>
							<Button href="/" variant="link">
								{$LL.common.reset()}
							</Button>
						</div>
					{/if}
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
