import { FC, JSXElementConstructor, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from '../store/config';
import { initialState as generalInitialState } from '../store/general/general.state';
import { initialState as favoriteLocationsInitialState } from '../store/favorite-locations/favorite-locations.state';
import { createRenderer,  } from 'react-test-renderer/shallow';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

type ReducersState = ReturnType<typeof rootReducer>;

type IWrapperGenerator = (initialState: ReducersState) => FC<{ children: ReactElement<any, string | JSXElementConstructor<any>> }>;

const _initialState = { general: generalInitialState, favoriteLocations: favoriteLocationsInitialState };

const WrapperGenerator: IWrapperGenerator = (initialState: ReducersState) => ({ children }) => {
    return <Provider store={configureStore({ reducer: rootReducer, preloadedState: initialState })}>{children}</Provider>;
};

export const deepRenderer = (
    El: ReactElement<any>,
    initialState: ReducersState =  _initialState
) => {
    const Wrapper = WrapperGenerator(initialState);
    return render(<Wrapper>{El}</Wrapper>);
};

const r = createRenderer();
export const shallowRenderer = (
    El: ReactElement<any>,
    initialState: ReducersState =  _initialState
) => {
    const Wrapper = WrapperGenerator(initialState);
    r.render(<Wrapper>{El}</Wrapper>);
    return r.getRenderOutput();
};

export const reduxShallow = (
    El: ReactElement<any>,
    initialState: ReducersState =  _initialState,
) => {
    const Wrapper = WrapperGenerator(initialState);
    return shallow(<Wrapper>{El}</Wrapper>);
};

