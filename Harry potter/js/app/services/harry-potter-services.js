const externals = {};

externals.fetchCharacter = async (characterName) => {

  const api = 'https://hp-api.onrender.com/api/characters';
  const response = await fetch(`${api}`);
  const characters = await response.json();

  return characters.find(element => element.name === characterName);
}








/*externals.getCharacters = (character, render) => {
  var characters = [];

  fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((response) => saveCharacters(response));

  function saveCharacters(data) {
    const searchedCharacter = data.find(element => element.name === character);

    characters = data;
    render(searchedCharacter);
  }

};*/

export default externals;
