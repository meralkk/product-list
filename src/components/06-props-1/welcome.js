import React from 'react'
import "./welcome.scss"

const Welcome = (props) => {
  return (
    <div className='welcome'>

        {/* ya da sürekli aşağıda props. bişeyler yazmak yerine */}
        {/* aşağıdaki gibi props'u constta belirtebilirsin: */}
       
        {/* const { firstName, lastName} = props; */}
      
        {/* buna destracturing deniyor */}
        {/* bu const firstName = props.firstName'in kısaltılmışıdır */}

        {/* yada diğer seçenek olark props yazmak yerine en başa */}
        {/* şu şekilde yazılabilir : */}
        {/* const Welcome = ({ firstName, lastName}) => { */}

   
   
    <h2>Welcome {props.firstName} {props.lastName}</h2>

    </div>
  )
}

export default Welcome