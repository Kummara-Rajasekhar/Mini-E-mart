import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'

const MobilePage = () => {
const [selectedProduct, setSelectedProduct] = useState([])

const companyHandler=(manfo)=>{

    if(selectedProduct.includes(manfo)){
        setSelectedProduct(selectedProduct.filter(item=> item!==manfo))
    }else{
        setSelectedProduct([...selectedProduct,manfo])
    }
};
const filteredProduct=selectedProduct.length==0? mobileData:mobileData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
    <Navbar />
    <div className="fullpage">
    <div className="pro-selected">
        {
            mobileData.map((phone)=>{
                return(
                    <div className='pro-input'>
                        <label >
                            <input type="checkbox"  checked={selectedProduct.includes(phone.company)} onChange={()=>companyHandler(phone.company)}/>
                            {phone.company}
                        </label>
                    </div>
                )
            })
        }
    </div>
   
    <div className='pageSection'>
        {
            filteredProduct.map((item)=>{
                return (
                    
                    <div>
                        <Link to={`/mobiles/${item.id}`}>
                        <div className="pageImg">
                            <img src={item.image} alt="" />
                        </div>
                        </Link>
                        
                        <div className="proModel">
                            {item.company},{item.model}
                        </div>
                    </div>
                )
            })
        }

    </div>
    </div>
    </>
  )
}

export default MobilePage