<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<Alert.Root>
	<Alert.Description>
		{$LL.questionaries.fontSize.setHere.noFinal()}
	</Alert.Description>
</Alert.Root>
