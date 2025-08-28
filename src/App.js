import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";


const Netflix = () => {
    return(
        <div>
            <h1 className="text-3xl font-bold underline text-green-800">Hello World</h1>
            <h2 className="text-2xl font-bold text-red-900">I am going to build Netflix Clone</h2>
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Netflix/>,
        children:[]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);