window.onload=function(){
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const image = document.getElementById('fuimage');
    const msg = document.getElementById('form');
    form.addEventListener('submit', logSubmit);
    input.addEventListener('invalid', invalidMessage);
    image.addEventListener('click', flashMessage);
    addMessage(getRandomMessage());
}

function logSubmit(event) {
    const successMessages = [`wow ur mean :'(`,"ur ip has been logged and the proper authorities notified", "yeah... i deserve that one", "woahhh, look at this dudee, he/she knows how to use a keyboard","ur my 13th reason"];
    const range = successMessages.length;
    msg.innerText = successMessages[Math.floor(Math.random() * range)];
    form.reset();
    event.preventDefault();
}

function invalidMessage(event){
    msg.textContent = "you forgot to write something dumbass";
    event.preventDefault();
}

function deleteMessage(){
    const messagecontainer = document.getElementById("maintext");
    messagecontainer.innerHTML = '';
}

function addMessage(message){
    deleteMessage();
    const words = message.split(' ');
    const currentdiv = document.getElementById("maintext");
    for(i in words){
        const newdiv = document.createElement("div");
        newdiv.classList.add("glitchitem");
        newdiv.innerText = `${words[i]}\xa0`;
        newdiv.setAttribute("title", words[i]);
        currentdiv.appendChild(newdiv);
    }
}

function flashMessage(count){
    // track number of times this runs
    deleteMessage();
    addMessage("fuck cindy");
    setTimeout(() => { 
        deleteMessage();
        addMessage(getRandomMessage());
    }, 1000);
    
}
 
function getRandomMessage(){
    // get messages from database
    const messages = ["shes so dumb","last time i sat in her car, she farted in my face", "one word: bitch"]
    const range = messages.length;
    return messages[Math.floor(Math.random() * range)];
}

function getNumComplaints(){
    return 54;
}

function getNumClicks(){
    return 136;
}