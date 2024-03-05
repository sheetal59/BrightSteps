function handleVideoUpload(event) {
    const file = event.target.files[0];
    const uploadArea = document.getElementById('uploadArea');
    uploadArea.classList.add('uploading');
    
    setTimeout(() => {
      uploadArea.classList.remove('uploading');
      const videoElement = document.createElement('video');
      videoElement.src = URL.createObjectURL(file);
      videoElement.controls = true;
      videoElement.style.width = '100%';
      document.getElementById('videoContainer').appendChild(videoElement);
      
      // Add the uploaded video to the history
      const videoHistory = document.getElementById('videoHistory');
      const historyItem = document.createElement('div');
      historyItem.innerHTML = `
        <video src="${URL.createObjectURL(file)}" controls width="150"></video>
      `;
      videoHistory.appendChild(historyItem);
    }, 2000);
  }

  function handleVideoUpload(event) {
    const file = event.target.files[0];
    const uploadArea = document.getElementById('btn');
    uploadArea.classList.add('uploading');
    
    setTimeout(() => {
      uploadArea.classList.remove('uploading');
      const videoElement = document.createElement('video');
      videoElement.src = URL.createObjectURL(file);
      videoElement.controls = true;
      videoElement.style.width = '100%';
      document.getElementById('videoContainer').appendChild(videoElement);
      
      // Add the uploaded video to the history
      const videoHistory = document.getElementById('videoHistory');
      const historyItem = document.createElement('div');
      historyItem.innerHTML = `
        <video src="${URL.createObjectURL(file)}" controls width="150"></video>
      `;
      videoHistory.appendChild(historyItem);
    }, 2000);
  }
  
  
  