import { useState, useEffect } from 'react';
import { fetchLogout, fetchMessages, fetchSendMessage, fetchChangeTheme, fetchUserData } from './services';
import SendMessageForm from './SendMessageForm';

function Chat({ setLoggedin }) {
    const [messageList, setMessageList] = useState('');
    const [userData, setUserData] = useState('');
    const [status, setStatus] = useState(true);

    function renderMessage() {
        fetchMessages()
            .then(msg => {
                setMessageList(msg);
            })
            .catch(err => {
                console.log(err.error);
            });
    }

    function renderUserData() {
        fetchUserData()
            .then(data => {
                setUserData(data);
            })
            .catch(err => {
                console.log(err.error);
            })
    }

    function addMessage(e) {
        fetchSendMessage(e)
        .then(() => {
            renderMessage();
            setStatus(!status)
        })
        .catch(err => {
            console.log(err.error);
        });
    
      }
    

    function changeTheme() {
        fetchChangeTheme()
            .then( () => {
                renderUserData();
                setStatus(!status)
            })
            .catch(err => {
                console.log(err.error);
            })
    }

    function logout() {
        fetchLogout()
            .then( () =>
                setLoggedin(false)
            )
            .catch(err => {
                console.log(err.error);
            });
    }

    useEffect(
        () => {
            renderMessage();
            renderUserData();
        },
        [status]
    );

    return (
        <div className={`chat ${userData.theme}`}>
            <div className='controls' id = {`controls${userData.theme}`}>
                <button className='theme' onClick={() => changeTheme()}>
                    Set {userData.theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
                <button className='logout' onClick={() => logout()}>Logout</button>
            </div>
            <ul>
                {Object.values(messageList).map(message => {
                    return (
                        <li key={message.id}>
                            <h3 className='user'>{message.sender}:</h3>
                            <p className='content'>{message.text}</p>
                        </li>
                    );
                })}
            </ul>
            <SendMessageForm addMessage={addMessage}/>
        </div>
    );
}

export default Chat;