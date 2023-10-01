const uiHtml = `
  <div id="my-extension-ui">
    <h1>Hello, world!</h1>
  </div>
`;

const uiCss = `
  #my-extension-ui {
    display: flex;
    background-color: red;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 200px;
    z-index: 9999999;
  }

  #my-extension-ui h1 {
    text-align: center;
    padding: 2rem;
  }
`;

function createUI() {
  document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.executeScript(
      {
        code: `
        const style = document.createElement('style');
        style.textContent = '${uiCss}';
        document.head.appendChild(style);
  
        const ui = document.createElement('div');
        ui.innerHTML = '${uiHtml}';
        document.body.appendChild(ui);
      `,
      },
      function () {
        console.log("UI injected");
      }
    );
  });
}

function startRecording() {
  createUI();
  navigator.mediaDevices
    .getDisplayMedia({ audio: false, video: true })
    .then((stream) => console.log(stream.id))
    .catch((err) => console.error("Error: " + err));
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "Start Recording") {
    startRecording();
    sendResponse({ message: "Recording started" });
  }
});
