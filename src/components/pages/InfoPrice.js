import React from 'react'
import './infoprice.css' 

function InfoPrice() {

    const code = Math.floor(Math.random()*1000)
  return (
    <div className='infor-price-container'>InfoPrice
        <h1> Super time spend with friend and family</h1>
        <h2> Only today - special price for You</h2>
        <p> All trip - 20%</p>
        <p>In message write code : {code}</p>
    </div>
  )
}

export default InfoPrice