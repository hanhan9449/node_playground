import { useRef, useState } from "react";
import { Header } from "./Header";

export function Layout(props) {
    const [color] = useState(randomColor)
    return <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
    backgroundColor: color

    }}>
        <Header/>
        {props.children}
    </div>
}
function randomColor() {
    function renderByte() {
        return (~~(Math.random() * 256)).toString(16)
    }
    let res = ['#']
    for (let i = 0; i < 3; ++i) {
        res.push(renderByte())
    }
    return res.join('')
}