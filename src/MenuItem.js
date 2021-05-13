import React from 'react'

const MenuItem = (props) => {
    return (
      <>
            <div className="menu-items mt-5 container-fluid">
           <div className="row">
               <div className="col-11 mx-auto">
                  <div className="row my-5">
                    
                    {/* here goes react codes */}
                    {
                      props.item.map((el)=>{
                          const {id, image , price , description , name} = el;
                          return (
                            <div className="item1 col-12 col-md-6 mb-5 col-lg-6 col-xl-4" key={id}>
                            <div className="row Item-inside">
                              <div className="col-12 col-md-12 col-lg-4 img-div">
                                <img src={image} className="img-fluid" alt="foodImg"/>
                              </div>
                              <div className="col-12 col-md-12 col-lg-8">
                                 <div className="main-title pb-1 pt-3">
                                   <h1>{name}</h1>
                                   <p>{description}</p>
                                 </div>
                                 <div className="menu-price-book">
                                   <div className="price-book-divide">
                                     <h2>Price : {price}</h2>
                                       <a href="#">
                                         <button className= "btn btn-primary">Order Now</button>
                                         </a>
                                   </div>
                                    <div>
                                        <p>Price may vary.</p>           
                                    </div>
                                 </div>
                              </div>
                            </div>
                        </div>
                          )  
                      })
                    }
                    

                  </div>
               </div>
           </div>
      </div>
      </>
    )
}

export default MenuItem
