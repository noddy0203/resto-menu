import React, {useState } from 'react'
//import {NavLink} from "react-router-dom"
import "./App.css"
import Menu from "./component/Menu"
import MenuItem from "./MenuItem"
import MenuList from "./MenuList"

// import Number from "./component/Number"
const App = () => {

// this new set method giv us unique value of objects if value are different as our catagory 
//it will show us in from of obj , to cnvrt in array put [] and ... to remove xtra array
  const allCategories = [...new Set(Menu.map((currElem)=> currElem.category)), "all"]

  const [item , setItem] = useState(Menu)

//another useState to fetch dynamically categories from the API

  const [catitems , setCatItems] = useState(allCategories)

const differItems = (categoryItem)=>{
if(categoryItem === "all"){
     setItem(Menu);
     return;
}

      const filteredItems = Menu.filter((currElem)=>{
         return currElem.category === categoryItem
      })
      setItem(filteredItems)
}
  return (
   <>
      <h1 className="mt-5 text-center main-heading">Order...! What You Are Craving For...</h1>
      <hr/> 
             {/* list goes here */}

            <MenuList  differItems={ differItems} catitems={catitems} />

            {/* main section */}
             <MenuItem item={item} />

             {/* < Number /> */}
   </>
  )
}

export default App
