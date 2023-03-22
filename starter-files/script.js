// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

const button = document.getElementById("button");
const divGeneral = document.getElementById("answer");

async function fetchAnswer(){
    const response = await fetch(API_ENDPOINT);
    const responseJSON = await response.json();
    return responseJSON;
}

button.addEventListener("click", e => {
    let x = document.getElementById("input").value;
        if(x == ""){
            console.log("Error, no hay ninguna pregunta");
        }
        else{
            fetchAnswer().then(data =>{
                console.log(data);
                divGeneral.append(data.answer);
            });
            setTimeout(()=>{
                document.getElementById("answer").innerHTML = "";
            },3000);
        }
});
