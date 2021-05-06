import  {ChatEngine} from 'react-chat-engine'
import './App.css'
import LoginForm from './LoginForm'
import ChatFeed from './ChatFeed'

const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID="621e31b7-9f92-4697-9b51-afdedc6a816a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
             

        />
    )
}

export default App;