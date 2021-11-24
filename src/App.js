import "./App.css"
import { useState } from "react"
const App = () => {
  return(
    <div className = "wholepage">
      <div className = "Nav">
        {/* basket needs to add up the subtotal for every cat being bought... when clicked needs to pop up sidebar*/}
        <h1>Title</h1>
        <h2>Basket</h2>
      </div>
      <div className = "Header">Cat Image Header</div>
      <div className = "imageContainer">
        All CAT IMAGES
        </div> 
        {/* ImageContainer need to have a button for purchesing and adding it to basket */}
        <div className = "footer">
          Footer
        </div>

    </div>
  ) 

}




export default App