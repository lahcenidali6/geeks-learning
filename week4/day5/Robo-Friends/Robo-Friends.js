const icons = [
  "assets/1.png",
  "assets/2.png",
  "assets/3.png",
  "assets/4.png",
  "assets/5.png",
];

const container = document.getElementById("background-icons");

for (let i = 0; i < 30; i++) {
  const div = document.createElement("div");
  div.className = "bg-icon";

  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const rotation = Math.floor(Math.random() * 360);
  const scale = 0.7 + Math.random() * 0.6; // Vary size a bit

  div.style.top = `${top}%`;
  div.style.left = `${left}%`;
  div.style.backgroundImage = `url(${
    icons[Math.floor(Math.random() * icons.length)]
  })`;
  div.style.transform = `rotate(${rotation}deg) scale(${scale})`;

  container.appendChild(div);
}

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
  {
    id: 11,
    name: "Eliza Clark",
    username: "ElizaC",
    email: "eliza@domain.com",
    image: "https://robohash.org/11?200x200",
  },
  {
    id: 12,
    name: "Mark Spencer",
    username: "MarkS",
    email: "mark@domain.com",
    image: "https://robohash.org/12?200x200",
  },
  {
    id: 13,
    name: "Sandra Adams",
    username: "SandyA",
    email: "sandra@domain.com",
    image: "https://robohash.org/13?200x200",
  },
  {
    id: 14,
    name: "Tommy Lee",
    username: "TLee",
    email: "tommy@domain.com",
    image: "https://robohash.org/14?200x200",
  },
  {
    id: 15,
    name: "Julia Morris",
    username: "JMorris",
    email: "julia@domain.com",
    image: "https://robohash.org/15?200x200",
  },
  {
    id: 16,
    name: "Paul Walker",
    username: "PaulW",
    email: "paul@domain.com",
    image: "https://robohash.org/16?200x200",
  },
  {
    id: 17,
    name: "Rachel Green",
    username: "RachG",
    email: "rachel@domain.com",
    image: "https://robohash.org/17?200x200",
  },
  {
    id: 18,
    name: "Joey Tribbiani",
    username: "JoeyT",
    email: "joey@domain.com",
    image: "https://robohash.org/18?200x200",
  },
  {
    id: 19,
    name: "Monica Geller",
    username: "MonG",
    email: "monica@domain.com",
    image: "https://robohash.org/19?200x200",
  },
  {
    id: 20,
    name: "Chandler Bing",
    username: "ChandlerB",
    email: "chandler@domain.com",
    image: "https://robohash.org/20?200x200",
  },
  {
    id: 21,
    name: "Ross Geller",
    username: "RossG",
    email: "ross@domain.com",
    image: "https://robohash.org/21?200x200",
  },
  {
    id: 22,
    name: "Phoebe Buffay",
    username: "PBuffay",
    email: "phoebe@domain.com",
    image: "https://robohash.org/22?200x200",
  },
  {
    id: 23,
    name: "Steve Rogers",
    username: "Cap",
    email: "steve@avengers.com",
    image: "https://robohash.org/23?200x200",
  },
  {
    id: 24,
    name: "Tony Stark",
    username: "IronMan",
    email: "tony@starkindustries.com",
    image: "https://robohash.org/24?200x200",
  },
  {
    id: 25,
    name: "Bruce Banner",
    username: "Hulk",
    email: "bruce@avengers.com",
    image: "https://robohash.org/25?200x200",
  },
  {
    id: 26,
    name: "Natasha Romanoff",
    username: "BlackWidow",
    email: "natasha@shield.com",
    image: "https://robohash.org/26?200x200",
  },
  {
    id: 27,
    name: "Clint Barton",
    username: "Hawkeye",
    email: "clint@shield.com",
    image: "https://robohash.org/27?200x200",
  },
  {
    id: 28,
    name: "Peter Parker",
    username: "SpiderMan",
    email: "peter@dailybugle.com",
    image: "https://robohash.org/28?200x200",
  },
  {
    id: 29,
    name: "Stephen Strange",
    username: "DrStrange",
    email: "strange@kamar-taj.org",
    image: "https://robohash.org/29?200x200",
  },
  {
    id: 30,
    name: "Wanda Maximoff",
    username: "ScarletWitch",
    email: "wanda@avengers.com",
    image: "https://robohash.org/30?200x200",
  },
];

const mainSection = document.querySelector(".card-grid");
function renderCards(robotsArray){
    mainSection.innerHTML=''
    robotsArray.forEach((robot) => {
  const card = document.createElement("div");
  card.className = "card";
  const image = document.createElement("img");
  image.src = `${robot.image}`;
  image.alt = `${robot.name}`;
  const robotName = document.createElement("h2");
  robotName.innerText = robot.name;
  const email = document.createElement("p");
  email.innerText = robot.email;

  card.appendChild(image);
  card.appendChild(robotName);
  card.appendChild(email);
  mainSection.appendChild(card);
})
}
renderCards(robots)

let robotsFIlter = [];
let debounceTimeout;
document.getElementById("filter").addEventListener("input", function (event) {
  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    const searchValue = event.target.value.trim();
    robotsFIlter = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchValue)
    );
    renderCards(robotsFIlter);
  }, 500);
});
