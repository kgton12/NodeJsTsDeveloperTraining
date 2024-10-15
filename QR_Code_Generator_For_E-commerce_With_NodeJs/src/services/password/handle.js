async function validatePermittedChars() {
    let passwordCharacters = [];

    if (process.env.UPPERCASE_LETTERS === "true") {
        passwordCharacters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.LOWERCASE_LETTERS === "true") {
        passwordCharacters.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if (process.env.NUMBERS === "true") {
        passwordCharacters.push(..."1234567890");
    }

    if (process.env.ESPECIAL_CHARACTERS === "true") {
        passwordCharacters.push(..."!@#$%^&*()_+{}:<>?|[];,./~");
    }

    return passwordCharacters;
}

async function handle() {
    const characters = await validatePermittedChars();
    const passowdLength = process.env.LENGTH || 16;
    let password = "";

    for (let i = 0; i < passowdLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle;
