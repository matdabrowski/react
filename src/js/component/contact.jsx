import React from "react";
import Main from "./subComponent/main.jsx";

export default class Contact extends React.Component {
    render() {
        const content = <div>
            <h1>Contact</h1>
            <p>Test contact page</p>
        </div>;
        return (<Main content={content}/>);
    }
}
