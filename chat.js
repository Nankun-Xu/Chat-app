const uuid = require('uuid').v4;

const id1 = uuid();
const id2 = uuid();

const messages = {
    [id1]: {
        id: id1,
        sender: "Admin",
        text: "Welcome! Let's chat!",
    },
    [id2]: {
        id: id2,
        sender: "KK",
        text: "Heyy my name is KK. Nice to meet you!",
    },
};

function addMessage(sender, text) {
    const id = uuid();
    messages[id] = {
      id,
      sender,
      text,
    };
}

const chat = {
    messages,
    addMessage,
};

module.exports = chat;