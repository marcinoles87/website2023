import React from 'react'

function InfoPrice() {

    const code = Math.random()*100
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