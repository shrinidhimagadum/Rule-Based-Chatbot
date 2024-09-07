function toggleChat(){
    let chatContainer = document.getElementById("test");

    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex';
    } else {
        chatContainer.style.display = 'none';
    }
}

function refreshChat() {
    const chatLog = document.getElementById('chat-log');
    chatLog.innerHTML = '';

    startConversation();
}

function closeChat() {
    let chatWindow = document.getElementById("test");
    chatWindow.style.display = 'none';
}



var data = {
    chatinit: {
        title: ["Hello <span class='emoji'> &#128075;</span>", "How can I help you?"],
        options: ["1: Movies <span class='emoji'> &#128250;</span>", "2: Shopping <span class='emoji'> &#128090;</span>", "3: Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title: ["Categories:"],
        options: ['1: Hollywood', '2: Bollywood']
    },
    bollywood: {
        title: ["Here are some genre-based bollywood movies"],
        options: ["1: Comedy", "2: Horror","3: Romance", "4: Action"]
    },
    comedy:{
        title: ["About comedy movies:"],
        text: ["Comedy movies are fun to watch"]
    },
    horror:{
        title: ["About horror movies"],
        text: ["Horror movies are fun to watch"]
    },
    sciFi:{
        title: ["About Sci-Fi movies"],
        text: ["Sci-Fi movies are fun to watch"]
    },
    romance:{
        title: ["About romance movies"],
        text: ["Romance movies are fun to watch"]
    },
    action:{
        title: ["About action movies"],
        text: ["Action movies are fun to watch"]
    },

    hollywood: {
        title: ["Here are some genre-based hollywood movies"],
        options: ["1: Comedy", "2: Horror", "3: Romance", "4: Action"]
    },
    shopping: {
        title: ["Categories:"],
        options: ['1: Beauty','2: Men', '3: Women', '4: Electronics']
    },
    
    beauty: {
        title: ["Here are some Beauty care"],
        options: ["1: Make-up", "2: Skin-care", "3: Hair-care"]
    },
    makeUp:{
        title: ["About Make-Up"],
        text: ["Action movies are fun to watch"]
    },
    skin:{
        title: ["About Skin-care"],
        text: ["Action movies are fun to watch"]
    },
    hair:{
        title: ["About Hair-care"],
        text: ["Action movies are fun to watch"]
    },
    men: {
        title: ["Here are some men clothings"],
        options: ["1: Shirts", "2: T-Shirts", "3: Jeans"]
    },
    shirts:{
        title: ["About Shirts"],
        text: ["Action movies are fun to watch"]
    },
    tshirts:{
        title: ["About T-shirts"],
        text: ["Action movies are fun to watch"]
    },
    jeans:{
        title: ["About Jeans"],
        text: ["Action movies are fun to watch"]
    },
    women: {
        title: ["Here are some women clothings"],
        options: ["1: Western wear", "2: Ethnic wear"]
    },

    westernW:{
        title: ["About Western wear"],
        text: ["Action movies are fun to watch"]
    },
    ethnicW:{
        title: ["About Ethnic-wear"],
        text: ["Action movies are fun to watch"]
    },
    electronics: {
        title: ["Here are some electronics"],
        options: ["1:Mobiles", "2: Television", "3: Cameras","4: Speakers"]
    },
    mobiles:{
        title: ["About Mobiles"],
        text: ["Action movies are fun to watch"]
    },
    tv:{
        title: ["About Televisions"],
        text: ["Action movies are fun to watch"]
    },
    camera:{
        title: ["About Cameras"],
        text: ["Action movies are fun to watch"]
    },
    speakers:{
        title: ["About Speakers"],
        text: ["Action movies are fun to watch"]
    },
    music: {
        title: ["Categories:"],
        options: ['1: Classical', '2: Eastern', '3: Western']
    },
    classical: {
        title: ["Here are some Classical genres"],
        options: ["1: Symphonies", "2: Operas", "3: Sonata", "4: Ballade"]
    },
    symphonies:{
        title: ["About Symphonies"],
        text: ["Action movies are fun to watch"]
    },
    operas:{
        title: ["About Operas"],
        text: ["Action movies are fun to watch"]
    },
    sonatas:{
        title: ["About Sonata"],
        text: ["Action movies are fun to watch"]
    },
    ballade:{
        title: ["About Ballade"],
        text: ["Action movies are fun to watch"]
    },
    eastern: {
        title: ["Here are some Eastern genres"],
        options: ["1: Indian", "2: Turkish", "3: Persian", "4: Arabic"]
    },
    indian:{
        title: ["About Indian"],
        text: ["Action movies are fun to watch"]
    },
    turkish:{
        title: ["About Turkish"],
        text: ["Action movies are fun to watch"]
    },
    persian:{
        title: ["About Persian"],
        text: ["Action movies are fun to watch"]
    },
    arabic:{
        title: ["About Arabic"],
        text: ["Action movies are fun to watch"]
    },
    western: {
        title: ["Here are some Western genres"],
        options: ["1: Jazz", "2: Pop"]
    },
    jazz:{
        title: ["About Jazz"],
        text: ["Action movies are fun to watch"]
    },
    pop:{
        title: ["About Pop"],
        text: ["Action movies are fun to watch"]
    },
};


//(1) Variables to track the current and previous sections
let currentSection = 'chatinit';
let sectionHistory = [];


//(2) Initialize the conversation
startConversation();



//(3)
function startConversation() {
    document.getElementById('user-input').disabled = false;

    currentSection = 'chatinit'; // Reset to the initial section
    sectionHistory = []; // Clear history
    displaySection(data[currentSection]);
}

//(4) //(7.1)
function displaySection(sectionData, isFinalSection = false) {
    const chatLog = document.getElementById('chat-log');

    
    if (isFinalSection == true){
        const optionsList = document.createElement('li');
        optionsList.className = 'bot-message';
        optionsList.innerHTML = sectionData.title;
        optionsList.innerHTML += "<br>";
        optionsList.innerHTML += sectionData.text + "<br>";
        optionsList.innerHTML += "<br>Select options: <br>0: to go back<br>E: to end conversation";
        chatLog.appendChild(optionsList);

        document.getElementById('user-input').value = '';

    }
    if (sectionData.options.length > 0 || isFinalSection == false) {

        sectionData.title.forEach(text => {
            const botMessage = document.createElement('li');
            botMessage.className = 'bot-message';
            botMessage.innerHTML = text;
            chatLog.appendChild(botMessage);
        });

        const optionsList = document.createElement('li');
        optionsList.className = 'bot-options';
        optionsList.innerHTML = 'Please select an option:<br>' + sectionData.options.join('<br>');
        
        if (currentSection === 'chatinit'){
            chatLog.appendChild(optionsList);
        }
        // else if (isFinalSection) {
        //     optionsList.innerHTML += "<br>0: Go back<br>E: End Conversation";
        //     chatLog.appendChild(optionsList);
        // } 
        else {
            optionsList.innerHTML += "<br>0: Go back";
            chatLog.appendChild(optionsList);
        }
    }

    // Automatically scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}

//(5) Add event listener for keypress in the input field
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage(e);
    }
});

