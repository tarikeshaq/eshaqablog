import React, { Component } from 'react'
import BodyContainer from '../common/BodyContainer';
import Type from './Type';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import VisiableOnStateContainer from './VisibleOnStateContainer';
import TicTacToe from './TicTacToe';
export default class LandingContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      difficulty: 2,
      isX: true
    };
  }


  onSetDifficulty(difficulty) {
    this.setState({
      ...this.state,
      difficulty: difficulty
    });
  }

  onSetX(isX) {
    this.setState({
      ...this.state,
      isX: isX
    });
  }

  onStartGame() {
    import('tic-tac-rust').then(({ State }) => {
      const game = State.new(this.state.difficulty);
      this.setState({
        ...this.state,
        game: game,
        gameStarted: true
      });
    });
  }

  render() {
    return (
      <BodyContainer style={{ width: "100%", height: "100%", position: "absolute", textAlign: "center" }}>
        <Type
          loop={true}
          loopDelay={2000}
          nextStringDelay={500}
          speed={70}
        />
        <div>
          <VisiableOnStateContainer state={!this.state.gameStarted}>
            <ButtonGroup aria-label="X or O">
              <Button onClick={() => this.onSetX(true)} variant="light">X</Button>
              <Button onClick={() => this.onSetX(false)} variant="light">O</Button>
            </ButtonGroup>
          </VisiableOnStateContainer>
        </div>
        <div>
          <VisiableOnStateContainer state={!this.state.gameStarted}>
            <ButtonGroup aria-label="Difficulty">
              <Button onClick={() => this.onSetDifficulty(0)} variant="light">Easy</Button>
              <Button onClick={() => this.onSetDifficulty(1)} variant="light">Medium</Button>
              <Button onClick={() => this.onSetDifficulty(2)} variant="light">Hard</Button>
            </ButtonGroup>
          </VisiableOnStateContainer>
        </div>

        <Button onClick={() => this.onStartGame()} variant="light">Start Game!</Button>
        <VisiableOnStateContainer state={this.state.gameStarted}>
          <TicTacToe game={this.state.game} difficulty={this.state.difficulty} isX={this.state.isX} />
        </VisiableOnStateContainer>
      </BodyContainer>
    )
  }
}
