import React, {Component} from 'react';
import characters from '../../characters';
import Character from './Character'

class AllCharacters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            character: {},
            input: "",
            desiredCharacters: [],
            showDetail: false
        }
    }

    handleInput = (input) => {
        this.setState({
            showDetail: false,
            input: input,
            desiredCharacters: characters.filter(character => character.name.includes(this.state.input))
        })
    }

    handleClick = (character) => {
        this.setState({
            character,
            showDetail: true
        })
    }

    render() {

        return (
            <div>
                <div>
                    <h1>Characters in Game of Thrones</h1>
                    <input value={this.state.input} 
                            onChange={(e) => this.handleInput(e.target.value)}>
                    </input>
                </div>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div>
                        {this.state.desiredCharacters ? (this.state.desiredCharacters.map((character, i) => 
                            <p onClick={() => this.handleClick(character)} key={i}>{character.name}</p>)) : null
                        }
                    </div>
                    {this.state.showDetail ? <Character data={this.state.character}/> : null}
                </div>
            </div>

        )
    }
}

export default AllCharacters;