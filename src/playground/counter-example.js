
class Counter extends React.Component {
    constructor(props) {
        super(props);

        // Ensure valid this binding in event handlers
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubtractOne = this.handleSubtractOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // Create our component state
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        // Load our initial count from localstorage
        const count = parseInt(localStorage.getItem('count'), 10);

        if (!isNaN(count)) {
            // we fetched a valid number
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Save our new count value
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }

    handleSubtractOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubtractOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count++;
//     renderApp();
// };

// const subtractOne = () => {
//     count--;
//     renderApp();
// };

// const reset = () => {
//     count = 0;
//     renderApp();
// };


// const renderApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subtractOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderApp()