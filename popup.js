// Get the reference to the "close-btn" element
const closeBtn = document.getElementById("close-btn");

// Add a click event listener to the "close-btn"
closeBtn.addEventListener("click", () => {
  // Retrieve all open popup windows of the extension and close them
  chrome.extension.getViews({ type: "popup" }).forEach((win) => {
    win.close();
  });
});

// Get references to the "fullscreen" and "current-tab" buttons and their images
const fullscreen = document.getElementById("full-screen-button");
const currentTab = document.getElementById("current-tab-button");
const currentTabImage = currentTab.querySelector("img");
const fullScreenImage = fullscreen.querySelector("img");

// Initialize activeButton and notActiveButton with default values
let activeButton = currentTab;
let notActiveButton = fullscreen;

// Add a click event listener to the "fullscreen" button
fullscreen.addEventListener("click", () => {
  // Set "fullscreen" as the active button and "current-tab" as not active
  activeButton = fullscreen;
  notActiveButton = currentTab;

  // Call the setButtonClasses function to update button styles
  setButtonClasses(activeButton, notActiveButton);
});

// Add a click event listener to the "current-tab" button
currentTab.addEventListener("click", () => {
  // Set "current-tab" as the active button and "fullscreen" as not active
  activeButton = currentTab;
  notActiveButton = fullscreen;

  // Call the setButtonClasses function to update button styles
  setButtonClasses(activeButton, notActiveButton);
});

// Function to update button classes and images based on active button
function setButtonClasses(activeButton, notActiveButton) {
  // Add the "active-button" class to the active button and remove it from the inactive button
  activeButton.classList.add("active-button");
  notActiveButton.classList.remove("active-button");

  // Update the source (src) attribute of images based on the active button
  if (activeButton === currentTab) {
    currentTabImage.src = "./assets/current-tab-active.svg";
    fullScreenImage.src = "./assets/full-screen.svg";
  } else {
    currentTabImage.src = "./assets/current-tab.svg";
    fullScreenImage.src = "./assets/full-screen-active.svg";
  }
}

let wantsWebcam = false;
let wantsAudio = false;

const webcamCheckbox = document.getElementById("camera");
const audioCheckbox = document.getElementById("microphone");

const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
  if (webcamCheckbox.checked && audioCheckbox.checked) {
    wantsWebcam = true;
    wantsAudio = true;
  } else if (webcamCheckbox.checked && !audioCheckbox.checked) {
    wantsWebcam = true;
    wantsAudio = false;
  } else if (!webcamCheckbox.checked && audioCheckbox.checked) {
    wantsWebcam = false;
    wantsAudio = true;
  } else {
    wantsWebcam = false;
    wantsAudio = false;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(
      activeTab.id,
      {
        action: "Start Recording",
        tabId: activeTab.id,
        wantsWebcam: wantsWebcam,
        wantsAudio: wantsAudio,
      },
      function (response) {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
        } else {
          console.log(response.message);
        }
      }
    );
  });
});
