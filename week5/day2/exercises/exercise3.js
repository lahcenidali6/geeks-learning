async function getData() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error(`somethings went wrong!`);
    }

    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
  } catch (error) {
    console.error(error);
  }
}

getData();