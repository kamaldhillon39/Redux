import React from 'react'

export const User = () => {
  return (
    <div>
    <h2>User component</h2>
    </div>
  )
}
//props with User2 and User3

export const User2 =(props)=>{
    const{data}=props
    return(
        <div>
            <h2>Introducing FIRST props in react</h2>
            <h3>{data.name}</h3>
        </div>
    )
}

export const User3 =(props)=>{
    const{AGEdata}=props
    return(
        <div>
            <h2>Introducing SECOND props in react</h2>
            <h3>{AGEdata.age}</h3>
        </div>
    )
}
