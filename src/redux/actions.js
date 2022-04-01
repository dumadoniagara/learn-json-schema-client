import {
    INCREMENT,
    DECREMENT,
    ZERO
} from './types';

export const incrementNumber = () => ({
    type: INCREMENT,
});

export const decrementNumber = () => ({
    type: DECREMENT,
});
export const toZero = () => ({
    type: ZERO,
});