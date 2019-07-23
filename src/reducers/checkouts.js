import { ADD_CHECKOUT, REMOVE_CHECKOUTS, REMOVE_CHECKOUT, UPDATE_DESCRIPTION, UPDATE_TITLE } from '../constants';
import { load } from 'redux-localstorage-simple';

let CHECKOUTS = load({ namespace: 'checkouts' });

if(!CHECKOUTS || !CHECKOUTS.checkouts || !CHECKOUTS.checkouts.length) {
    CHECKOUTS = {
        checkouts: [],
    };
}

const checkouts = (state = CHECKOUTS.checkouts, { board, parent, id, title, description, type }) => {
    switch(type) {
        case ADD_CHECKOUT: {
            return [
                ...state,
                {
                    board,
                    parent,
                    id,
                    title,
                    description,
                }
            ]
        }
        case REMOVE_CHECKOUTS: {
            return [...state].filter(checkout => checkout.board !== board);
        }
        case REMOVE_CHECKOUT: {
            return [...state].filter(checkout => checkout.id !== id);
        }
        case UPDATE_TITLE: {
            return [...state].map(checkout => {
                if(checkout.id === id) {
                    checkout.title = title;
                }
                return checkout;
            });
        }
        case UPDATE_DESCRIPTION: {
            return [...state].map(checkout => {
                if(checkout.id === id) {
                    checkout.description = description;
                }
                return checkout;
            })
        }
        default:
            return state;
    }
};

export default checkouts;