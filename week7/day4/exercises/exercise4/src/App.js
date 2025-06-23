import React from "react";

function App() {
  const webhookURL = "https://webhook.site/407a13d7-f09c-441c-a3a0-e1000b559e7e"; 

  const sendData = async () => {
    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key1: "myusername",
          email: "mymail@gmail.com",
          name: "Isaac",
          lastname: "Doe",
          age: 27,
        }),
      });

      const result = await response.text(); 
      console.log("Webhook Response:", result);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Post JSON to Webhook</h1>
      <button onClick={sendData}>Send Data</button>
    </div>
  );
}

export default App;
