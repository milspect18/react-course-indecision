const app = {
    title: 'Indecision App',
    subtitle: 'Put you life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderApp();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    alert(option);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Sould I Do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                { app.options.map((item, idx) => <li key={idx}>{item}</li>) }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Item</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderApp()
