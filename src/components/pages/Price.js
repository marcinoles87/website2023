import React from 'react'
import './price.css'
import InfoPrice from './InfoPrice.js'

function Price({handlebtnClick , btnClick}) {

  const handleOnClick = () => {
    
    handlebtnClick(
      !btnClick
    )
  }

  
  return (

    <>
    <div className='price-container'>
      
     

        <div className='price-person'>
          <h1>Price per person</h1>
            <ul className='price-list'>

                <li className='price-list-item'>individual site</li>
                <li className='price-list-item'>personal driver</li>
                <li className='price-list-item'>best price</li>
                <li className='price-list-item'>a lot of fun</li>
                <button className='price-btn' onClick={handleOnClick}>100E</button>
           </ul>
          
        </div>

        <div className='price-group'>
          <h1>Price group</h1>
          <ul className='price-list'>

                <li className='price-list-item'>individual site</li>
                <li className='price-list-item'>personal driver</li>
                <li className='price-list-item'>best price</li>
                <li className='price-list-item'>a lot of fun</li>
                <button className='price-btn' onClick={handleOnClick}>100E</button>
           </ul>
          </div>

          <div className='price-individual'>
            <h1>Price individual trip</h1>
            <ul className='price-list'>

                <li className='price-list-item'>individual site</li>
                <li className='price-list-item'>personal driver</li>
                <li className='price-list-item'>best price</li>
                <li className='price-list-item'>a lot of fun</li>
                <button className='price-btn' onClick={handleOnClick}>100E</button>
           </ul>
          </div>
            

            
      </div> 
      
      {btnClick ? <div className='price-card-info'><InfoPrice></InfoPrice></div> : ''}
       </>
  )

}

export default Price