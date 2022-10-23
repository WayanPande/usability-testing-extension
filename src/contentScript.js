import { Store } from "webext-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app.jsx";

(() => {

    const body = document.getElementsByTagName('center')[0];

    if (body !== undefined) {

        const store = new Store({
            portName: "RSC",
        });

        const click = () => {
            store.dispatch({ type: "click" })
        };

        body.addEventListener("click", click);

        let container = document.createElement('div');
        container.setAttribute("id", "app-wrapper");
        container.style.position = "fixed"
        container.style.zIndex = "1000001"
        container.style.bottom = "10px"
        container.style.right = "7px"
        container.style.padding = "4px"
        container.style.borderRadius = "1rem"

        document.body.append(container);

        const root = ReactDOM.createRoot(container);

        root.render(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }


})();