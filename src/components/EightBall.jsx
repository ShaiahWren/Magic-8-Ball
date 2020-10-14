import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class EightBall extends Component {
    state = {
        input: '',
        answer: ''
    };

    loadData = async () => {
        const response = await fetch(`https://8ball.delegator.com/magic/JSON/${this.state.input}`);
        const data = await response.json();
        console.log("The data is: ", data)
        return data;
        
      };

      _handleSubmit = async (event) => {
        event.preventDefault();
        const { input } = this.state;
        const answer = await this.loadData(input);
        this.setState({
            input: '',
            answer: answer.magic.answer
        });
    }

        _handleChange = (newInput) => {
            this.setState({
                input: newInput,
            });
        };
    

    render() {
        return (
            <>
            <h1>Magic 8 Ball</h1>
            <Route exact path="/">Magic 8 Ball
                <form onSubmit={this._handleSubmit}>
                    <label>
                        Enter question here
                        <input type="text" onChange={(event) => this._handleChange(event.target.value)}/>
                    </label>
                    <button type="submit">Get an answer</button>
                </form>
                <p>{this.state.answer}</p>
                    
            </Route>

            </>
        )
    }

}

export default EightBall;