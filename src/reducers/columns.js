import { ADD_COLUMN , REMOVE_COLUMN, UPDATE_COLUMN_TITLE, REMOVE_COLUMNS } from '../constants';
import { load } from 'redux-localstorage-simple';

let COLUMNS = load({ namespace: 'columns' });

if(!COLUMNS || !COLUMNS.columns || !COLUMNS.columns.length) {
    COLUMNS = {
        columns: [],
    };
}

const columns = (state = COLUMNS.columns, { board, index, title, type }) => {
    switch(type) {
        case ADD_COLUMN: {
            return [
                ...state,
                {
                    board,
                    index,
                    title,
                }
            ];
        }
        case REMOVE_COLUMN: {
            return [...state].filter(columns => columns.index !== index);
        }
        case REMOVE_COLUMNS: {
            return [...state].filter(columns => columns.board !== board);
        }
        case UPDATE_COLUMN_TITLE: {
            return [...state].map(column => {
                if(column.index === index) {
                    column.title = title;
                }
                return column;
            });
        }
        default: 
            return state;
    }
}

export default columns;