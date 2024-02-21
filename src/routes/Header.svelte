<script lang="ts">
	import { selectedTab } from '../stores'
	import { SearchType } from '$lib/types/enum'

	let selected_tab: string;

	selectedTab.subscribe((value) => {
		selected_tab = value
	})
</script>

<header>
	<nav>
		<a href="/" aria-current={selected_tab === '' || selected_tab === SearchType.ALL? 'page' : undefined}>Search</a>
		<a href="/images" aria-current={selected_tab === SearchType.IMAGES ? 'page' : undefined}>Images</a>
		<a href="/news" aria-current={selected_tab === SearchType.NEWS ? 'page' : undefined}>News</a>
	</nav>
</header>

<style lang="scss">
	header {
    width: 100%;
    padding: 20px 0;
    display: flex;
		position: fixed;
		justify-content: flex-end;
    top: 0;
    left: 0;
    z-index: 10;

		nav {
			display: flex;
			a {
				text-decoration: none;
				color: #333;
				font-size: 0.8rem;
				font-weight: lighter;
				padding: 10px;
				margin: 0 3px;
				border-radius: 5px;
				transition: background-color 0.3s ease;

				@media (min-width: 1024px) {
					font-size: 1rem;
					margin: 0 10px;
				}
			}

			a[aria-current="page"] {
				color: var(--color-theme-1);
				font-weight: bold;
				text-decoration: underline;
			}
		}

	}
</style>
