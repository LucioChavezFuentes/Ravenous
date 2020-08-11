import React from 'react';
import Autosuggest from 'react-autosuggest';
import theme from './AutoComplete.module.css';
// Imagine you have a list of languages that you'd like to autosuggest.

const languages = [
  {
    name: 'Mexico',
    year: 1972,
  },
  {
    name: 'Francia',
    year: 2012,
  },

  {
    name: 'Moroco',
    year: 1967,
  },

  {
    name: 'Malasia',
    year: 1234,
  },

  {
    name: 'Canada',
    year: 1256,
  },

  {
    name: 'US',
    year: 675,
  },

  {
    name: 'New York',
    year: 580,
  },

  {
    name: 'Texas',
    year: 1092,
  },

  {
    name: 'Guadalajara',
    year: 479,
  },
  {
    name: 'Monterrey',
    year: 7239,
  },

  {
    name: 'California',
    year: 4567,
  },
  {
    name: 'Florida',
    year: 9549,
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion, { isHighlighted }) => (
  <div
    key={suggestion.year}
    style={{ backgroundColor: isHighlighted ? '#bebebe' : '#eee' }}
  >
    {suggestion.name}
  </div>
);

export default class AutoCompleteLocation extends React.Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [
        {
          name: 'Mexico',
          year: 1972,
        },
        {
          name: 'Francia',
          year: 2012,
        },

        {
          name: 'Moroco',
          year: 1967,
        },

        {
          name: 'Malasia',
          year: 1234,
        },

        {
          name: 'Canada',
          year: 1256,
        },

        {
          name: 'US',
          year: 675,
        },

        {
          name: 'New York',
          year: 580,
        },

        {
          name: 'Texas',
          year: 1092,
        },

        {
          name: 'Guadalajara',
          year: 479,
        },
        {
          name: 'Monterrey',
          year: 7239,
        },

        {
          name: 'California',
          year: 4567,
        },
        {
          name: 'Florida',
          year: 9549,
        },
      ],
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    this.props.handleSearch(event);
  }

  //Mi comentario
  //AutoComplete Settings

  onChange = (event, { newValue }) => {
    this.setState(
      {
        value: newValue,
      },
      () => {
        this.props.locationChange(this.state.value);
      }
    );
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected(
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) {}

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Where? Please type a city',
      value,
      onChange: this.onChange,
      onKeyPress: this.handleKeyPress,
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
        theme={theme}
      />
    );
  }
}
