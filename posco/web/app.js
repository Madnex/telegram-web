function alertMessage(text) {
    alert(text)
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}

window.Telegram.Webapp

function getPlatform() {
    return navigator.platform;
  }
  
  async function jsPromiseFunction(message) {
      let msg = message;
      let promise = new Promise(function(resolve, reject) {
          resolve('Hello : ' + message);
      });
      let result = await promise;
      return result;
  }
  
  async function jsOpenTabFunction(url) {
      let promise = new Promise(function(resolve, reject) {
          var win = window.open(url,"New Popup Window","width=800,height=800");
          console.log("window",win);
  
          var timer = setInterval(function() {
                  if (win.closed) {
                      clearInterval(timer);
                      alert("'Popup Window' closed!");
                      resolve('Paid');
                  }
              }, 500);
          console.log("window",win);
      });
      let result = await promise;
      console.log("result",result);
      return result;
  }