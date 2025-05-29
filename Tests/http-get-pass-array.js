// https://run.mocky.io/v3/d528deb9-99c0-4cfe-adab-4f4b72649d3a

import http from 'k6/http'

export default function(){
    let response = http.get('https://run.mocky.io/v3/d528deb9-99c0-4cfe-adab-4f4b72649d3a')


let body = JSON.parse(response.body)
body.forEach(element => {
    console.log(`namee is ${element.name}`)
});

}