export const getGif = async(category) => {    
    const limit = 10;
    const api_key = 'g904TtVA9DKgRWZoTOP82adRNr84P09n';
    const uri = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`;
    
    const response = await fetch(uri);
    const { data } = await response.json();
    
    const gifs = data.map(gif => {
        return {
            id : gif.id,
            title : gif.title,
            url : gif.images?.downsized_medium.url
        }
    });    

    return gifs;
} 