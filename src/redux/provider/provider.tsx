'use client'
import {persist, store} from '../store'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

export function ReduxProvider({children}: { children: React.ReactNode }) {
    return <Provider store={store}>
        <PersistGate loading={false}  persistor={persist}>
            {children}
        </PersistGate>
    </Provider>
}