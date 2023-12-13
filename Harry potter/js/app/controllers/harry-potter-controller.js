import harryPotterView from "../views/harry-potter-view.js";
import harryPotterService from "../services/harry-potter-services.js";

const externals = {};

const searchBarHandler = async () => {
  const input = $("#searchBar").val();
  const result = await harryPotterService.fetchCharacter(input);
  harryPotterView.render(result);
};

externals.start = () => {
  harryPotterView.bind("searchBar", searchBarHandler);
  harryPotterView.render();
};
export default externals;
