<script lang="ts">
	export let data;

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

	const { name, country } = extractPlayerNameAndCountry(data.player[0]);
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<div class="max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
	<div class="px-6 py-4">
		<h3 class="text-xl font-bold mb-2">{name}</h3>
		<table class="table-auto w-full">
			<tbody>
				<tr>
					<td class="text-gray-600 font-semibold">Country:</td>
					<td class="text-gray-600">{country}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">Span:</td>
					<td class="text-gray-600">{data.player[0].Span}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">Matches:</td>
					<td class="text-gray-600">{data.player[0].Mat}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">Innings:</td>
					<td class="text-gray-600">{data.player[0].Inns}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">Not Outs:</td>
					<td class="text-gray-600">{data.player[0].NO}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">Runs:</td>
					<td class="text-gray-600">{data.player[0].Runs}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">Highest Score:</td>
					<td class="text-gray-600">{data.player[0].HS}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">Average:</td>
					<td class="text-gray-600">{data.player[0].Ave}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">Balls Faced:</td>
					<td class="text-gray-600">{data.player[0].BF}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">Strike Rate:</td>
					<td class="text-gray-600">{data.player[0].SR}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">4s:</td>
					<td class="text-gray-600">{data.player[0]['4s']}</td>
				</tr>
				<tr>
					<td class="text-gray-600 font-semibold">6s:</td>
					<td class="text-gray-600">{data.player[0]['6s']}</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
