import {
    ADD_PLACE,
    DELETE_PLACE,
} from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE: 
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    name: action.payload,
                    image: {
                        uri: 'https://www.telegraph.co.uk/content/dam/Travel/leadAssets/24/49/sharm-thomson2_2449064a.jpg?imwidth=450',
                    },
                }),
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => place.key !== state.selectedPlace.key),
                selectedPlace: null,
            }
        default:
            return state;
    }
};

export default reducer;
