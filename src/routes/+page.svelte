<script>
	import Header from './Header.svelte'
  import Main from './Main.svelte'

	const year = new Date().getFullYear()
</script>

<svelte:head>
	<title>Search Party Engine</title>
	<meta name="description" content="Your friendly search party to helps you surf the internet with ease" />
</svelte:head>

<div class="app">
	<Header />

	<Main />

	<footer>
		<p>Copyright &copy; {year} Diaz Linggaputra</p>
	</footer>
</div>


<style lang="scss">
	.app {
    font-family: 'Roboto', sans-serif;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow-y: hidden;
	}

	footer {
    color: #b3afaf; 
		font-weight: 500;
		font-size: 0.875rem;
    text-align: center;
    padding: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

		@media (min-width: 1024px) {
			font-size: 1rem;
		}
  }
</style>