import React, {useState, useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
export default function BookList() {
    const {isLight, light, dark} = useContext(ThemeContext)
    const ui = isLight ? light : dark;
    console.log(ui)
    const [books, setBooks] = useState([
        {name: 'HTMLCss',  author: 'Jon Ducket'},
        {name: 'React', author: 'Dave Ceddia'},
        {name: 'JS', author: 'Mark'}
    ])
    return (
        <div style={{backgroundColor: ui.bg, color: ui.text}}>
            <ul>
                {books.map((item)=>(
                    <li key={item.name}>{`${item.name} is written by ${item.author}`}</li>
                )
                )}
            </ul>
        </div>
    )
}
