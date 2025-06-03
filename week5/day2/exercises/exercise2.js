async function getData() {
  try {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();
