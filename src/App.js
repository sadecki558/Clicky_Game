import React from "react";
import Chars from "./components/Characters";
import charRef from "./charLinks.json";
import Score from "./components/Score"
import TScore from "./components/TopScore";
import Message from "./components/Message";

class App extends React.Component {

    constructor(){
        super();
        this.charIds = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        this.clickedChars = [];
        this.doShake = "";
        this.state = {
            myNewList: [],
            score: 0,
            topScore: 0,
            msg: "Click an Image to begin!",
            msgType: "",
            key: 0
        };

    }
    componentDidMount() {
        this.shuffleChars();
    }

    //This is the Fisher-Yates Shuffle.
    shuffleArray(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    shuffleChars(clickedId){

      if(clickedId) {
          if(this.clickedChars.indexOf(clickedId) === -1) {
              this.clickedChars.push(clickedId);
              if(this.state.topScore === this.state.score)
                  this.setState({topScore: this.state.topScore + 1});
              this.doShake = "";
              this.setState({
                  score : this.state.score + 1,
                  msgType: "correct",
                  msg: "You guessed correctly!",
                  key: Math.random()
              });
          } else {
              this.doShake = "shake";
              this.setState({
                  score : 0,
                  msgType: "incorrect",
                  msg: "You guessed incorrectly!",
                  key: Math.random()
              });
              this.clickedChars = [];
          }
      }
      this.shuffledArray = this.shuffleArray(this.charIds);
      this.setState({
          myNewList: this.shuffledArray.map(i =>
              <Chars shakeIt={this.doShake} id={charRef[i].id} url={charRef[i].image} key={charRef[i].id} fnc={(e) => this.shuffleChars(charRef[i].id )}/>
          )
      });
    }

    render() {

        return (
            <div className="container-fluid">
                <nav className={"row navbar navbar-light bgColor fixed-top"}>
                    <div className={"col-md-4"} id={"titleFont"}>Clicky Game</div>
                    <div className={"col-md-4 text-light text-center otherFonts"}>
                        <Message msg={this.state.msg} msgType={this.state.msgType} key={this.state.key}/>
                    </div>
                    <div className={"col-md-4 text-right otherFonts"}>
                        Score:<Score score={this.state.score} />|
                        Top Score:<TScore topScore={this.state.topScore} />
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-12 text-center pt-3" id={"logoDiv"}>
                        <img id={"charsLogo"} src="http://rickandmortydrinkinggame.com/assets/images/rm-logo.png"
                             alt="Rick and Morty Logo"/>
                        <div className={"text-light"}>Click on an image to earn points, but don't click on any more than
                            once!
                        </div>
                    </div>
                </div>
                <div id={"appBody"} className={"row"}>
                    <div className="col-2"> </div>
                    <div className="col-8">{this.state.myNewList}</div>
                    <div className="col-2"> </div>
                </div>
                <footer className={"row bgColor"} id={"footer"}>
                    <div className="col-6">Rick and Morty Clicky Game with
                        <img id={"reactLogo"} className={"ml-2"}
                             src="http://www.stickpng.com/assets/images/584830e8cef1014c0b5e4aa0.png" alt=""/>
                    </div>
                    <div className="col-6"> </div>
                </footer>
            </div>
        );
    }

};

export default App;
