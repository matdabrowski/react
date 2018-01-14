import React from "react";
import Header from "./header.jsx";
import Content from "./content.jsx";
import Footer from "./footer.jsx";

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content content={this.props.content}/>
                <Footer/>
            </div>
        );
    }
}
