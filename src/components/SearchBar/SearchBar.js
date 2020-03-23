import React from 'react';
import './SearchBar.css';
import AutoCompleteLocation from '../AutoComplete/AutoComplete'
//import AutoCompleteLocation from 'react-autocomplete';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
   sortByOptions = {
    'Best Match': 'best_match' ,
    'Highest Rated' : 'rating' ,
    'Most Reviewed' : 'review_count' ,
    'Closest Distance' : 'distance'
};

    getSortByClass(sortByOption) {
      if (this.state.sortBy === sortByOption ) {
        return 'active'
      } else {
        return ''
      }
    };

    handleSortByChange(sortByOption) {
      
        this.setState({
          sortBy: sortByOption
        }, ()=> {
          this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        })
      
    }

    handleTermChange(event) {
      this.setState({
        term: event.target.value
      })
    }

    handleLocationChange(value) {
      
      this.setState({
        location: value

      })
    }



   /* handleLocationChange(event) {
      
      this.setState({
        location: event.target.value

      })
    }*/

    handleSearch(event) {
      
      if(event.charCode === 13 || event.type  === 'click'){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
      
      event.preventDefault()
      }
      
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let  sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this,sortByOptionValue) } > {sortByOption}  </li>
        });
    }
    render() {
        
       return(
            <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
  
    <input type='text' placeholder="Search Businesses" onChange={this.handleTermChange} onKeyPress={this.handleSearch} autoComplete="on"  />
      
    <AutoCompleteLocation locationChange={this.handleLocationChange} handleSearch={this.handleSearch} />
     
  </div>

  
  <div className="SearchBar-submit" onClick={this.handleSearch}>
    <a>Let's Go</a>
  </div>
</div>

        )
        
    }

    
};
       
export default SearchBar;