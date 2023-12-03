import './FruitList.css'
// eslint-disable-next-line react/prop-types
function FruitList ({emoji, name, count, setCount}) {

    return (
        <>
            <section className = 'container'>
                <p>{emoji}</p>
                <p>{name}</p>
                <button type= 'button' disabled={count ===0 }
                        onClick= {() => setCount ( count - 1)}> - </button>
                <p>{count}</p>
                <button type= 'button' onClick = {() =>setCount (count + 1)}> + </button>
            </section>
        </>
    )
}

export default FruitList;