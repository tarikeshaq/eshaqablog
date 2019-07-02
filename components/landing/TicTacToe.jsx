import React, { Component } from 'react';
import VisiableOnStateContainer from './VisibleOnStateContainer';
import { Button, ButtonGroup } from 'react-bootstrap';

export default class TicTacToe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            won: 0
        };
    }

    onHumanChoose(isX, index) {
        this.onChoose(isX, index);
        this.computerChoose(!isX);
    }

    onChoose(isX, index) {
        this.state.game.update_board(index, isX ? "x" : "o");
        let won = 0;
        if (this.state.game.is_win(isX ? "x" : "o")) {
            won = isX ? 1 : 2;
        }
        this.setState({
            ...this.state,
            won: won
        });
    }

    computerChoose(isX) {
        const nextMove = this.state.game.next_move(isX);
        this.onChoose(isX, nextMove);
    }

    getCurrentVal(index) {
        const value = this.state.game.get_val_by_index(index)
        return value == '0' ? '  ' : value;
    }

    render() {
        return (
            <div>
                <div>
                    <VisiableOnStateContainer state={this.state.won != 0}>
                        <h3>{this.state.won == 1 ? "X" : "O"} Won!</h3>
                    </VisiableOnStateContainer>
                </div>
                <div>
                    <div>
                        <ButtonGroup aria-label="Row 1">
                            <Button onClick={() => this.onHumanChoose(this.state.isX, 0)} variant="light">{this.getCurrentVal(0)}</Button>
                            <Button onClick={() => this.onHumanChoose(this.state.isX, 1)} variant="light">{this.getCurrentVal(1)}</Button>
                            <Button onClick={() => this.onHumanChoose(this.state.isX, 2)} variant="light">{this.getCurrentVal(2)}</Button>
                        </ButtonGroup>
                    </div>
                    <div>
                        <ButtonGroup aria-label="Row 1">
                            <Button onClick={() => this.onHumanChoose(this.state.isX, 3)} variant="light">{this.getCurrentVal(3)}</Button>
                            <Button onClick={() => this.onHumanChoose(this.state.isX, 4)} variant="light">{this.getCurrentVal(4)}</Button>
                            <Button onClick={() => this.onHumanChoose(this.state.isX, 5)} variant="light">{this.getCurrentVal(5)}</Button>
                        </ButtonGroup>
                    </div>
                    <div>
                        <ButtonGroup aria-label="Row 1">
                            <Button onClick={() => this.onHumanChoose(this.state.isX, 6)} variant="light">{this.getCurrentVal(6)}</Button>
                            <Button onClick={() => this.onHumanChoose(this.state.isX, 7)} variant="light">{this.getCurrentVal(7)}</Button>
                            <Button onClick={() => this.onHumanChoose(this.state.isX, 8)} variant="light">{this.getCurrentVal(8)}</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }
}
