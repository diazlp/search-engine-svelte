import { json } from '@sveltejs/kit';
import { GOOGLE_SEARCH_ALL_API_KEY } from '$env/static/private';

export async function GET({ url }) {
	const queryParams = url.searchParams.get('q')

	const response = await fetch(
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

	// const response = await fetch(
  //   `https://api.raindrop.io/rest/v1/raindrops/41720507`,
  //   {
  //     cache: 'no-cache',
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer 2b5fd59a-0335-42ab-b1e9-f87f307ea9c4`,
  //     },
  //   },
  // )

  const data = await response.json()

	return json(data);
}
