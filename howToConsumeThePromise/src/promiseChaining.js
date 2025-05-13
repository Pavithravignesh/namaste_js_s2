const GITHUB_URL = "https://api.github.com/users/Pavithravignesh";
fetch(GITHUB_URL)
    .then((data) => { return data }) // we'll return value of above output
    .then((data) => { return data })
    .then((data) => { return data })
    .then((data) => console.log(data))