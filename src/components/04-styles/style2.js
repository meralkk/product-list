import React from 'react'

const Style2 = () => {

    const styleTitle = {
        fontSize: "2rem", 
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    }

  return (
    <div>


    <h2 style={styleTitle}>JSX Loops</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptates nulla quas veritatis, earum tempore eligendi quam, numquam quaerat maxime expedita exercitationem. Tempore, enim nihil. Libero alias autem aliquid velit!</p>

    <h2 style={{...styleTitle, color:"blue"}}>Component Props</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptates nulla quas veritatis, earum tempore eligendi quam, numquam quaerat maxime expedita exercitationem. Tempore, enim nihil. Libero alias autem aliquid velit!</p>

    </div>
  )
}

export default Style2