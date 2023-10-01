const uiHtml = `
  <div id="help-me-out">
    <p>00:03:45</p>
    <div class="divider"></div>
    <div class="controls">
      <div class="control-btn-container">
        <button id="pause" class="control-btn">
          <div>
            <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Line 23" d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/></svg>    
            <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Line 23" d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/></svg>    
          </div>
        </button>
        <p>Pause</p>
      </div>
      <div class="control-btn-container">
        <button id="stop" class="control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="heroicons-outline/stop"><path id="Rectangle 437" d="M5.25 7.5C5.25 6.25736 6.25736 5.25 7.5 5.25H16.5C17.7426 5.25 18.75 6.25736 18.75 7.5V16.5C18.75 17.7426 17.7426 18.75 16.5 18.75H7.5C6.25736 18.75 5.25 17.7426 5.25 16.5V7.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        </button>
        <p>Stop</p>
      </div>
      <div class="control-btn-container">
        <button id="camera" class="control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="heroicons-outline/video-camera"><path id="Vector" d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>      
        </button>
        <p>Camera</p>
      </div>
      <div class="control-btn-container">
        <button id="mic" class="control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="heroicons-outline/microphone"><path id="Vector" d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>      
        </button>
        <p>Mic</p>
      </div>
      <div class="trash-btn-container">
        <button id="trash" class="trash-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="heroicons-outline/trash"><path id="Vector" d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M19.2276 5.79057C18.0812 5.61744 16.9215 5.48485 15.75 5.39432M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432M15.75 5.39432C14.5126 5.2987 13.262 5.25 12 5.25C10.738 5.25 9.48744 5.2987 8.25 5.39432" stroke="#BEBEBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        </button>
      </div>
    </div>
  </div>
`;

function createUI() {
  const playbackUI = document.createElement("div");
  playbackUI.innerHTML = uiHtml;
  document.body.appendChild(playbackUI);
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
