const GITHUB_URL = "https://api.github.com/users/Pavithravignesh";
fetch(GITHUB_URL)
    .then((data) => console.log(data)) // we'll return value of above output
    .then(() => console.log("data"))