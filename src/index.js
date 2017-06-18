import React from 'react';
import ReactDOM from 'react-dom';
import DisplayGif from './components/DisplayGif/DisplayGif'

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        gifs: [],
        url: ''
      }

      this.getCatGif = this.getCatGif.bind(this)
      this.selectCatGif = this.selectCatGif.bind(this)

    }

    componentDidMount() {
      this.getCatGif()
    }

    getCatGif() {
      fetch(`http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC`)
      .then(res => res.json())
      .then(gifs => {
        const {data} = gifs
        this.setState({gifs: data})
      },
      error => {
        throw error
      });
    }

    selectCatGif() {
      if(this.state.gifs.length > 0) {
        const catIndex = Math.floor(Math.random() * this.state.gifs.length)
        const catGifUrl = this.state.gifs[catIndex].images.original.url
        this.state.gifs.splice(catIndex, 1)
        this.setState({
          gifs: this.state.gifs,
          url: catGifUrl
        })
      } else {
        return false
      }
    }

    render() {
        return (
            <div>
                <button onClick={this.selectCatGif}>Click here for a Cat gif</button>
                {this.state.url !== '' ? <DisplayGif url={this.state.url}/> : false}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
