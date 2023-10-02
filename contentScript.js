const uiHtml = `
  <div id="help-me-out">
    <p>00:03:45</p>
    <?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="10px" height="10px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="32" stroke-width="8" stroke="#ff0000" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform></circle><circle cx="50" cy="50" r="23" stroke-width="8" stroke="#ff0000" stroke-dasharray="36.12831551628262 36.12831551628262" stroke-dashoffset="36.12831551628262" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform></circle></svg>
    <div class="divider"> </div>
    <div class="controls">
      <div class="control-btn-container">
        <button id="helpMeOutpause" class="control-btn">
          <div>
            <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Line 23" d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/></svg>    
            <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Line 23" d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/></svg>    
          </div>
        </button>
        <p>Pause</p>
      </div>
      <div class="control-btn-container">
        <button id="helpMeOutstop" class="control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="heroicons-outline/stop"><path id="Rectangle 437" d="M5.25 7.5C5.25 6.25736 6.25736 5.25 7.5 5.25H16.5C17.7426 5.25 18.75 6.25736 18.75 7.5V16.5C18.75 17.7426 17.7426 18.75 16.5 18.75H7.5C6.25736 18.75 5.25 17.7426 5.25 16.5V7.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        </button>
        <p>Stop</p>
      </div>
      <div class="control-btn-container">
        <button id="helpMeOutcamera" class="control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="heroicons-outline/video-camera"><path id="Vector" d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>      
        </button>
        <p>Camera</p>
      </div>
      <div class="control-btn-container">
        <button id="helpMeOutmic" class="control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="heroicons-outline/microphone"><path id="Vector" d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>      
        </button>
        <p>Mic</p>
      </div>
      <div class="trash-btn-container">
        <button id="helpMeOuttrash" class="trash-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="heroicons-outline/trash"><path id="Vector" d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M19.2276 5.79057C18.0812 5.61744 16.9215 5.48485 15.75 5.39432M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432M15.75 5.39432C14.5126 5.2987 13.262 5.25 12 5.25C10.738 5.25 9.48744 5.2987 8.25 5.39432" stroke="#BEBEBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        </button>
      </div>
    </div>
  </div>
`;

let stream = null,
  audio = null,
  webcam = null,
  camAudio = null,
  mixedStream = null,
  chunks = [],
  recorder = null,
  stopButton = null,
  wantsWebcam = false,
  wantsAudio = false;

function createUI() {
  const playbackUI = document.createElement("div");
  playbackUI.id = "help-me-out-host";
  document.body.appendChild(playbackUI);

  var sheet = new CSSStyleSheet();
  sheet.replaceSync(
    `
    #help-me-out {
      position: fixed;
      display: flex;
      bottom: 3rem;
      left: 3rem;
      padding: 1rem;
      width: 27rem;
      height: 3rem
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      border-radius: 12.5rem;
      background: #141414;
      z-index: 9999999999999999999;
      color: #fff !important;
    }
    
    #help-me-out .divider {
      background: #e8e8e8;
      width: 0.0625rem;
      height: 3rem;
      margin-left: .5rem;
    }
    
    #help-me-out .controls {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 20rem;
    }
    
    #help-me-out .control-btn-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    #help-me-out .control-btn {
      cursor: pointer;
      display: flex;
      width: 44px;
      height: 44px;
      padding: 10px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 32px;
      border: 1px solid #fff;
      background: #fff;
    }
    
    #help-me-out .control-btn-container p {
      margin: 0;
      color: #FFF;
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    #help-me-out .trash-btn-container {
      display: flex;
      padding: 0.625rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      border-radius: 2rem;
      border: 1px solid #000;
      background: #4b4b4b;
      height: 2rem;
      width: 2rem;
    }
    
    #help-me-out .trash-btn-container .trash-btn {
      background: none;
      border: none;
      cursor: pointer;
    }
    `
  );

  var host = document.getElementById("help-me-out-host");
  var root = host.attachShadow({ mode: "open" });
  host.shadowRoot.adoptedStyleSheets.push(sheet);
  var div = document.createElement("div");
  div.className = "root-class";
  div.innerHTML = uiHtml;
  root.appendChild(div);

  if (webcam) {
    const videoElement = document.createElement("video");
    videoElement.id = "helpMeOutwebcam";
    videoElement.srcObject = webcam;
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.style.display = "none";
    videoElement.style.width = "156px";
    videoElement.style.height = "156px";
    videoElement.style.borderRadius = "156px";
    videoElement.style.position = "fixed";
    videoElement.style.border = "#B6B6B6";
    root.appendChild(videoElement);
  } else {
    console.warn("Webcam not enabled.");
  }

  div.addEventListener("click", (e) => {
    videoElement = root.getElementById("helpMeOutwebcam");
    videoElement.style.display = "block";
  });

  stopButton = root.getElementById("helpMeOutstop");
  stopButton.addEventListener("click", stopRecording);
}

async function setUpStream() {
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });

    if (wantsWebcam && wantsAudio) {
      webcam = await navigator.mediaDevices.getUserMedia({ video: true });
      audio = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      });
    } else if (wantsWebcam && !wantsAudio) {
      webcam = await navigator.mediaDevices.getUserMedia({ video: true });
    } else if (!wantsWebcam && wantsAudio) {
      camAudio = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
}

async function startRecording() {
  createUI();
  await setUpStream();

  if (stream) {
    mixedStream = new MediaStream([
      ...stream.getTracks(),
      ...audio.getTracks(),
    ]);
    recorder = new MediaRecorder(mixedStream);
    recorder.ondataavailable = handleDataAvailable;
    recorder.onstop = handleStop;
    recorder.start(200);

    console.log("Recording started");
  } else {
    console.warn("No stream available.");
  }
}

function handleDataAvailable(e) {
  chunks.push(e.data);
}

function stopRecording() {
  recorder.stop();

  console.log("Recording stopped");
}

function handleStop(e) {
  const blob = new Blob(chunks, { type: "video/mp4" });
  chunks = [];
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "Start Recording") {
    wantsWebcam = message.wantsWebcam;
    wantsAudio = message.wantsAudio;
    startRecording();
    sendResponse({ message: "Recording started" });
  }
});
