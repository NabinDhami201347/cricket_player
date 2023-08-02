<script>
	import PlayerCard from '../../lib/components/PlayerCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>Cricket Players</title>
</svelte:head>

<main class="grid grid-cols-4 gap-4 w-11/12 mx-auto my-5">
	{#each data.players as player}
		<PlayerCard {player} />
	{/each}
</main>
