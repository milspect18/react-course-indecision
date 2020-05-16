import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
import Modal from 'react-modal';


export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

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

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            // Filter out the option that has invoked this call
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePickOption = () => {
        // Randomly select and option index for the options array
        const optionIdx = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[optionIdx];

        this.setState(() => ({ selectedOption }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Must enter a valid item!';
        } else if (this.state.options.includes(option)) {
            return `'${option}' already exists!`;
        }

        this.setState((previousState) => ({ options: previousState.options.concat(option) }));
    }

    handleCloseModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer!';

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        pickOption={this.handlePickOption}
                    />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            deleteOptions={this.handleDeleteOptions}
                            deleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            addOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.handleCloseModal}
                />
            </div>
        );
    }
}
