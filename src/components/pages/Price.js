import React from 'react'
import './price.css'

function Price() {
  return (
    <div className='price-container'>
      


        <div className='price-person'>
          <h1>Price per person</h1>
            <ul className='price-list'>Per Persone

                <li className='price-list-item'>individual site</li>
                <li className='price-list-item'>individual site</li>
                <li className='price-list-item'>individual site</li>
                <li className='price-list-item'>individual site</li>
                <span className='price-btn'>100E</span>
           </ul>
          
        </div>

        <div className='price-group'>
          <h1>Price group</h1>
          </div>

          <div className='price-individual'>
            <h1>Price individual trip</h1>
          </div>
      </div>
  )
}

export default Price