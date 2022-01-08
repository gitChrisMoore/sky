/* istanbul ignore file */

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { render } from '@testing-library/react';

const AllTheProviders = ({ children }: any) => {
    return <Router>{children}</Router>;
};

const customRender = (ui: any, options?: any) =>
    render(ui, { wrapper: AllTheProviders, ...options });
const customRenderHook = (ui: any, options?: any) =>
    renderHook(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
export { customRenderHook as renderHook };
