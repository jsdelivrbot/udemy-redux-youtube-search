// always need to import React that has anything to do with JSX
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB64jNZeXVQizl74LV2mvJNOjRwzCvnCzA';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos:[],
            selectedVideo: null
        };

    this.videoSearch('surfboards');
    }


    videoSearch(term){
        YTSearch({key: API_KEY, term:term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }

    // in VideoList, we defined a (callback)function called onVideoSelect that is available on props that updates state with an input of a var called selectedVideo
    // since the input is named selectedVideo, we can setState using {selectedVideo} since they are named the same as the property in state

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}


// put gen'ed html and put in the DOM/put on the page
// need to tell where in the DOM to put it
ReactDOM.render(<App />, document.querySelector(('.container')));
