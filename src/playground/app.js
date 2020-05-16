class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        // ensure proper 'this' binding
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Nothing to do if we find invalid localstorage JSON
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('Unmounting...');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            // Filter out the option that has invoked this call
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePickOption() {
        // Randomly select and option index for the options array
        const optionIdx = Math.floor(Math.random() * this.state.options.length);

        alert(this.state.options[optionIdx]);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Must enter a valid item!';
        } else if (this.state.options.includes(option)) {
            return `'${option}' already exists!`;
        }

        this.setState((previousState) => ({ options: previousState.options.concat(option) }));
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer!';

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    pickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    deleteOptions={this.handleDeleteOptions}
                    deleteOption={this.handleDeleteOption}
                />
                <AddOption
                    addOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.pickOption}
                disabled={!props.hasOptions}
            >
                What Should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    const options = props.options || [];

    return (
        <div>
            <button onClick={props.deleteOptions}>Remove All</button>
            {options.length === 0 && <p>Please add an option to get started!</p>}
            {
                options.map((option, idx) => (
                    <Option
                        key={idx}
                        optionText={option}
                        onRemove={props.deleteOption}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => { props.onRemove(props.optionText) }}>
                Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Item</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
