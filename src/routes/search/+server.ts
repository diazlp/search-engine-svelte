import { json } from '@sveltejs/kit';
import { TOKEN, GOOGLE_SEARCH_ALL_API_KEY, GOOGLE_SEARCH_IMAGES_API_KEY, GOOGLE_SEARCH_NEWS_API_KEY } from '$env/static/private';
import { SearchType } from '$lib/types/enum.js';

export async function GET({ url }) {
  let response: any
	const queryParams = url.searchParams.get('q')
	const typeParams = url.searchParams.get('type')

  if(typeParams === SearchType.ALL) {
    response = await fetch(
      `https://google-search74.p.rapidapi.com/?query=${queryParams}&limit=20&related_keyword='false'`,
      {
        cache: 'force-cache',
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': GOOGLE_SEARCH_ALL_API_KEY,
      		'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
        },
      },
    )
    
    // response = await fetch(
    //   `https://api.raindrop.io/rest/v1/raindrops/41720507`,
    //   {
    //     cache: 'no-cache',
    //     method: 'GET',
    //     headers: {
    //       Authorization: `Bearer ${TOKEN}`,
    //     },
    //   },
    // )
  } else if(typeParams === SearchType.IMAGES) {
    response = await fetch(
      `https://google-api31.p.rapidapi.com/imagesearch`,
      {
        method: 'POST',
        headers: {
          'X-RapidAPI-Key': GOOGLE_SEARCH_IMAGES_API_KEY,
      		'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        body: JSON.stringify({
          text: queryParams,
          safesearch: 'off',
          region: 'wt-wt',
          color: "",
          size: "",
          type_image: "",
          layout: "",
          max_results: 100
        })
      },
    )

    // response = await fetch(
    //   `https://api.raindrop.io/rest/v1/raindrops/41720507`,
    //   {
    //     cache: 'no-cache',
    //     method: 'GET',
    //     headers: {
    //       Authorization: `Bearer ${TOKEN}`,
    //     },
    //   },
    // )
  } else if (typeParams === SearchType.NEWS) {
    response = await fetch(
      `https://google-api31.p.rapidapi.com/`,
      {
        method: 'POST',
        headers: {
          'X-RapidAPI-Key': GOOGLE_SEARCH_NEWS_API_KEY,
      		'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        body: JSON.stringify({
          text: queryParams,
		      region: "wt-wt",
          max_results: 25
        })
      },
    )

    // response = await fetch(
    //   `https://api.raindrop.io/rest/v1/raindrops/41720507`,
    //   {
    //     cache: 'no-cache',
    //     method: 'GET',
    //     headers: {
    //       Authorization: `Bearer ${TOKEN}`,
    //     },
    //   },
    // )
  }

  const data = await response.json()
	return json(data);
}
