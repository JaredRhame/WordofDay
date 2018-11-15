import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wod: ""
    };
    this.audioPron = this.audioPron.bind(this);
  }
  randomWord() {
    // fetch("https://github.com/bevacqua/correcthorse/blob/master/wordlist.json")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.id);
    //   });
    "jackalope";
  }
  componentDidMount() {
    fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/jackalope
      }?key=1fc177d9-4784-4c21-a7b7-022acc386c31`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let wod = (
          <div className="wod">
            <h2 className="word">{data[0].hwi.hw}</h2>
            <p className="pron">{data[0].hwi.prs[0].mw}</p>
            <audio src={data[0].hwi.prs[0].sound.audio} />
            <p className="definition">{data[0].shortdef[0]}</p>
          </div>
        );
        this.setState({ wod: wod });
      });
  }

  audioPron() {
    console.log("test");
    // audio.currentTime = 0;
    // this.state.wod.props.children[2].props.src.play();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i
            className="large material-icons pron-sound"
            onClick={this.audioPron}
          >
            mic
          </i>
          <div className="container">{this.state.wod}</div>
        </header>
      </div>
    );
  }
}

export default App;
