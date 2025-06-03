async function getData() {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function renderGif() {
  const data = await getData();
  if (data?.data?.length > 0) {
    const gifBox = document.createElement("div");
    gifBox.className = "gif-box";

    const img = document.createElement("img");
    const numRan = Math.floor(Math.random() * data.data.length)
    img.src = data.data[numRan].images.original.url;
    img.alt = "GIF";

    gifBox.appendChild(img);
    document.getElementById("gifContainer").appendChild(gifBox);
  }
}
renderGif();
