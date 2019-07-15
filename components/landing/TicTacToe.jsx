import React, { Component } from 'react';
import VisiableOnStateContainer from './VisibleOnStateContainer';
import { Row, Image, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Square = styled.div`
    width: auto;
    height: auto;
    max-width: 25%;
    max-height: 25%;
    display: block;
`;

const Game = styled(Container)`
    width: 100%;
    height: 100%;
`;


function Won(props) {
    return (
        <div>
            <h3 style={{ color: "white" }}>{props.won == 1 ? "X Won!" : props.won == 2 ? "O Won!" : "It's a tie!"} </h3>
            <Button onClick={() => props.callback()}>Click here for a new game!</Button>
        </div>
    );
}

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
            won: 0
        };
    }

    onHumanChoose(isX, index) {
        if (!this.state.won) {
            const callback = () => { this.computerChoose(!isX); }
            this.onChoose(isX, index, callback);
        }
    }

    onChoose(isX, index, callback) {
        this.state.game.update_board(index, isX ? "x" : "o");
        let won = this.state.won;
        if (this.state.game.is_win(isX ? "x" : "o")) {
            won = isX ? 1 : 2;
        } else if (this.state.game.is_tie()) {
            won = 3;
        }
        this.setState({
            ...this.state,
            won: won
        }, () => {
            if (callback)
                callback();
        });
    }

    computerChoose(isX) {
        if (!this.state.won) {
            const nextMove = this.state.game.next_move(isX);
            this.onChoose(isX, nextMove);
        }
    }

    getCurrentVal(index) {
        const value = this.state.game.get_val_by_index(index)
        switch (value) {
            case '0': return (<Image src="/static/images/empty.png" style={{ maxHeight: "100%", maxWidth: "100%" }}></Image>);
            case 'x': return (<Image src="/static/images/x.png" style={{ maxHeight: "100%", maxWidth: "100%" }} ></ Image>);
            case 'o': return (<Image src="/static/images/o.png" style={{ maxHeight: "100%", maxWidth: "100%" }} ></Image>);
        }
    }

    render() {
        return (
            <Game>
                <Container>
                    <VisiableOnStateContainer state={this.state.won != 0}>
                        <StyledWon callback={() => this.props.onGameEnd()} won={this.state.won} />
                    </VisiableOnStateContainer>
                </Container>
                <Container>
                    <Container>
                        <Row>
                            <Square style={{ borderRight: "solid white", borderBottom: "solid white", borderWidth: "thick" }} onClick={() => this.onHumanChoose(this.state.isX, 0)}>{this.getCurrentVal(0)}</Square>
                            <Square style={{ borderRight: "solid white", borderBottom: "solid white", borderWidth: "thick" }} onClick={() => this.onHumanChoose(this.state.isX, 1)}>{this.getCurrentVal(1)}</Square>
                            <Square style={{ borderRight: "solid transparent", borderBottom: "solid white", borderWidth: "thick" }} onClick={() => this.onHumanChoose(this.state.isX, 2)}>{this.getCurrentVal(2)}</Square>
                        </Row>
                    </Container>
                    <Container>
                        <Row aria-label="Row 1">
                            <Square style={{ borderRight: "solid white", borderBottom: "solid white", borderWidth: "thick" }} onClick={() => this.onHumanChoose(this.state.isX, 3)}>{this.getCurrentVal(3)}</Square>
                            <Square style={{ borderRight: "solid white", borderBottom: "solid white", borderWidth: "thick" }} onClick={() => this.onHumanChoose(this.state.isX, 4)}>{this.getCurrentVal(4)}</Square>
                            <Square style={{ borderRight: "solid transparent", borderBottom: "solid white", borderWidth: "thick" }} onClick={() => this.onHumanChoose(this.state.isX, 5)}>{this.getCurrentVal(5)}</Square>
                        </Row>
                    </Container>
                    <Container>
                        <Row aria-label="Row 1">
                            <Square style={{ borderRight: "solid white", borderWidth: "thick" }} onClick={() => this.onHumanChoose(this.state.isX, 6)}>{this.getCurrentVal(6)}</Square>
                            <Square style={{ borderRight: "solid white", borderWidth: "thick" }} onClick={() => this.onHumanChoose(this.state.isX, 7)}>{this.getCurrentVal(7)}</Square>
                            <Square onClick={() => this.onHumanChoose(this.state.isX, 8)}>{this.getCurrentVal(8)}</Square>
                        </Row>
                    </Container>
                </Container>
            </Game>
        );
    }
}