//(6)
function sendMessage(event) {
    // Prevent default form submission if any (not needed in this case)
    // event.preventDefault();

    // Get the value from the input field
    const userInput = document.getElementById('user-input').value.trim();
    // const inputElement = document.getElementById('user-input');
    // const userInput = inputElement.value.trim();
    // Check if there is any input
    if (userInput) {
        // Display the user's message in the chat log
        const userMessage = document.createElement('li');
        userMessage.className = 'user-message';
        userMessage.textContent = "You selected: " + userInput;
        document.getElementById('chat-log').appendChild(userMessage);

        // Process the input using the existing handleUserInput function
        handleUserInput(userInput);

        // Clear the input field after processing
        document.getElementById('user-input').value = '';
    }
    // const chatLog = document.getElementById('chat-log');
    // inputElement.scrollTop = inputElement.scrollHeight;

}

//(7)
function handleUserInput(option) {
    
    if (option.toLowerCase() === 'e') {
        // End the conversation
        const chatLog = document.getElementById('chat-log');
        const endMessage = document.createElement('li');
        endMessage.className = 'bot-message';
        endMessage.innerHTML = "Thank you for chatting with us! Goodbye!";
        chatLog.appendChild(endMessage);

        // Optionally, disable input to prevent further interaction
        document.getElementById('user-input').disabled = true;
        return;
    }

    let nextSection;
    if (option === '0') {
        // Handle backtracking
        if (sectionHistory.length > 0) {
            currentSection = sectionHistory.pop();
        }
        displaySection(data[currentSection]);
    } else {
        // Push the current section to history before moving to the next
        sectionHistory.push(currentSection);

        switch (currentSection) {
            case 'chatinit':
                if (option === '1' || option.toLowerCase() === 'movies') currentSection = 'movies';
                else if (option === '2' || option.toLowerCase() === 'shopping') currentSection = 'shopping';
                else if (option === '3' || option.toLowerCase() === 'music') currentSection = 'music';
                else return displayInvalidOption();
                return displaySection(data[currentSection]);

            case 'movies':
                if (option === '1' || option.toLowerCase() === 'hollywood') currentSection = 'hollywood';
                else if (option === '2' || option.toLowerCase() === 'bollywood') currentSection = 'bollywood';
                else return displayInvalidOption();
                return displaySection(data[currentSection]);
    
            case 'bollywood':
                if (option === '1' || option.toLowerCase() === 'comedy') currentSection = 'comedy';
                else if (option === '2' || option.toLowerCase() === 'horror') currentSection = 'horror';
                else if (option === '3' || option.toLowerCase() === 'romance') currentSection = 'romance';
                else if (option === '4' || option.toLowerCase() === 'action') currentSection = 'action';
                else return displayInvalidOption();
                return displaySection(data[currentSection], true);
                

            case 'hollywood':
                if (option === '1' || option.toLowerCase() === 'comedy') currentSection = 'comedy';
                else if (option === '2' || option.toLowerCase() === 'horror') currentSection = 'horror';
                else if (option === '3' || option.toLowerCase() === 'romance') currentSection = 'romance';
                else if (option === '4' || option.toLowerCase() === 'action') currentSection = 'action';
                else return displayInvalidOption();
                return displaySection(data[currentSection], true);


            case 'shopping':
                if (option === '1' || option.toLowerCase() === 'beauty') currentSection = 'beauty';
                else if (option === '2' || option.toLowerCase() === 'men') currentSection = 'men';
                else if (option === '3' || option.toLowerCase() === 'women') currentSection = 'women';
                else if (option === '4' || option.toLowerCase() === 'electronics') currentSection = 'electronics';
                else return displayInvalidOption();
                return displaySection(data[currentSection]);

            case 'beauty':
                if (option === '1' || option.toLowerCase() === 'make-up') currentSection = 'makeUp';
                else if (option === '2' || option.toLowerCase() === 'Skin-care') currentSection = 'skin';
                else if (option === '3' || option.toLowerCase() === 'hair-care') currentSection = 'hair';
                else return displayInvalidOption();
                return displaySection(data[currentSection], true);

            case 'men':
                if (option === '1' || option.toLowerCase() === 'shirts') currentSection = 'shirts';
                else if (option === '2' || option.toLowerCase() === 't-shirts') currentSection = 'tshirts';
                else if (option === '3' || option.toLowerCase() === 'jeans') currentSection = 'jeans';
                else return displayInvalidOption();
                return displaySection(data[currentSection], true);

            case 'women':
                if (option === '1' || option.toLowerCase() === 'western') currentSection = 'westernW';
                else if (option === '2' || option.toLowerCase() === 'ethnic') currentSection = 'ethnicW';
                else return displayInvalidOption();
                return displaySection(data[currentSection], true);

            case 'electronics':
                if (option === '1' || option.toLowerCase() === 'mobiles') currentSection = 'mobiles';
                else if (option === '2' || option.toLowerCase() === 'tv') currentSection = 'tv';
                else if (option === '3' || option.toLowerCase() === 'camera') currentSection = 'camera';
                else if (option === '4' || option.toLowerCase() === 'speakers') currentSection = 'speakers';
                else return displayInvalidOption();
                return displaySection(data[currentSection], true);
            
            case 'music':
                if (option === '1' || option.toLowerCase() === 'classical') currentSection = 'classical';
                else if (option === '2' || option.toLowerCase() === 'eastern') currentSection = 'eastern';
                else if (option === '3' || option.toLowerCase() === 'western') currentSection = 'western';
                else return displayInvalidOption();
                return displaySection(data[currentSection]);

            case 'classical':
                if (option === '1' || option.toLowerCase() === 'symphonies') currentSection = 'symphonies';
                else if (option === '2' || option.toLowerCase() === 'operas') currentSection = 'operas';
                else if (option === '3' || option.toLowerCase() === 'sonatas') currentSection = 'sonatas';
                else if (option === '4' || option.toLowerCase() === 'ballade') currentSection = 'ballade';
                else return displayInvalidOption();
                return displaySection(data[currentSection], true);

            case 'eastern':
                if (option === '1' || option.toLowerCase() === 'indian') currentSection = 'indian';
                else if (option === '2' || option.toLowerCase() === 'turkish') currentSection = 'turkish';
                else if (option === '3' || option.toLowerCase() === 'persian') currentSection = 'persian';
                else if (option === '4' || option.toLowerCase() === 'arabic') currentSection = 'arabic';
                else return displayInvalidOption();
                return displaySection(data[currentSection], true);

            case 'western':
                if (option === '1' || option.toLowerCase() === 'jazz') currentSection = 'jazz';
                else if (option === '2' || option.toLowerCase() === 'pop') currentSection = 'pop';
                else return displayInvalidOption();
                return displaySection(data[currentSection], true);
        }
    }

    //   nextSection = data[currentSection];
    // displaySection(nextSection);

    //return displaySection(data[currentSection])

}

//(7.2)
function displayInvalidOption() {
    //const chatLog = document.getElementById('chat-log');
    //chatLog.innerHTML ='Invalid Option, Please choose valid option!';
    // Display an invalid option message
    const chatLog = document.getElementById('chat-log');
    const invalidMessage = document.createElement('li');
    invalidMessage.className = 'bot-message';
    invalidMessage.innerHTML = "Invalid option!<br> Please enter valid option.";
    chatLog.appendChild(invalidMessage);

    chatLog.scrollTop = chatLog.scrollHeight;
}


//Shrinidhi Magadum
