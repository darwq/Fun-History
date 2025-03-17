let url = `https://api.openai.com/v1/chat/completions`

let input = document.querySelector(".chat-input");
let content = document.querySelector(".content");

const createInput = (text) => {
  let item = document.createElement("div");
  let inputText = document.createElement("p");
 
  // SETTING PROPS  
  item.classList.add("input","chat-item","fade-anim");
  inputText.classList.add("chat-text","input-text");
  inputText.innerText = text;
  
  // APPENDING
  item.appendChild(inputText);
  content.appendChild(item);
}

const createOutput = (text) => {
  let item = document.createElement("div");
  let inputText = document.createElement("p");
 
  // SETTING PROPS  
  item.classList.add("input","chat-item","fade-anim");
  inputText.classList.add("chat-text","output-text");
  inputText.innerText = text;
  
  // APPENDING
  item.appendChild(inputText);
  content.appendChild(item);
}

const getData = async (url,message,key) => {

  return new Promise(async (res,rej) => {
    try {
        const response = await fetch(url,{
          method : "POST",
          headers : {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${key}`
          },
          body: JSON.stringify({
            model :"gpt-4o",
            messages : [{role : "user", content : message}],
          }),
        });

        const json = await response.json();
        res(json);
    } 
    catch (error) {
        rej(error.message);
    }
  })

}

input.addEventListener("keypress",(e) => {
  let element = e.target;
  if(e.key !="Enter" || element.value.length == 0){
    return;
  }

  createInput(element.value);

  fetch("/get_key",{
    method: "POST"
  }).then(response => {
    return response.json()
  }).then(response => {
    console.log(response);
    getData(url,element.value,response.key).then((result) => {
      console.log(result);
      let message = result.choices[0].message.content;
      createOutput(message);
    })
    element.value = "";
  })
})

// getData(url);