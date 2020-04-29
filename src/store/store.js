import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const store = createContext({});
const { Provider } = store;


const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        (reducerState, { type, payload }) => {
            switch (type) {
            case 'setPayload':
                return {
                    ...reducerState,
                    payload,
                };
            case 'reset':
                return {};
            default:
                return state;
            }
        },
        {
        },
    );

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { store, StateProvider };
