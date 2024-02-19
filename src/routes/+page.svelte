<script>
	import Header from './Header.svelte'
  import Main from './Main.svelte'

	const year = new Date().getFullYear()
</script>

<svelte:head>
	<title>Search Party Engine</title>
	<meta name="description" content="Search Party Engine - your friendly search party to the rescue to helps you surf the internet with ease" />
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
    text-align: center;
    padding: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>