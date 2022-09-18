
import React, {useState} from 'react';
import './App.css';
import Message from './Message';
import './fonts/PlusJakartaSans-VariableFont_wght.ttf';


function App() {


  const data =[
    {
    id: 1,
    avatar: "/images/avatar-mark-webber.webp",
    name: "Mark Webber",
    title: <React.Fragment>reacted to your recent post <a href='index.html'>My first tournament today!</a></React.Fragment>,
    date: "1m ago",
    message:"",
    unread: true
    },
    {
    id: 2,
    avatar: "./images/avatar-angela-gray.webp",
    name: "Angela Gray",
    title:<React.Fragment>followed you</React.Fragment>,
    date: "5m ago",
    message:"",
    unread: true
    },
    {
    id: 3,
    avatar: "./images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    title:<React.Fragment>has joined your group <a href='index.html'>Chess Club</a></React.Fragment>,
    date: "1 day ago",
    message:"",
    unread: true
    },
    {
    id: 4,
    avatar: "./images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
     title:<React.Fragment>sent you a private message</React.Fragment>,
     date: "5 days ago",
     message:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
     unread: false
    },
    {
      id: 5,
      avatar: "./images/avatar-kimberly-smith.webp",
      name: "Kimberly Smith",
       title:<React.Fragment>commented on your picture <img className='picture' src='./images/image-chess.webp' alt='chess'></img> </React.Fragment>,
       date: "1 week ago",
       message:"",
       unread: false
      },
      {
        id: 6,
        avatar: "./images/avatar-nathan-peterson.webp",
        name: "Nathan Peterson",
        title: <React.Fragment>reacted to your recent post<a href='index.html'> 5 end-game strategies to increase your win rate</a></React.Fragment>,
        date: "2 weeks ago",
        message:"",
        unread: false
        },
        {
          id: 7,
          avatar: "./images/avatar-anna-kim.webp",
          name: "Anna Kim",
           title:<React.Fragment>left the group <a href='index.html'>Chess Club</a></React.Fragment>,
           date:"2 weeks ago",
           message:"",
           unread: false
          }];

         
        
    
        const [isread, setRead] = useState(data); 

        function updateIsRead(){ 
          
          // const newData = isread.map(obj => {
          //     return {...obj, unread: 'xyz'};
          //   }
          // );
          //console.log(newData)
          setRead(
            isread.map(
                obj =>{ return {...obj, unread:false}}
          ));
          
          
        
        };

        function count(){
          let itemCount = 0;
          for (let x in isread) {
          if (isread[x]["unread"]===true){
            itemCount ++
          }
        } return (itemCount)
        
        };
        
  

    function createMessage(messageItem){
      return (<Message 
      key={messageItem.id}
      id={messageItem.id}
      avatar={messageItem.avatar}
      name={messageItem.name}
      title={messageItem.title}
      date={messageItem.date}
      message={messageItem.message}
      unread= {messageItem.unread}
      />)
    };

    
  return (
    <div className="App">
     <div className="wrapper">
      <div className="wrapper-header"><div className="wrapper-header-left">Notifications <span className="num-items"> {count()}</span></div><div className="wrapper-header-right"><button onClick={()=>updateIsRead()}>Mark all as read</button></div></div>
       {isread.map(createMessage)}
     </div>
    </div>
  );
}

export default App;
