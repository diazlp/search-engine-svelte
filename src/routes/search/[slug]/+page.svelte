<script lang="ts">
	import ResultHeader from './ResultHeader.svelte';
  import ResultNav from './ResultNav.svelte'
</script>

<div class="app">
	<ResultHeader />
	<ResultNav />

	<div class="search-result">
		search result
	</div>
</div>

<style lang="scss">
	.app {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.search-result {
		flex: 1;
		margin-left: 2rem;
	}
</style>