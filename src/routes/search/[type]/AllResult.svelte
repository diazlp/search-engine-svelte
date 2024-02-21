<script lang="ts">
	import { searchAllResult } from '../../../stores'
  import { type AllResult } from '$lib/types/interface'

  /*20 ITEMS TO POPULATE DUMMY ALL RESULT DATA*/
  let results: AllResult[] = Array.from({ length: 20 }, (_, index) => ({
    position: index + 1,
    url: 'https://diazlinggaputra.vercel.app/',
    title: 'Diaz Linggaputra',
    description: 'Welcome to my digital realm! I am a Software Developer dedicated to crafting refined solutions that sculpt seamless user experiences, striving to pursue excellence in my work and delivering exceptional result',
    domain: 'github.com'
  }));

  // let results: AllResult[]
  // searchAllResult.subscribe((value: AllResult[]) => {
  //   results = value?.map(({url, ...rest}: AllResult) => {
  //     const regex = /(?:https?:\/\/)?(?:www\.)?([^\/]+)/;
  //     const match = url.match(regex);

  //     const domain = match?.[1]

  //     return { ...rest, url, domain}
  //   })
  // })
</script>

<div>
  <div class="result-item">
    <div class="personal-ads">
      <span class="ads">Ad</span>
      <span>diazlinggaputra.com</span>
    </div>
    <a href="https://diazlinggaputra.vercel.app/" target="_blank">Diaz Linggaputra</a>
    <p>Welcome to my digital realm! I am a Software Developer dedicated to crafting refined solutions that sculpt seamless user experiences, striving to pursue excellence in my work and delivering exceptional result</p>
  </div>
  {#each results as result}
    <div>
      <div class="result-item">
        <span>{result.domain}</span>
        <a href={result.url} target="_blank">{result.title}</a>
        <p>{result.description}</p>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
	.result-item {
    margin-top: 20px;
		display: flex;
		flex-direction: column;
		max-width: 36rem;
		gap: 0.3rem;

		span {
			color: rgb(107,114,128);
			display: block;
			font-size: 0.875rem;
		}

		a {
			color: rgb(29,78,216); 
    	font-size: 1.25rem;
			font-weight: 500;
		}

    p {
        color: initial;
        margin: 0;
        font-size: 0.875rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
		}
    
    .personal-ads {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;

      span {
        color: rgb(107,114,128);
        display: block;
        font-size: 0.875rem;
		  }
      .ads {
        color: rgb(255, 255, 255);
        // background-olor: rgb(255, 166, 0);
        background-color: var(--color-theme-1);
        padding: 1px 3px;
        border-radius: 5px;
      }
    }
  }
</style>