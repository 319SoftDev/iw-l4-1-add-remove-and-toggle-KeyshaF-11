// VARIABLES


const inbox = document.querySelector("#heading");
const date = document.querySelector("#subheading");
const replyMessage = document.querySelector("#reply-message");
const replyButton = document.querySelector("#reply-button");


const sendMessage = document.querySelector("#send-button");
const cancelMessage = document.querySelector("#cancel-button");

const openMessage = document.querySelector("#open-button");
const inboxMessage = document.querySelector("#inbox-message");  
const inboxMessageElement = document.querySelector("#inbox");
const markButton = document.querySelector("#mark-button");

const unopenMessage = document.querySelector("#close");



// FUNCTIONS
const changeFontColor = (e) => {
    e.target.classList.add("blue-text");

}

const openReplyMessage = () => {
    replyMessage.classList.remove("hidden");
}

const sendReply = () => {
    replyMessage.classList.add("hidden");
    alert("Your message was sent!");
}


const cancelReply = () => {
    replyMessage.classList.add("hidden");

}

const openMessageFunction = () => {
    inboxMessage.classList.remove("hidden");
    inboxMessageElement.classList.add("is-read");
    markButton.classList.remove("hidden");
}

const closeMessageFunction = () => {
    inboxMessage.classList.add("hidden");
    markButton.classList.add("hidden");
}   

// EVENT LISTENERS
inbox.addEventListener("click", changeFontColor);
date.addEventListener("click", changeFontColor);
replyButton.addEventListener("click", openReplyMessage);
sendMessage.addEventListener("click", sendReply);
cancelMessage.addEventListener("click", cancelReply);
openMessage.addEventListener("click", openMessageFunction);
unopenMessage.addEventListener("click", closeMessageFunction);