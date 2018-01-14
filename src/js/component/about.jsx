import React from "react";
import Main from "./subComponent/main.jsx";

export default class About extends React.Component {
    constructor() {
        super();
        this.state = {title: "About"};
    }

    render() {
        const content = <div>
            <h1>About</h1>
            <p>Test about page</p>
        </div>;
        return (<Main content={content}/>);
    }
}
