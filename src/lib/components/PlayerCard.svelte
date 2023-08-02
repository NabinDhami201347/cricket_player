<script lang="ts">
	export let player: {
		id: number;
		Span: string;
		Mat: number;
		Player: string;
	};

	function extractPlayerNameAndCountry(player: { Player?: string }) {
		const match = player.Player?.match(/^(.*?)\((.*?)\)$/);
		if (match) {
			return {
				name: match[1].trim(),
				country: match[2].trim()
			};
		} else {
			return {
				name: player.Player?.trim() || 'Unknown',
				country: 'Unknown'
			};
		}
	}

	const { name, country } = extractPlayerNameAndCountry(player);
</script>

<div class="card bg-white border border-gray-300 shadow-md p-4 hover:shadow-lg">
	<a href={`/players/${player.id}`}>
		<h3 class="text-xl font-bold">{name}</h3>
		<p class="text-gray-600"><strong>Country:</strong> {country}</p>
		<p class="text-gray-600"><strong>Span:</strong> {player.Span}</p>
		<p class="text-gray-600"><strong>Matches:</strong> {player.Mat}</p>
	</a>
</div>
