import { GITHUB_API } from "./constant/constant.js";

async function handlePromise() {
    const response = await fetch(GITHUB_API);
    const data = await response.json();
    console.log(data.name);

    // fetch(GITHUB_API)
    //     .then((data) => data.json())
    //     .then((data) => console.log(data));
}
handlePromise();