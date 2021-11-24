import "./App.css"
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [cats, setCats] = useState("")
  const [basket, setBasket] = useState ([])
  const [error, setError] = useState(
      { 
        error: false, 
        message: ""
      }
    )
//API REQUEST
const getCats = async () => {
  try{
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=9&page=9&order=Desc")
    if(response.status !== 200){
      throw new Error("the error is...its messed up")
    }
    const data = await response.json()
    

    let catNames = ['Nibble','Largepaw','Kamyle','Bastet','Smiley','Tink','Foster','Mimi','Striper','Dream','Nina','Azurys','PearlTooth','Nanook','Elephant','Sabrina','Poptart','Cappu','Sleepy','LilBit']
    let arr = []
    for (let i = 0; i < 8; i++) {
      arr.push({cat: data[i], url: data[i].url , name: catNames[i], price: Math.round(((Math.random() * 200) + 150)), quantity: 1})
    }
    setCats(arr)


  }catch(e){
    setError({ error: true, message: e.message})
  }
}
//USE EFFECT CALLS ASYNC FUNCTION (Handler)
useEffect(() => {
  getCats()
},[])

// const addToBasket = () => {
// let basket = [...basket]

// } 




//IF CHECKS FOR ERROR  HANDLING
  if(!cats){
    return <p>loading...</p>
  }
  
    if(error.error){
      return <h1>{error.message}</h1>
    }

  return(
    <div className = "wholepage">

      <div className = "titleBar">
        {/* basket needs to add up the subtotal for every cat being bought... when clicked needs to pop up sidebar*/}
        <h1>CATS_FOR_LIFE.com</h1>
        <h2>Basket</h2>
       
        <button onClick={getCats}>Bring Cats</button> 
      </div>

      <div className = "Header">Cat Image Header</div>

      <div className = "imageContainer">
        {/* All CAT IMAGES */}
        {cats.map((item, index) => {
        return( 
        <>
       <img src={item.url} alt="Cat"></img>
       <h2>Name:{item.name} Price: £{item.price}</h2>
       </>
       )
      })}
        </div> 
        {/* ImageContainer need to have a button for purchesing and adding it to basket */}

  
        <div className = "footer">
          Footer
        </div>

    </div>
  ) 

}

export default App