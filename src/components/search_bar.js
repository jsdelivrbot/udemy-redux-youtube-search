import React, {Component} from  'react';
// {} says import React, and pull out Component into a variable called Component
// {Component} in the import basically creates the following...
// const Component = React.Component

// plain java script function
// functional React component
// 1 function - some info come in - jsx goes out
//const SearchBar = () => {
//    return <input />
//}

// rule of thumb to start out using functional components and only use class components when you need additional functionality

// ES 6 class component - has state
//class SearchBar extends React.Component{
class SearchBar extends Component{

    //state - plain js object used to record and react to user events
    // each class based object has its own state object
    // each time that state changes, render() is called and all childern's render() is called
    // initialized in the constructor method
    constructor(props){
        super(props);

        // state can only be set like this in the constructor
        // subsequent changes to state is done using the setState function
        this.state = {term:''};
    }


    // every class comp must implement a render function that returns JSX
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(e) => this.onInputChange(e.target.value) } />
            </div>
    );


        // controlled form element is when the state controls what the value is

        // => function same as the called function below
        // return <input onChange={this.onInputChange} />
        //return <input onChange={(e) => console.log('xxx' + e.target.value)} />;
    }

    // naming convention for events
    // use on/handle
    // followed by name of the element( <input> )that you watch
    // followed by the event name itself
    // browser events triggered by an event handlers(ie. onChange), always called with an event object
    // e is the Event object and can be named anything
    // describes the event context
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

// creates a reference to this SearchBar component which can now be imported into other components
export default SearchBar;