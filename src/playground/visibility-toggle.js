// Second build-t chalenge, convert app to component based
class VisibilityApp extends React.Component {
    constructor(props) {
        super(props);

        // ensure proper this binding
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);

        // setup state
        this.state = {
            visible: false
        };
    }

    handleVisibilityToggle() {
        this.setState((previousState) => {
            return {
                visible: !previousState.visible
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>
                    {this.state.visible ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visible && <p>Check these sweet dets!</p>}
            </div>
        );
    }
}


ReactDOM.render(<VisibilityApp />, document.getElementById('app'));


// // First build-it challenge

// const appRoot = document.getElementById('app');
// let detsShowing = false

// const onChangeVis = () => {
//     detsShowing = !detsShowing;
//     render();
// }

// const render = () => {
//     const content = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onChangeVis}>{detsShowing ? 'Hide Details' : 'Show Details'}</button>
//             {detsShowing && <p>These be the details!</p>}
//         </div>
//     )

//     ReactDOM.render(content, appRoot)
// }

// render();
