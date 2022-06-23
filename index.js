let form = document.getElementById("form");
let inputText = document.getElementById("text");
let info = document.getElementById("pok1");
let info2 = document.getElementById("pok2");
let info3 = document.getElementById("pok3");
let info4 = document.getElementById("pok4");
let info5 = document.getElementById("pok5");
let info6 = document.getElementById("pok6");
let info7 = document.getElementById("pok7");
// info.style.display = "none"

// function search() {
//     let bulbasaur = "bulbasaur"
//     if (inputText.value === "bulbasaur") {
//         info.style.display = "block"
//     } else {
//         info.style.display = "none"

//     }
// }
// search()

async function bulbasaur() {
  let result = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
  let json = await result.json();
  console.log(json);
  let div = `<div>
    <h1>${json.name}</h1>
    <img src= ${json.sprites.front_default} />
    <h3>Stats</h3>
    <ul>${json.stats
      .map((p) => `<li>${p.stat.name}</li> <li>${p.base_stat}</li> `)
      .join("")}</ul>
    <h3>Abilities</h3>
    <ul>${json.abilities.map((p) => `<li>${p.ability.name}</li>`).join("")}</ul>

    </div>`;

  info.innerHTML += div;
  return json;
}
bulbasaur();

async function ivysaur() {
  let result = await fetch("https://pokeapi.co/api/v2/pokemon/ivysaur");
  let json = await result.json();
  console.log(json);
  let div = `<div>
    <h1>${json.name}</h1>
    <img src= ${json.sprites.front_default} />
    <h3>Stats</h3>
    <ul>${json.stats
      .map((p) => `<li>${p.stat.name}</li> <li>${p.base_stat}</li> `)
      .join("")}</ul>
    <h3>Abilities</h3>
    <ul>${json.abilities.map((p) => `<li>${p.ability.name}</li>`).join("")}</ul>

    </div>`;

  info2.innerHTML += div;
  return json;
}
ivysaur();

async function venusaur() {
  let result = await fetch("https://pokeapi.co/api/v2/pokemon/venusaur");
  let json = await result.json();
  let div = `<div>
  <h1>${json.name}</h1>
  <img src= ${json.sprites.front_default} />
  <h3>Stats</h3>
  <ul>${json.stats
    .map((p) => `<li>${p.stat.name}</li> <li>${p.base_stat}</li> `)
    .join("")}</ul>
  <h3>Abilities</h3>
  <ul>${json.abilities.map((p) => `<li>${p.ability.name}</li>`).join("")}</ul>

  </div>`;
  info3.innerHTML += div;
  return json;
}
venusaur();

async function charmander() {
  let result = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
  let json = await result.json();
  let div = `<div>
  <h1>${json.name}</h1>
  <img src= ${json.sprites.front_default} />
  <h3>Stats</h3>
  <ul>${json.stats
    .map((p) => `<li>${p.stat.name}</li> <li>${p.base_stat}</li> `)
    .join("")}</ul>
  <h3>Abilities</h3>
  <ul>${json.abilities.map((p) => `<li>${p.ability.name}</li>`).join("")}</ul>

  </div>`;
  info4.innerHTML += div;
  return json;
}
charmander();

async function charizard() {
  let result = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
  let json = await result.json();
  let div = `<div>
  <h1>${json.name}</h1>
  <img src= ${json.sprites.front_default} />
  <h3>Stats</h3>
  <ul>${json.stats
    .map((p) => `<li>${p.stat.name}</li> <li>${p.base_stat}</li> `)
    .join("")}</ul>
  <h3>Abilities</h3>
  <ul>${json.abilities.map((p) => `<li>${p.ability.name}</li>`).join("")}</ul>

  </div>`;
  info5.innerHTML += div;
  return json;
}
charizard();



async function squirtle() {
  let result = await fetch("https://pokeapi.co/api/v2/pokemon/squirtle");
  let json = await result.json();
  let div = `<div>
  <h1>${json.name}</h1>
  <img src= ${json.sprites.front_default} />
  <h3>Stats</h3>
  <ul>${json.stats
    .map((p) => `<li>${p.stat.name}</li> <li>${p.base_stat}</li> `)
    .join("")}</ul>
  <h3>Abilities</h3>
  <ul>${json.abilities.map((p) => `<li>${p.ability.name}</li>`).join("")}</ul>

  </div>`;
  info6.innerHTML += div;
  return json;
}
squirtle();

async function wartortle() {
  let result = await fetch("https://pokeapi.co/api/v2/pokemon/wartortle");
  let json = await result.json();
  console.log(json);
  let div = `<div>
    <h1>${json.name}</h1>
    <img src= ${json.sprites.front_default} />
    <h3>Stats</h3>
    <ul>${json.stats
      .map((p) => `<li>${p.stat.name}</li> <li>${p.base_stat}</li> `)
      .join("")}</ul>
    <h3>Abilities</h3>
    <ul>${json.abilities.map((p) => `<li>${p.ability.name}</li>`).join("")}</ul>

    </div>`;

  info7.innerHTML += div;
  return json;
}
wartortle();

info.style.display = "none";
info2.style.display = "none";
info3.style.display = "none";
info4.style.display = "none";
info5.style.display = "none";
info6.style.display = "none";
info7.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let bulbasaur = "bulbasaur";
  let ivysaur = "ivysaur";
  let venusaur = "venusaur";
  let charmander = "charmander";
  let charizard = "charizard"
  let squirtle = "squirtle"
  let wartortle = "wartortle"
  if (!inputText.value == "") {

    if (bulbasaur.includes(inputText.value)) {
      info.style.display = "block";
      info2.style.display = "none";
      info3.style.display = "none";
      info4.style.display = "none";
      info5.style.display = "none";
      info6.style.display = "none";
      info7.style.display = "none";
      inputText.value = "";
    } else if (ivysaur.includes(inputText.value)) {
      info2.style.display = "block";
      info.style.display = "none";
      info3.style.display = "none";
      info4.style.display = "none";
      info5.style.display = "none";
      info6.style.display = "none";
      info7.style.display = "none";
      inputText.value = "";
    } else if (venusaur.includes(inputText.value)) {
      info3.style.display = "block";
      info.style.display = "none";
      info2.style.display = "none";
      info4.style.display = "none";
      info5.style.display = "none";
      info6.style.display = "none";
      info7.style.display = "none";
      inputText.value = "";
    } else if (charmander.includes(inputText.value)) {
      info4.style.display = "block";
      info.style.display = "none";
      info2.style.display = "none";
      info3.style.display = "none";
      info5.style.display = "none";
      info6.style.display = "none";
      info7.style.display = "none";
      inputText.value = "";

    } else if (charizard.includes(inputText.value)) {
      info5.style.display = "block"
      info4.style.display = "none";
      info.style.display = "none";
      info2.style.display = "none";
      info3.style.display = "none";
      info6.style.display = "none";
      info7.style.display = "none";
      inputText.value = "";

    } else if (squirtle.includes(inputText.value)) {
      info6.style.display = "block"
      info5.style.display = "none"
      info4.style.display = "none";
      info.style.display = "none";
      info2.style.display = "none";
      info3.style.display = "none";
      info7.style.display = "none"
      inputText.value = "";

    } else if (wartortle.includes(inputText.value)) {
      info7.style.display = "block"
      info6.style.display = "none"
      info5.style.display = "none"
      info4.style.display = "none";
      info.style.display = "none";
      info2.style.display = "none";
      info3.style.display = "none";
      inputText.value = "";

    }else {
      info.style.display = "none";
      info2.style.display = "none";
      info3.style.display = "none";
      info4.style.display = "none";
      info5.style.display = "none";
      info6.style.display = "none";
      info7.style.display = "none";
      inputText.value = "";
      setTimeout(() => alert("This pokemon is not exist!"), 100);
    }







  }
});

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let bulbasaur = "bulbasaur";
//     let ivysaur = "ivysaur";
//     let venusaur = "venusaur";
//     switch (inputText.value) {
//         case (bulbasaur.includes(inputText.value)):
//             info.style.display = "block"
//             break;
//         case (ivysaur.includes(inputText.value)):
//             info2.style.display = "block"
//             break;
//         case (venusaur.includes(inputText.value)):
//             info3.style.display = "block"
//             break;
//         default:
//    }
//   });
