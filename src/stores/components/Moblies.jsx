import React from 'react'

import {mobileData} from '../data/mobiles'

const Moblies = () => {
    const firstFiveImages=mobileData.slice(0,5);
  return (
    <>
    <h2>Moblies</h2>
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imageBox'>
                        <img className='proImage' src={item.image} alt="" />
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Moblies