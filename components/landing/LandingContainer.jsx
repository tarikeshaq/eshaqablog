import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import BodyContainer from '../common/BodyContainer';
import Type from './Type';
import VisiableOnStateContainer from './VisibleOnStateContainer';
import TicTacToe from './TicTacToe';

const GameArea = styled.div`
text-align: center;
margin: auto;
left: 60%;
`;

export default class LandingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      difficulty: 2,
      isX: true,
    };
  }


  onSetDifficulty(difficulty) {
    const prevState = this.state;
    this.setState({
      ...prevState,
      difficulty,
    });
  }

  onSetX(isX) {
    const prevState = this.state;
    this.setState({
      ...prevState,
      isX,
    });
  }

  onStartGame() {
    // eslint-disable-next-line import/no-unresolved
    import('tic-tac-rust').then(({ State }) => {
      const { difficulty } = this.state;
      const prevState = this.state;
      const game = State.new(difficulty);
      this.setState({
        ...prevState,
        game,
        gameStarted: true,
      });
    });
  }

  gameEnd() {
    const prevState = this.state;
    this.setState({
      ...prevState,
      gameStarted: false,
    });
  }

  render() {
    const {
      gameStarted, game, difficulty, isX,
    } = this.state;
    return (
      <BodyContainer style={{ width: '100%', height: '100%', textAlign: 'center' }}>
        <GameArea>
          <Container>
            <VisiableOnStateContainer state={!gameStarted}>
              <ButtonGroup aria-label="X or O">
                <Button onClick={() => this.onSetX(true)} variant="light">X</Button>
                <Button onClick={() => this.onSetX(false)} variant="light">O</Button>
              </ButtonGroup>
            </VisiableOnStateContainer>
          </Container>
          <Container>
            <VisiableOnStateContainer state={!gameStarted}>
              <ButtonGroup aria-label="Difficulty">
                <Button onClick={() => this.onSetDifficulty(0)} variant="light">Easy</Button>
                <Button onClick={() => this.onSetDifficulty(1)} variant="light">Medium</Button>
                <Button onClick={() => this.onSetDifficulty(2)} variant="light">Hard</Button>
              </ButtonGroup>
            </VisiableOnStateContainer>
          </Container>
          <Container>
            <VisiableOnStateContainer state={!gameStarted}>
              <Button onClick={() => this.onStartGame()} variant="light">Start Game!</Button>
            </VisiableOnStateContainer>
          </Container>
          <Container>
            <VisiableOnStateContainer state={gameStarted}>
              <TicTacToe
                onGameEnd={() => { this.gameEnd(); }}
                game={game}
                difficulty={difficulty}
                isX={isX}
              />
            </VisiableOnStateContainer>
          </Container>
        </GameArea>
        <Type
          loop
          loopDelay={2000}
          nextStringDelay={500}
          speed={70}
        />
      </BodyContainer>
    );
  }
}
