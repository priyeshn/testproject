import React from 'react'

export default class task_images extends React.Component {
  render() {
    return (
        <div>
          <div className="imageContainer">
            <div className="Title">
                  Get Inspired
            </div>
          </div>
         <div className="easyClickContainer">
            
              <img src="/assets/home.jpg"   />
               
              <div className="easyClick">
                      <div className="easyClickText">
                        Tackle those home <br/>
                        projects & repairs you've<br/>
                        been putting off
                      </div>
                      <br/>
                      <div className="priceTag">

                            <p  >Avg. Project $46 - $117</p>
                      </div>
                      <button className="easyClickBtn">Book Handyman  </button>
                  
              </div>
         </div>

           
                  <div className="easyNav" >
                        <div className="mountingContainer">
                                <img className="mounting" src="/assets/wall-tv-2.jpg"   />
                                <div className="text">
                                    Mount a TV or mirror
                                  </div>
                                  <br/>
                                  <div className="priceTag">

                                        <p  >Avg. Project $48 - $99</p>
                                  </div>
                                  <button className="easyClickBtn">Book Mounting  </button>
                      </div>

                    <div className="easyClickContainerAll">
                            <img className="mounting" src="/assets/living-room.jpg"   />
                            <div className="text">
                                Put together furniture  
                              </div>
                              <br/>
                              <div className="priceTag">

                                    <p  >Avg. Project $47 - $119</p>
                              </div>
                              <button className="easyClickBtn">Book Assembly  </button>
                  </div>

                   <div className="easyClickContainerAll">
                            <img className="mounting" src="/assets/moving-3.jpg"   />
                            <div className="text">
                                Lift & shift heavy items  
                              </div>
                              <br/>
                              <div className="priceTag">

                                    <p  >Avg. Project $47 - $97</p>
                              </div>
                              <button className="easyClickBtn">Book Help Moving</button>
                  </div>

              </div>
             
      </div>
    )
  }
}
