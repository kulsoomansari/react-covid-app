import React, { Component, createContext } from 'react'
export const ThemeContext = createContext();
export default class ThemeContextProvider extends Component {
    state={
        isLight: true,
        light:{text: 'black', bg: 'white'},
        dark:{text: 'white', bg: 'dark'}
    }
    render() {
        console.log(this.props.children)
        return (
            <div>
                <ThemeContext.Provider value={{...this.state}}>
                    {this.props.children}
                </ThemeContext.Provider>
            </div>
        )
    }
}
