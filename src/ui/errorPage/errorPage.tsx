import React from "react";
import {NavLink} from "react-router-dom";
import {MAIN_PAGE} from "../../accets/constants";

export const ErrorPage = () => {
    return (
        <>
            <h3>Page not found</h3>
            <NavLink to={MAIN_PAGE}>
                <button>back to main page</button>
            </NavLink>
        </>
    )
}