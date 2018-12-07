export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      console.log(action.payload.location);
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload]
      }

    default:
      return state;

  }
};
