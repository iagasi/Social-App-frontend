import React, { useRef, useState } from 'react'
import Topbar from '../../components/Topbar'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import "./Messenger.css"
import Message from './Message';
import { AuthStateValue, FriendsStateValue } from '../../context/AuthContext';
import { useEffect } from 'react';
import { $getConversations } from '../../http/conversations';
import MessengerSidebar from './MessengerSidebar';
import { $createMessage, $getMessages } from '../../http/messages';
function Messenger() {
    const { friends } = FriendsStateValue()

    const [messages, setMessages] = useState()
    const [conversations, setConversations] = useState(null)
    const [currentConversation, setCurrentConversation] = useState()
    const [chatWith,setChatWith] =useState()
    const [currentChat, setCurrentChat] = useState()
    const { user } = AuthStateValue()
    const messageRef = useRef()



    const sendMessageHandler =async () => {
     const message=messageRef.current.value
     const data={
         conversationId:currentConversation[0]._id,
         sender:user._id,
         text:message
     }
     const created=await $createMessage(data)
     setCurrentChat([...currentChat,data])
    }


    useEffect(async () => {
        if (currentConversation) {
            const chat = await $getMessages(currentConversation[0]._id)
            setCurrentChat(chat)
        }
    }, [currentConversation])

console.log(currentConversation);
    useEffect(async () => {
        if (user?._id) {
            const convers = await $getConversations(user._id)
            convers && setConversations(convers)
        }
    }, [user])

    return (
        <>

            <Topbar />
            <header className="messenger__header">
                <section className='messenger__header-left'>

                    <img className='messenger__header-img' src='https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=20&m=846183008&s=170667a&w=0&h=WIxZSP7aJ9jSvW3xqzDsWSI5g666kVBBgCNkABzYs68=' />
                    <div className='messenger__header-userData'>
                        <div>
                            <h4 className='messenger__header-userName'>{chatWith?.userName}</h4>
                            <small>last in connected</small>

                        </div>
                    </div>
                </section>
                <section className='messenger__header-right'>
                    <LocalPhoneIcon />
                    <VideocamIcon />
                    <AddLocationAltIcon />
                </section>
            </header>
            <main className='messenger'>
                <section className='messenger__left'>
                    < MessengerSidebar left data={conversations} setCurrentConversation={(e) => setCurrentConversation(e)} setChatWith={(e)=>setChatWith(e)} />
                </section>


                <section className='messenger__main'>

                    <div className='messenger__chat'>
                        {currentChat && currentChat.map((message) => <Message key={message._id} message={message} />)}
                    </div>
                    <div className='messenger__bottom'>
                        <input className='messenger__input' ref={messageRef}></input>
                        <button className='messenger__button' onClick={sendMessageHandler}>Send</button>
                    </div>
                </section>


                <MessengerSidebar data={friends} />
            </main>



        </>

    )
}

export default Messenger