
const coolBird = async () => {
    const response = await fetch('https://avibase.bsc-eoc.org/avibase.jsp?lang=EN');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
  }