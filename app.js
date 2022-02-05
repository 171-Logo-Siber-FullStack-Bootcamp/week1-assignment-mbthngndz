var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// import { XMLHttpRequest } from "xmlhttprequest";  (If you want to use ES, you have to add "type":"module" to package.json file)


var apiUrl = "https://jsonplaceholder.typicode.com/users"

// 1. Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// 2. Configure it: http request for the URL 
xhr.open("GET", apiUrl);

// 3. Send the request over the network
xhr.send();

// An XMLHttpRequest object travels them in the order 0 → 1 → 2 → 3 → 4. 
// We can track them using readystatechange event and when the status is 4 the request is finished

xhr.onreadystatechange = function () {
if (this.readyState === 4) {
    if (this.status == 200) {
    console.log(this.responseText)
    }
}
} 

