const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const SearchVidoes = (query) => {
  const res = fetch(`${BASE_URL}/${query}`, {
    method: "GET", 
    headers: {
        'x-rapidapi-key': '64a4596b67msh9ce0ab93fa99e67p1db0fbjsn9f18d2ae00ee',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
    }
   })
   
   const result = res.json();   
   return result; 
}
