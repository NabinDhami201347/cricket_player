<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
</script>

<nav class="flex justify-between items-center w-11/12 mx-auto py-4 border-b-2 shadow-sm">
	<a href="/">
		<h2 class="font-semibold text-lg hover:underline">Cricket Player Database Management</h2>
	</a>
	<ul class="flex items-center gap-4">
		{#if $page.data.user}
			<li class="hover:underline transition-colors duration-300 ease-in-out">
				<a href="/">Home</a>
			</li>
			<li class="hover:underline transition-colors duration-300 ease-in-out">
				<a href="/players">Players</a>
			</li>
			<li class="hover:underline transition-colors duration-300 ease-in-out">
				<a href="/matches">Matches</a>
			</li>
			<li class="hover:underline transition-colors duration-300 ease-in-out">
				<a href="/contact">Contact</a>
			</li>
			<form action="/logout" method="post" use:enhance>
				<button type="submit">Logout</button>
			</form>
		{:else}
			<li class="py-2 px-4 bg-green-600 rounded-md text-white hover:bg-green-800">
				<a href="/login"><button>Login</button></a>
			</li>
			<li class="py-2 px-4 bg-blue-600 rounded-md text-white hover:bg-blue-800">
				<a href="/register"> <button>Register</button></a>
			</li>
		{/if}
	</ul>
</nav>
