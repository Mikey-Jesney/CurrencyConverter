const API_KEY = '271314c53e0d8197322543b49d04cd0d';

const userAction = async () => {
    fetch("http://api.coinlayer.com/live?access_key=271314c53e0d8197322543b49d04cd0d")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  userAction();


