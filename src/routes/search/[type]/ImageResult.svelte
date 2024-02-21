<script lang="ts">
  import { searchImagesResult } from "../../../stores";
  import { type ImageResult } from '$lib/types/interface'

  /*20 ITEMS TO POPULATE DUMMY IMAGE RESULT DATA*/
  let results: ImageResult[] = Array.from({ length: 20 }, (_) => ({
    title: 'Diaz Linggaputra - Software Developer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Raline_Shah_in_an_interview_with_Anas_Bukhash.png',
    thumbnail: 'data:image/jpeg;base64,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',
    url: 'https://github.com/diazlp',
    domain: 'Github'
  }));

  // let results: ImageResult[]
  // searchImagesResult.subscribe((value: ImageResult[]) => {
  //   results = value?.map(({url, ...rest}: ImageResult) => {
  //     const regex = /(?:https?:\/\/)?(?:www\.)?([^\/]+)/;
  //     const match = url.match(regex);

  //     const domain = match?.[1]

  //     return { ...rest, url, domain}
  //   })
  // })
</script>

<div class="results-wrapper">
  <div class="result-item">
    <div class="result-image">
      <a href={'https://github.com/diazlp'} target="_blank" rel="noreferrer">
        <img
          src={'data:image/jpeg;base64,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'}
          alt={'title'}
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
    margin-left: -1.5rem;
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
      margin-right: 1.5rem;
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

      &:hover {
       text-decoration-line: underline;
      }
    }
  }
</style>