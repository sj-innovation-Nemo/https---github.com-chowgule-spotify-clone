export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  playing: false,
  item: null,

  //remove after finish
  // token:
  //   "BQCdHyngijLcMp6uejZJexbm-SbmEvQBKUqeX_npZYEW16EeYNF1uUIvcjUi9kD-ZNzR176QNq4dz6pDm2PH1zfsQMhQArDx7IaTfPMbS84865d8FdKjrJTWuqXclHYy03RW06bP4tM-wnjpzybZmbFKL4Zx762ClLUOZVR-2ZN--ODskiXbmlqzUPg6K2rEgmd0C20Y5S8fqoYg",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
