<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Seo from '$lib/components/common/SEO.svelte';
	import HeroSection from './components/hero-section.svelte';
</script>

<Seo
	title={$LL.title()}
	description={$LL.description()}
	keywords={$LL.keywords()}
/>

<HeroSection />
