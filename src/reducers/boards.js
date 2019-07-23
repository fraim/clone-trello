import { ADD_BOARD, REMOVE_BOARD, UPDATE_BOARD_TITLE } from '../constants';
import { load } from 'redux-localstorage-simple';

let BOARDS = load({ namespace: 'boards' });

if(!BOARDS || !BOARDS.boards || !BOARDS.boards.length) {
    BOARDS = {
        boards: [],
    };
}

const boards = (state = BOARDS.boards, { id, name, description, type }) => {
    switch (type) {
        case ADD_BOARD: {
            return [
                ...state, 
                {
                    id,
                    name,
                    description,
                }
            ];
        }
        case REMOVE_BOARD: {
            return [...state].filter(board => board.id !== id);
        }
        case UPDATE_BOARD_TITLE: {
            return [...state].map(board => {
                if(board.id == id) {
                    board.name = name;
                }
                return board;
            });
        }
        default:
            return state;
    }
};

export default boards;