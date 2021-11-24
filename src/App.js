import "./App.css"
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [cats, setCats] = useState("")
  const [error, setError] = useState(
      { 
        error: false, 
        message: ""
      }
    )
//API REQUEST
const handler = async () => {
  try{
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=9&page=9&order=Desc")
    if(response.status !== 200){
      throw new Error("the error is...its messed up")
    }
    const data = await response.json()
    setCats(data)
  }catch(e){
    setError({ error: true, message: e.message})
  }
}
//USE EFFECT CALLS ASYNC FUNCTION (Handler)
useEffect(() => {
  handler()
},[])

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
        <p>Cats: {cats[0].url}</p> 
        <button onClick={handler}>Bring Cats</button> 
      </div>

      <div className = "Header">Cat Image Header</div>

      <div className = "imageContainer">
        All CAT IMAGES
        {cats.map((item, index) => {
        return( 
        <>
       <h2 key={index}>{item.url}</h2>
       <img src={item.url} alt="Cat"></img>
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