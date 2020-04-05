let usernames = ["Natasha Franklin", "John Christopher", "Isabella Garcia","Jasen Arbalast", "Sherwin Johnson"];

let filenames = ["User5.png", "User3.png", "User6.png", "User2.png", "User4.png"];

function member(username, filename) {
    this.name = username;
    this.filename = filename;
    this.imageSrc = `<img src="./images/users/${this.filename}" alt="${this.name}">`;
    this.html = `<div class="user">\n ${this.imageSrc}\n <p>${this.name}</p>\n</div>`;
    console.log(this.html);
    document.getElementById("users-display").innerHTML += this.html;
}

for (let i = 0; i < usernames.length; i++) {
    user = new member(usernames[i], filenames[i]);
}
