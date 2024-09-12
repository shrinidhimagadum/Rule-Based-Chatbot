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
    bcomedy:{
        title: ["List of comedy movies:"],
        list: ["1: Hera-Pheri", "2: Golmaal","3: Dhamaal", "4: Welcome", "5:Munna Bhai MBBS"]
    },
    bhorror:{
        title: ["List of horror movies:"],
        list: ["1: Bhoot", "2: 1920","3: Pari", "4: Tumbaad", "5: Stree"]
    },
    bsciFi:{
        title: ["List of Sci-Fi movies:"],
        list: ["1: Koi Mil Gaya", "2: Ra.One","3: PK", "4: Robot", "5: A Flying Jatt"]
    },
    bromance:{
        title: ["List of romance movies:"],
        list: ["1: Dilwale", "2: Jab We Met","3: Kal Ho Naa Ho", "4: Veer-Zaara", "5: Yeh Jawaani Hai Deewani"]
    },
    baction:{
        title: ["List of action movies:"],
        list: ["1: War", "2: Singham","3: Bang Bang!", "4: Dhoom", "5: Baaghi"]
    },

    hollywood: {
        title: ["Here are some genre-based hollywood movies"],
        options: ["1: Comedy", "2: Horror", "3: Romance", "4: Action"]
    },
    hcomedy:{
        title: ["List of comedy movies:"],
        list: ["1: The Hangover", "2: Superbad","3: Dumb and Dumber", "4: Step Brothers", "5: 21 Jump Street"]
    },
    hhorror:{
        title: ["List of horror movies:"],
        list: ["1: The Conjuring", "2: Hereditary","3: A Nightmare on Elm Street", "4: The Exorcist", "5: It"]
    },
    hsciFi:{
        title: ["List of Sci-Fi movies:"],
        list: ["1: Inception", "2: Interstellar","3: The Matrix", "4: Blade Runner 2049", "5: Star Wars: A New Hope"]
    },
    hromance:{
        title: ["List of romance movies:"],
        list: ["1: The Notebook", "2: Titanic","3: La La Land", "4: Pride and Prejudice", "5: A Star is Born"]
    },
    haction:{
        title: ["List of action movies:"],
        list: ["1: Mad Max: Fury Road", "2: Mission Impossible","3: Gladiator", "4: Die Hard", "5: The Dark Knight"]
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
        title: ["List of Make-Up products:"],
        list: ['1: Foundation','2: Primer', '3: Concealer', '4: Lipstick', '5: Mascara']
    },
    skin:{
        title: ["List of Skin-care products"],
        list: ['1: Sunscreen','2: Moisturizer', '3: Cleanser', '4: Serum', '5: Exfoliator']
    },
    hair:{
        title: ["List of Hair-care products:"],
        list: ['1: Shampoo','2: Conditioner', '3: Hair-Mask', '4: Hair-oil', '5: Leave-in Conditioner']
    },
    men: {
        title: ["Here are some men clothings"],
        options: ["1: Shirts", "2: T-Shirts", "3: Jeans"]
    },
    shirts:{
        title: ["Types of Shirts:"],
        list: ['1: Dress Shirt','2: Oxford Shirt', '3: Flannel Shirt', '4: Chambray Shirt', '5: Cuban Collar Shirt']
    },
    tshirts:{
        title: ["Types of T-shirts:"],
        list: ['1: Crew Neck T-shirt','2: V-Neck T-shirt', '3: Henley T-shirt', '4: Polo T-shirt', '5: Graphic T-shirt']
    },
    jeans:{
        title: ["Types of Jeans:"],
        list: ['1: Slim Fit Jeans','2: Straight Fit Jeans', '3: Skinny Jeans', '4: Relaxed Fit Jeans', '5: Bootcut Jeans']
    },
    women: {
        title: ["Here are some women clothings"],
        options: ["1: Western wear", "2: Ethnic wear"]
    },

    westernW:{
        title: ["Different types of Western wear:"],
        list: ['1: Blazer','2: Denim Jacket', '3: Maxi Dress', '4: Jumpsuit', '5: Dungri']
    },
    ethnicW:{
        title: ["Different types of Ethnic-wear:"],
        list: ['1: Saree','2: Salwar Kameez', '3: Lehenga Choli', '4: Anarkali Suit', '5: Kurtis']
    },
    electronics: {
        title: ["Here are some electronics"],
        options: ["1:Mobiles", "2: Television", "3: Cameras","4: Speakers"]
    },
    mobiles:{
        title: ["About Mobiles"],
        list: ['1: Apple','2: Samsung', '3: Google', '4: One-plus', '5: Xiaomi']
    },
    tv:{
        title: ["About Televisions"],
        list: ['1: Sony','2: LG', '3: Samsung', '4: Philips', '5: tTCL']
    },
    camera:{
        title: ["About Cameras"],
        list: ['1: Canon','2: Nikon', '3: Sony', '4: Fujifilm', '5: Olympus']
    },
    speakers:{
        title: ["About Speakers"],
        list: ['1: Bose','2: Sonos', '3: JBL', '4: Marshall', '5: Boat']
    },
    music: {
        title: ["Categories:"],
        options: ['1: Eastern', '2: Western']
    },
    // classical: {
    //     title: ["Here are some Classical genres:"],
    //     options: ["1: Symphonies", "2: Operas", "3: Sonata", "4: Ballade"]
    // },
    // symphonies:{
    //     title: ["About Symphonies"],
    //     list: ['1: Beauty','2: Men', '3: Women', '4: Electronics', '5: ']
    // },
    // operas:{
    //     title: ["About Operas"],
    //     list: ['1: Beauty','2: Men', '3: Women', '4: Electronics', '5: ']
    // },
    // sonatas:{
    //     title: ["About Sonata"],
    //     list: ['1: Beauty','2: Men', '3: Women', '4: Electronics', '5: ']
    // },
    // ballade:{
    //     title: ["About Ballade"],
    //     list: ['1: Beauty','2: Men', '3: Women', '4: Electronics', '5: ']
    // },
    eastern: {
        title: ["Here are some Eastern genres:"],
        options: ["1: Indian", "2: Turkish", "3: Persian", "4: Arabic"]
    },
    indian:{
        title: ["List of Indian songs:"],
        list: ['1: Tere Bina','2: Lag Ja Gale', '3: Chaiyya Chaiyya', '4: Aaj Jaane Ki Zid Na Karo', '5: Kajra Re']
    },
    turkish:{
        title: ["List of Turkish songs:"],
        list: ['1: Gelinim','2: Telli Telli', '3: Sari Gelin', '4: Bana Ellerini Ver']
    },
    persian:{
        title: ["List of Persian songs:"],
        list: ['1: Parvaz','2: Badeh Toei', '3: Bahar Bahar', '4: Dooset Daram']
    },
    arabic:{
        title: ["List of Arabic songs:"],
        list: ['A1: Batwanes Beek','2: Tamally Maak', '3: Mawal Ya Ghzayyel', '4: Enta Omri']
    },
    western: {
        title: ["Here are some Western genres:"],
        options: ["1: Jazz", "2: Pop"]
    },
    jazz:{
        title: ["List of few Jazz songs:"],
        list: ['1: All Blues','2: Summertime', '3: What a Wonderful World', '4: Fever', '5: Songbird']
    },
    pop:{
        title: ["List of few Pop songs:"],
        list: ['1: Vogue','2: Shake It Off', '3: Blinding Lights', '4: Stay', '5: Firework']
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
        optionsList.innerHTML += sectionData.list.join('<br>');
        chatLog.appendChild(optionsList);
        var newDiv = document.createElement("div");

        newDiv.innerHTML += "Select options: <br>0: to go back<br>E: to end conversation";
        newDiv.style.backgroundColor = "#e0e0e0"; 
        newDiv.style.margiTop = "10px" ;
        newDiv.style.marginBottom = "10px";
        newDiv.style.padding = "10px";
        newDiv.style.borderRadius = "5px";
        newDiv.style.fontSize = "14px";
        chatLog.appendChild(newDiv);

        document.getElementById('user-input').value = '';

        let chatLog1 = document.getElementById('chat-box');
        chatLog1.scrollTop = chatLog1.scrollHeight;

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


    let chatLog1 = document.getElementById('chat-box');
    chatLog1.scrollTop = chatLog1.scrollHeight;
    
}

