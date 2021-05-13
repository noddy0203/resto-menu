import React from 'react'

const MenuList = ({ differItems,catitems}) => {
    return (
      <>
       <div className="menu-tabs container">
          <div className="menu-tab d-flex justify-content-around">
              {/* here we aere fetching catagories and items dynamically from API */}
              {
                catitems.map((currElem , index)=>{
                    return  <button type="button" key={index} onClick={()=>differItems(currElem)} class="btn btn-warning">{currElem}</button>
            
                })

              }
              
              {/* this is begginers way to code  */}

            {/* <button type="button" onClick={()=>differItems("main-course")} class="btn btn-primary">Main-Course</button>
            <button type="button" onClick={()=>differItems("rolls")} class="btn btn-secondary">Rolls</button>
            <button type="button" onClick={()=>differItems("biryani")} class="btn btn-success">Biryani</button>
            <button type="button" onClick={()=>differItems("momos")} class="btn btn-danger">Momos</button>
            <button type="button" onClick={()=>differItems("chinese")} class="btn btn-warning">Chinese</button>
            <button type="button" onClick={()=>differItems("deserts")} class="btn btn-info">Deserts</button>  
            <button type="button" onClick={()=>setItem(Menu)} class="btn btn-primary">All</button> */}
        
        
          </div>         
       </div>
      </>
    )
}

export default MenuList
