<script lang="ts">
  import { searchImagesResult } from "../../../stores";
  import { type ImageResult } from '$lib/types/interface'
  import { DUMMY_PHOTO_URL } from '$lib/constants'

  /*20 ITEMS TO POPULATE DUMMY IMAGE RESULT DATA*/
  // let results: ImageResult[] = Array.from({ length: 20 }, (_) => ({
  //   title: 'Diaz Linggaputra - Software Developer',
  //   image: DUMMY_PHOTO_URL,
  //   thumbnail: DUMMY_PHOTO_URL,
  //   url: 'https://github.com/diazlp',
  //   domain: 'Github'
  // }));

  /*COMMENT BELOW ON DEVELOPMENT*/
  let results: ImageResult[]
  searchImagesResult.subscribe((value: ImageResult[]) => {
    results = value?.map(({url, ...rest}: ImageResult) => {
      const regex = /(?:https?:\/\/)?(?:www\.)?([^\/]+)/;
      const match = url.match(regex);

      const domain = match?.[1]

      return { ...rest, url, domain}
    })
  })
</script>

<div class="results-wrapper">
  <div class="result-item">
    <div class="result-image">
      <a href={'https://github.com/diazlp'} target="_blank" rel="noreferrer">
        <img
          src={DUMMY_PHOTO_URL}
          alt={'Diaz Linggaputra Dummy Photo'}
        />
      </a>
    </div>
    <div class="result-description">
      <a
        href={'https://github.com/diazlp'}
        target="_blank"
        rel="noreferrer"
        class="main-description"
      >
        Diaz Linggaputra - Software Developer
      </a>
      <div class="personal-ads">
        <span class="ads">Ad</span>
        <a
          href={'https://github.com/diazlp'}
          target="_blank"
          rel="noreferrer"
          class="domain-description"
        >
          Github
        </a>
      </div>
    </div>
  </div>
  {#each results as result}
    <div class="result-item">
      <div class="result-image group">
        <a href={result.url} target="_blank" rel="noreferrer">
          <img
            src={result.thumbnail}
            alt={result.thumbnail}
          />
        </a>
      </div>
      <div class="result-description">
        <a
          href={result.url}
          target="_blank"
          rel="noreferrer"
          class="main-description group"
        >
          {result.title}
        </a>
        <a
          href={result.url}
          target="_blank"
          rel="noreferrer"
          class="domain-description group"
        >
          {result.domain}
        </a>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .results-wrapper {
    margin-left: -1rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-top: 1rem;
    padding-bottom: 2rem;

    @media (min-width: 640px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
      gap: 0;
      margin-left: -10rem;
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }

    .result-item {
      margin-right: 1.25rem;
      margin-bottom: 1.25rem;
      display: inline-block;

      .result-image {
        margin-bottom: 0.25rem;
        cursor: pointer;
        height: 180px;
        border-radius: 0.25rem;
        border-width: 1px;
        border-color: transparent;
        background-color: rgb(243, 244, 246);
        &:hover {
          border-color:  rgb(229, 231, 235);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }

        img {
          width: 100%;
          max-width: 200px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          height: 100%;
          object-fit: contain;
        }
      }

      .result-description {
        cursor: pointer;
        hyphens: auto;

        .main-description {
          display: block;
          font-size: 0.75rem;
          line-height: 1rem;
          color: rgb(55, 65, 81);
        }

        .domain-description {
          display: block;
          font-size: 11px;
          line-height: 15px;
          color: rgb(107, 114, 128);
        }
      }

      .personal-ads {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;

        .ads {
          color: rgb(255, 255, 255);
          background-color: var(--color-theme-1);
          padding: 1px 2px;
          border-radius: 3px;
          font-size: 0.55rem;          
        }
      }

      &:hover {
       text-decoration-line: underline;
      }
    }
  }
</style>