//(5) Add event listener for keypress in the input field
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage(e);
    }
});

//(6)
function sendMessage(event) {

    const userInput = document.getElementById('user-input').value.trim();
    
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
    let chatLog = document.getElementById('chat-box');
    chatLog.scrollTop = chatLog.scrollHeight;

}

//(7)
function handleUserInput(option) {

    if (option.toLowerCase() === 'e' || option.toLowerCase() === 'end' ) {
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
                if (option === '1' || option.toLowerCase() === 'comedy') currentSection = 'bcomedy';
                else if (option === '2' || option.toLowerCase() === 'horror') currentSection = 'bhorror';
                else if (option === '3' || option.toLowerCase() === 'romance') currentSection = 'bromance';
                else if (option === '4' || option.toLowerCase() === 'action') currentSection = 'baction';
                else return displayInvalidOption();
                return displaySection(data[currentSection], true);
                

            case 'hollywood':
                if (option === '1' || option.toLowerCase() === 'comedy') currentSection = 'hcomedy';
                else if (option === '2' || option.toLowerCase() === 'horror') currentSection = 'hhorror';
                else if (option === '3' || option.toLowerCase() === 'romance') currentSection = 'hromance';
                else if (option === '4' || option.toLowerCase() === 'action') currentSection = 'haction';
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
                // if (option === '1' || option.toLowerCase() === 'classical') currentSection = 'classical';
                if (option === '1' || option.toLowerCase() === 'eastern') currentSection = 'eastern';
                else if (option === '2' || option.toLowerCase() === 'western') currentSection = 'western';
                else return displayInvalidOption();
                return displaySection(data[currentSection]);

            // case 'classical':
            //     if (option === '1' || option.toLowerCase() === 'symphonies') currentSection = 'symphonies';
            //     else if (option === '2' || option.toLowerCase() === 'operas') currentSection = 'operas';
            //     else if (option === '3' || option.toLowerCase() === 'sonatas') currentSection = 'sonatas';
            //     else if (option === '4' || option.toLowerCase() === 'ballade') currentSection = 'ballade';
            //     else return displayInvalidOption();
            //     return displaySection(data[currentSection], true);

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

                // let listA=['bcomedy','bhorror','baction','bromance','bsciFi','hcomedy','hhorror','haction','hromance','hsciFi','haction',
                //     'makeUp','skin','hair','shirts', 'tshirts','jeans','westernW','ethnicW','mobiles','tv','camera','speakers',
                //     'indian','turkish','persian','arabic','pop','jazz'];
            case 'bcomedy':
            case 'bhorror':
            case 'baction':
            case 'bsciFi':
            case 'bromance':
            case 'hcomedy':
            case 'hhorror':
            case 'haction':
            case 'hromance':
            case 'hsciFi':
            case 'makeUp':
            case 'skin':
            case 'hair':
            case 'shirts':
            case 'tshirts':
            case 'jeans':
            case 'westernW':
            case 'ethnicW':
            case 'mobiles':
            case 'tv':
            case 'camera':
            case 'speakers':
            case 'indian':
            case 'turkish':
            case 'persian':
            case 'arabic':
            case 'pop':
            case 'jazz':
                if (option === 0) {
                    currentSection = sectionHistory.pop();
                }
                else if (option != 0 || option.toLowerCase() != 'e' ){
                    displayInvalidOption();
                }
        }
    }
    let chatLog1 = document.getElementById('chat-box');
    chatLog1.scrollTop = chatLog1.scrollHeight;
}


function displayInvalidOption() {

    const chatLog = document.getElementById('chat-log');
    const invalidMessage = document.createElement('li');
    invalidMessage.className = 'bot-message';
    invalidMessage.innerHTML = "Invalid option!<br> Please enter valid option.";
    chatLog.appendChild(invalidMessage);

    chatLog.scrollTop = chatLog.scrollHeight;

    let chatLog1 = document.getElementById('chat-box');
    chatLog1.scrollTop = chatLog1.scrollHeight;
}
