const heroes = [
    {
        img: "images/avengers_01.jpg",
        name: "Thor",
        fullname: "Thor Odinson",
        race: "Asgardian",
        alignment: "Good",
        strength: "100%",
        speed: "80%",
        durability: "100%"
    },
    {
        img: "images/avengers_02.jpg",
        name: "Iron Man",
        fullname: "Tony Stark",
        race: "Human",
        alignment: "Good",
        strength: "85%",
        speed: "70%",
        durability: "85%"
    },
    {
        img: "images/avengers_05.jpg",
        name: "Captain America",
        fullname: "Steve Rogers",
        race: "Human",
        alignment: "Good",
        strength: "85%",
        speed: "60%",
        durability: "90%"
    },
    {
    img: "images/avengers_06.jpg",
        name: "Blackwidow",
        fullname: "Natasha Romanoff",
        race: "Human",
        alignment: "Good",
        strength: "85%",
        speed: "60%",
        durability: "90%"
    },
    {
     img: "images/avengers_04.jpg",
        name: "Hawkeye",
        fullname: "Clint Barton",
        race: "Human",
        alignment: "Good",
        strength: "70%",
        speed: "60%",
        durability: "90%"
    },
    {
    img: "images/avengers_03.jpg",
        name: "Hulk",
        fullname:"Bruce banner",
        race: "Human",
        alignment: "Good",
        strength: "95%",
        speed: "40%",
        durability: "90%"
    },
    ];let currentIndex =0;

function updateCard() {
    document.getElementById("hero-img").src = heroes[currentIndex].img;
    document.getElementById("hero-name").textContent = heroes[currentIndex].name;
    document.getElementById("hero-fullname").textContent = heroes[currentIndex].fullname;
    document.getElementById("hero-race").textContent = heroes[currentIndex].race;
    document.getElementById("hero-alignment").textContent = heroes[currentIndex].alignment;
    document.getElementById("hero-strength").textContent = heroes[currentIndex].strength;
    document.getElementById("hero-speed").textContent = heroes[currentIndex].speed;
    document.getElementById("hero-durability").textContent = heroes[currentIndex].durability;
}

function showPreviousCard() {
    currentIndex = (currentIndex - 1 + heroes.length) % heroes.length;
    updateCard();
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % heroes.length;
    updateCard();
}

window.onload = updateCard;