import  { useState, useEffect } from 'react'

export default function Summa() {
    const[add,setAdd]=useState(0);
      const increment = () => {
    setAdd(add + 1);
  };
    const [eff, setEff] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setEff(data));
    },[])
    return (
        <>
            {eff.map(item=>(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                <p>{item.price} $</p>
                <img src={item.image} alt={item.title} width={100} />
                </div>
            ))}
            <h1>Count :{add}</h1><button onClick={increment}><h1>buble</h1></button>
        </>
    )
}
