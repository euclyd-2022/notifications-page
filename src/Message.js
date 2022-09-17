import React from 'react'

const Message = (props) => {



  return (
    <div id={props.id} className={`notifcation-wrapper${props.unread ? ' unread':''}`}>
        <div className="avatar-wrapper">
          <img className="avatar" alt={props.name} src={props.avatar} />
        </div>
        <div className='name-wrapper'>
        <p><span className="name">{props.name} </span>{props.title}{props.unread && <React.Fragment><span className="dot">●</span></React.Fragment>}</p>
        <p><span className="date">{props.date}</span></p> 
        {props.message ? <p className='message' >{props.message}</p>:''}
        </div>
        </div>
  )
}

export default Message
