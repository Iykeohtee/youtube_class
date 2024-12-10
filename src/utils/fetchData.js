const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const SearchVidoes = async (param) => {
      const res = await fetch(`${BASE_URL}/${param}`, {    
        method: "GET", 
        headers: {
            'x-rapidapi-key': '64a4596b67msh9ce0ab93fa99e67p1db0fbjsn9f18d2ae00ee', 
        'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
       })
       
       const result = await res.json();   
       return result; 
}
