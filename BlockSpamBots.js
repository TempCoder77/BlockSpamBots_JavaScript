class BlockSpamBots {
    
    constructor(name, mail, text) {
        this.name = name;
        this.mail = mail;
        this.text = text;
    }

    get_name() {
        return this.name;
    }

    get_mail() {
        return this.mail;
    }

    get_text() {
        return this.text;
    }
}

const run_block = new BlockSpamBots("Micke", "text@test.org", "Spam text to send");
console.log(run_block.get_name());