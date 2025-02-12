import { useState, createElement } from "react";


 const App = () => {
    const [count, setCount] = useState(0)
    const heading = createElement("h1",{}, "Parcel-React-App is now Running ⚡️")
    const paragraph = createElement('h3', {style:{fontWeight: 'bold'}}, `Counter ${count}`)
    const increaseCountButton  = createElement('button', {onClick: () => setCount(prev => prev + 1), style: increaseCountButtonStyles}, 'Increase count')
    const parent = createElement('div',{style:{textAlign: 'center'}}, heading, paragraph, increaseCountButton);
    return parent;
}

export default App

const increaseCountButtonStyles = {
    padding: '10px',
    background: 'black',
    color: 'white',
    borderRadius: '20px',
    cursor: 'pointer'
} 