/**
 * Created by rambo.huang on 18/5/12.
 */

import fetch from 'cross-fetch';

export default function fetchJson() {
    fetch(`https://www.reddit.com/r/reactjs.json`)
        .then(response => response.json())
        .then(json => parseJson(json));
    //let json = "['p1':'value1', 'p2':'value2']";
}

function parseJson(json) {
    let jsonArray = json.data.children.map(child => child.data);
    for (let arr of jsonArray) {
        console.log("text:" + arr["title"]);
    }
}