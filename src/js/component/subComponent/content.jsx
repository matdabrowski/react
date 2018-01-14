import React from "react";

export default class Content extends React.Component {
    render() {
        return (
            <div className="container starter-template">
                <main role="main" className="container">
                    {this.props.content}
                </main>
            </div>
        );
    }
}
