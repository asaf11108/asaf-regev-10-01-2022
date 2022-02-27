import { Component, FC, JSXElementConstructor, ReactElement } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from '../store/config';
import { initialState as generalInitialState } from '../store/general/general.state';
import { initialState as favoriteLocationsInitialState } from '../store/favorite-locations/favorite-locations.state';
import { createRenderer } from 'react-test-renderer/shallow';

type ReducersState = ReturnType<typeof rootReducer>;

type IWrapperGenerator = (initialState: ReducersState) => FC<{ children: ReactElement<any, string | JSXElementConstructor<any>> }>;

type IExtraRenderer = {
    initialState: ReducersState,
    renderOptions: RenderOptions
};

const WrapperGenerator: IWrapperGenerator = (initialState: ReducersState) => ({ children }) => {
    return <Provider store={configureStore({ reducer: rootReducer, preloadedState: initialState })}>{children}</Provider>;
};

export const deepRenderer = (
    El: ReactElement<any>,
    {
        initialState = { general: generalInitialState, favoriteLocations: favoriteLocationsInitialState },
        ...renderOptions
    }: IExtraRenderer
) => {
    const Wrapper = WrapperGenerator(initialState);
    return rtlRender(El, { wrapper: Wrapper, ...renderOptions });
};

const r = createRenderer();
export const shallowRenderer = (
    El: any,
    {
        initialState = { general: generalInitialState, favoriteLocations: favoriteLocationsInitialState },
        ...renderOptions
    }: IExtraRenderer
) => {
    const Wrapper = WrapperGenerator(initialState);
    r.render(<El />, { wrapper: Wrapper, ...renderOptions });
    return r.getRenderOutput();
};
