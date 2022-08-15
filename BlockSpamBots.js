class BlockSpamBots {
    
    constructor(name, mail, text) {
        this.name = name;
        this.mail = mail;
        this.text = text.toLowerCase();
    }

    get_name() {
        return this.name;
    }

    get_mail() {
        return this.mail;
    }

    get_text() {
        console.log(this.text); // here for debuging
        const chars = this.text.split("");
        const ascii_chars = "abcdefghijklmnopqrstuvwxyåäö1234567890 @!&()?+".split("");

        const words = this.text.split(" ");
        const controll_words = ["sex", "nude", "xxx"];
        let error_text = "";
        
        let counter = 0;
        //checking every char in text for none ascii characters of our choise in ascii_chars list
        for (let item = 0; item < chars.length; item++) {
            for (let i = 0; i < ascii_chars.length; i++) {
                //console.log("Item: " + chars[item] + " ascii: " + ascii_chars[i])
                if (chars[item] === ascii_chars[i]) {
                    counter++;
                    break;
                }                
            }
            if (counter == 0) {
                return "Not a valid char text"
            }
            else {
                counter = 0
            }
        }
        //Here we match a predefined list with input text and have to switch our controller if statement so it fit.
        // We could use a shorthand code here but we are going to store words in error_text to ilustrate the errors on the input.
        //words.some(item => controll_words.include(item)) // this will return true if it's a match else false.
        for (let item = 0; item < words.length; item++) {
            for (let i = 0; i < controll_words.length; i++) {
                if (words[item] === controll_words[i]) {
                    counter++;
                    break;
                }                
            }
            if (counter == 0) {
                counter = 0
            }
            else {
                return "Not a valid word text"
            }
        }

        return true;
    }
}

const run_block = new BlockSpamBots("Micke", "text@test.org", "måste köpas sex");
console.log(run_block.get_text());