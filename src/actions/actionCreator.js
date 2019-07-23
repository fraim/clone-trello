import { 
    ADD_BOARD, 
    REMOVE_BOARD, 
    ADD_COLUMN, 
    REMOVE_COLUMN, 
    UPDATE_COLUMN_TITLE, 
    REMOVE_COLUMNS, 
    UPDATE_BOARD_TITLE,
    ADD_CHECKOUT,
    REMOVE_CHECKOUTS,
    UPDATE_DESCRIPTION,
    UPDATE_TITLE,
    REMOVE_CHECKOUT,
} from '../constants';

export const addBoard = (id, name, description, columns) => ({
    type: ADD_BOARD,
    id,
    name,
    description,
    columns,
});

export const removeBoard = id => ({
    type: REMOVE_BOARD,
    id,
});

export const updateBoardTitle = (id, name) => ({
    type: UPDATE_BOARD_TITLE,
    id, 
    name,
});

export const addColumn = (board, index, title) => ({
    type: ADD_COLUMN,
    board,
    index,
    title,
});

export const removeColumn = index => ({
    type: REMOVE_COLUMN,
    index,
});

export const removeColumns = board => ({
    type: REMOVE_COLUMNS,
    board,
});

export const updateColumnTitle = (index, title) => ({
    type: UPDATE_COLUMN_TITLE,
    index,
    title,
});

export const addCheckout = (board, parent, id, title, description) => ({
    type: ADD_CHECKOUT,
    board,
    parent,
    id,
    title,
    description,
});

export const removeCheckouts = board => ({
    type: REMOVE_CHECKOUTS,
    board,
});

export const removeCheckout = id => ({
    type: REMOVE_CHECKOUT,
    id,
});

export const updateCheckoutDescription = (id, description) => ({
    type: UPDATE_DESCRIPTION,
    id,
    description,
});

export const updateCheckoutTitle = (id, title) => ({
    type: UPDATE_TITLE,
    id,
    title,
});