import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    FormControl,
    InputGroup,
    Image,
} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
const searchIcon = require('../assets/search.png');

const Wrapper = styled.div`
    position: absolute;
    background-color: white;
    width: 70%;
    margin: 0 auto;
    left: 50%;
    top: 145px;
    transform: translate(-50%, 0%);

  .suggestions {
    border: 1px solid #999;
    border-top-width: 0;
    list-style: none;
    margin: auto;
    z-index: 1;
  }

  .no-suggestions {
    border: 1px solid #999;
    border-top-width: 0;
    list-style: none;
    margin: auto;
    z-index: 1;
    padding: 0.5rem;
    font-style: italic;
  }
  
  .suggestions li {
    padding: 0.5rem;
    z-index: 1;
    position: absolute:
  }
  
  .suggestion-active,
  .suggestions li:hover {
    cursor: pointer;
    z-index: 1;
  }
  
  .suggestions li:not(:last-of-type) {
    border-bottom: 1px solid #999;
  }
`;


class Autocomplete extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };

    static defaultProps = {
        suggestions: []
    };

    constructor(props) {
        super(props);

        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: "",
        };
    }

    // Event fired when the input value is changed
    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    // Event fired when the user presses a key down
    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
        const spacesData = this.props.data;
        // const history = this.props.history;

        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
            let title = filteredSuggestions[activeSuggestion];
            let space = spacesData.filter(obj => {
                return obj.title === title
            })[0];

            if (space) {
                this.props.history.push({
                    pathname: '/view-space',
                    state: { data: space }
                })
            }
        }
    };

    render() {
        const {
            onChange,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;
        const data = this.props.data;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            // Flag the active suggestion with a class
                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }

                            let link_location = data.filter(obj => {
                                return obj.title === suggestion
                            })[0];

                            return (
                                <Link key={suggestion} to={{ state: { data: link_location }, pathname: "/view-space" }}
                                    style={{ textDecoration: 'none' }}>
                                    <li
                                        className={className}
                                        key={suggestion}
                                    >
                                        {suggestion}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="no-suggestions">No suggestions found</div>
                );
            }
        }

        return ([
            <InputGroup key={"ig"} style={{ width: '85%', margin: '0px auto 20px' }} >
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <Image src={searchIcon} />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    type="text"
                    placeholder="Search"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                    style={{ width: '100%' }}
                />
            </InputGroup>,
            <Wrapper key={"wr"}>
                {suggestionsListComponent}
            </Wrapper>
        ])
    }
}

export default withRouter(Autocomplete);