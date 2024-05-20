import { useState } from 'react';

function SendMessageForm({ addMessage }) {

  const [ message, setMessage] = useState('');

  function onSubmit(e) {
    e.preventDefault(); 
    setMessage('');
    addMessage(message);
  }

  function onTyping(e) {
    setMessage(e.target.value);
  }

  return (
    <form action="#/add" onSubmit={onSubmit}>
      <textarea value={message} onChange={onTyping}/>
      <button type="submit" className='send'>Send</button>
    </form>
  );
}

export default SendMessageForm;