import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from "./component/subComponent/main.jsx";
import {render} from 'react-dom';

class App extends React.Component {
    static propTypes = {
        counter: PropTypes.number,
        onIncrement: PropTypes.func,
        onDecrement: PropTypes.func,
        sign: PropTypes.string,
        onUp: PropTypes.func,
        onDown: PropTypes.func
    };

    render() {
        const {counter = 0, onDecrement, onIncrement, sign = "~", onUp, onDown} = this.props;
        const content = <div>
            <h1>Home page</h1>
            <p>{counter}</p>
            <p/>
            <p>
                <button className="btn" onClick={onIncrement}>Dodaj</button>
                <button className="btn" onClick={onDecrement}>Odejmij</button>
            </p>
            <p/>
            <p>{sign}</p>
            <p>
                <button className="btn" onClick={onUp}>+</button>
                <button className="btn" onClick={onDown}>-</button>
            </p>
        </div>;
        return (<Main content={content}/>);
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    console.log(state);
    return {
        counter: state.changeCounter.counter,
        sign: state.changeSign.aSign
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        onUp: () => dispatch({type: 'UP'}),
        onDown: () => dispatch({type: 'DOWN'})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);