import React from "react";

function Login(){
    return React.createElement(
        "form",
        null,
        React.createElement("input", {type:"text", placeholder:"username"}),
        React.createElement("input", {type:"password", placeholder:"password"}),
        React.createElement("button", {type:"submit"}, "Submit"),

    )
};
export default Login;