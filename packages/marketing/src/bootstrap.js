import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Mount fn to start the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}
// If we are in dev/isolation
// mount immidiately
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-dev-root');
    if (el) {
        mount(el);
    }
}

// we are running in prod through container,
// and we should export the mount function
export { mount };