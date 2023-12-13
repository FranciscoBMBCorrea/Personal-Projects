const externals = {};

//Guardar elementos da DOM/ jquery
const elements = {};

//Guardar funções de callback
const handlers = {};

const renderSearchBar = () => {
  if (elements.searchBar) {
    return;
  }

  elements.searchBar = $(
    "<input type='text' placeholder='Search Character' id='searchBar'>"
  );
  elements.app.append(elements.searchBar);
};

const renderButton = () => {
  if (elements.button) {
    return;
  }

  elements.button = $(
    "<button type='button' id='search-button'</button>"
  );
  elements.button.click(handlers["searchBar"]);
  elements.app.append(elements.button);
};

const buildCard = ({
  name,
  species,
  gender,
  house,
  yearOfBirth,
  ancestry,
  wand,
  image,
}) => {
  return `<div>
  <img src=${image} />
  <p>Name: ${name}</p>
    <p>Species: ${species}</p>
    <p>Gender: ${gender}</p>
    <p>House: ${house}</p>
    <p>Year of Birth: ${yearOfBirth}</p>
    <p>Ancestry: ${ancestry}</p>
    <p>Wand: <br> ${wand.wood}, <br>
    ${wand.core}, <br>
    ${wand.length}</p>
    </div>`;
};

const renderCharacter = (character) => {
  if (elements.characterCard) {
    elements.characterCard.empty();
  }

  elements.characterCard = $(buildCard(character));
  elements.app.append(elements.characterCard);
};

externals.bind = (event, handler) => {
  handlers[event] = handler;
};

externals.render = (character) => {
  elements.app = $("#app");

  renderSearchBar();
  renderButton();

  if (character) {
    renderCharacter(character);
  }
};

export default externals;
