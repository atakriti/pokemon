let form = document.getElementById("form");
let inputText = document.getElementById("text");
let info = document.getElementById("pok1");


async function pokemon(name) {
  let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  let json = await result.json();
  let div = `<div>
    <h1>${json.name[0].toUpperCase() + json.name.slice(1)}</h1>
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



form.addEventListener("submit", (e) => {
  e.preventDefault();
  let resultText = inputText.value.toLowerCase()
  try {
    pokemon(resultText);
    info.innerHTML = ""
    inputText.value = ""
    
  } catch (error) {
    console.log(error)
  }
  
});
  
