import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import VisiableOnStateContainer from './VisibleOnStateContainer';

const Square = styled.th`
    width: 100px;
    height: 100px;
`;

const Table = styled.table`
    width: 250px
    text-align: center;
    margin: auto;
`;

const Game = styled(Container)`
    text-align: center;
    width: 100%;
    height: 100%;
`;


function Won(props) {
  const { won, callback } = props;
  let wonText = '';
  if (won === 1) {
    wonText = 'X Won!';
  } else if (won === 2) {
    wonText = 'O Won!';
  } else {
    wonText = "It's a tie!";
  }
  return (
    <div>
      <h3 style={{ color: 'white' }}>
        {wonText}
        {' '}
      </h3>
      <Button onClick={() => callback()}>New Game</Button>
    </div>
  );
}

Won.defaultProps = {
  won: 0,
  callback: () => { },
};

Won.propTypes = {
  won: PropTypes.number,
  callback: PropTypes.func,
};

const StyledWon = styled(Won)`
    color: white;
`;

export default class TicTacToe extends Component {
  constructor(props) {
    super(props);
    if (!props.isX) {
      const index = props.game.next_move();
      props.game.update_board(index, 'x');
    }
    this.state = {
      ...props,
      won: 0,
    };
  }

  onHumanChoose(isX, index) {
    const { won } = this.state;
    if (!won) {
      const callback = () => { this.computerChoose(!isX); };
      this.onChoose(isX, index, callback);
    }
  }

  onChoose(isX, index, callback) {
    const { game } = this.state;
    let { won } = this.state;
    const prevState = this.state;
    game.update_board(index, isX ? 'x' : 'o');
    if (game.is_win(isX ? 'x' : 'o')) {
      won = isX ? 1 : 2;
    } else if (game.is_tie()) {
      won = 3;
    }
    this.setState({
      ...prevState,
      won,
    }, () => {
      if (callback) callback();
    });
  }


  getCurrentVal(index) {
    const { game } = this.state;
    const value = game.get_val_by_index(index);
    switch (value) {
      case '0': return (<Image src="/static/images/empty.png" style={{ maxHeight: '100%', maxWidth: '100%' }} />);
      case 'x': return (<Image src="/static/images/x.png" style={{ maxHeight: '100%', maxWidth: '100%' }} />);
      case 'o': return (<Image src="/static/images/o.png" style={{ maxHeight: '100%', maxWidth: '100%' }} />);
      default: return null;
    }
  }

  computerChoose(isX) {
    const { won, game } = this.state;
    if (!won) {
      const nextMove = game.next_move(isX);
      this.onChoose(isX, nextMove);
    }
  }

  render() {
    const { won, isX } = this.state;
    const { onGameEnd } = this.props;
    return (
      <Game>
        <VisiableOnStateContainer state={won !== 0}>
          <StyledWon callback={() => onGameEnd()} won={won} />
        </VisiableOnStateContainer>
        <VisiableOnStateContainer state={won === 0}>
          <Table>
            <tbody>
              <tr>
                <Square style={{ borderRight: 'solid white', borderBottom: 'solid white', borderWidth: 'thick' }} onClick={() => this.onHumanChoose(isX, 0)}>{this.getCurrentVal(0)}</Square>
                <Square style={{ borderRight: 'solid white', borderBottom: 'solid white', borderWidth: 'thick' }} onClick={() => this.onHumanChoose(isX, 1)}>{this.getCurrentVal(1)}</Square>
                <Square style={{ borderRight: 'solid transparent', borderBottom: 'solid white', borderWidth: 'thick' }} onClick={() => this.onHumanChoose(isX, 2)}>{this.getCurrentVal(2)}</Square>
              </tr>
              <tr>
                <Square style={{ borderRight: 'solid white', borderBottom: 'solid white', borderWidth: 'thick' }} onClick={() => this.onHumanChoose(isX, 3)}>{this.getCurrentVal(3)}</Square>
                <Square style={{ borderRight: 'solid white', borderBottom: 'solid white', borderWidth: 'thick' }} onClick={() => this.onHumanChoose(isX, 4)}>{this.getCurrentVal(4)}</Square>
                <Square style={{ borderRight: 'solid transparent', borderBottom: 'solid white', borderWidth: 'thick' }} onClick={() => this.onHumanChoose(isX, 5)}>{this.getCurrentVal(5)}</Square>
              </tr>
              <tr>
                <Square style={{ borderRight: 'solid white', borderWidth: 'thick' }} onClick={() => this.onHumanChoose(isX, 6)}>{this.getCurrentVal(6)}</Square>
                <Square style={{ borderRight: 'solid white', borderWidth: 'thick' }} onClick={() => this.onHumanChoose(isX, 7)}>{this.getCurrentVal(7)}</Square>
                <Square onClick={() => this.onHumanChoose(isX, 8)}>{this.getCurrentVal(8)}</Square>
              </tr>
            </tbody>
          </Table>
        </VisiableOnStateContainer>

      </Game>
    );
  }
}

TicTacToe.propTypes = {
  isX: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  game: PropTypes.object,
  onGameEnd: PropTypes.func,
};

TicTacToe.defaultProps = {
  isX: true,
  game: {},
  onGameEnd: () => { },
};
