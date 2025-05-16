import { GITHUB_API } from "./constant/constant.js";

async function handlePromise() {
    try {
        const response = await fetch(GITHUB_API);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

    // fetch(GITHUB_API)
    //     .then((data) => data.json())
    //     .then((data) => console.log(data));
}
handlePromise();