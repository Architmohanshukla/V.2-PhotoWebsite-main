// Upload Modal Handler
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('uploadModal');
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  const uploadForm = document.getElementById('uploadForm');
  const fileList = document.getElementById('fileList');
  const uploadStatus = document.getElementById('uploadStatus');
  const closeModal = document.querySelector('.close-modal');
  const categorySelect = document.getElementById('category');

  let selectedFiles = [];

  // Close modal on X click
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    uploadStatus.textContent = '';
    uploadStatus.className = 'upload-status';
  });

  // Close modal on outside click
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      uploadStatus.textContent = '';
      uploadStatus.className = 'upload-status';
    }
  });

  // Prevent default drag behavior
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.add('dragover');
  });

  uploadArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.remove('dragover');
  });

  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.remove('dragover');

    const files = e.dataTransfer.files;
    handleFiles(files);
  });

  // Click to select files
  uploadArea.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
  });

  function handleFiles(files) {
    selectedFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    
    if (selectedFiles.length === 0) {
      uploadStatus.textContent = 'Please select valid image files';
      uploadStatus.className = 'upload-status error';
      return;
    }

    displayFileList();
  }

  function displayFileList() {
    fileList.innerHTML = '';
    selectedFiles.forEach((file, index) => {
      const fileItem = document.createElement('div');
      fileItem.className = 'file-item';
      fileItem.innerHTML = `
        <span>${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)</span>
        <button type="button" class="remove-file" data-index="${index}">Remove</button>
      `;
      fileList.appendChild(fileItem);
    });

    document.querySelectorAll('.remove-file').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const index = parseInt(btn.dataset.index);
        selectedFiles.splice(index, 1);
        displayFileList();
      });
    });
  }

  uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (selectedFiles.length === 0) {
      uploadStatus.textContent = 'No files selected';
      uploadStatus.className = 'upload-status error';
      return;
    }

    uploadStatus.textContent = 'Processing files...';
    uploadStatus.className = 'upload-status loading';
    const submitBtn = uploadForm.querySelector('.submit-btn');
    submitBtn.disabled = true;

    try {
      let successCount = 0;
      const category = categorySelect.value === 'auto' ? 'misc' : categorySelect.value;
      const uploadedFiles = [];

      for (const file of selectedFiles) {
        try {
          const base64Data = await fileToBase64(file);
          uploadedFiles.push({
            name: file.name,
            size: file.size,
            type: file.type,
            category: category,
            data: base64Data
          });
          successCount++;
        } catch (error) {
          console.error(`Error processing ${file.name}:`, error);
        }
      }

      if (successCount > 0) {
        // Store in localStorage as backup and for reference
        const existingUploads = JSON.parse(localStorage.getItem('portfolioUploads') || '[]');
        const newUploads = existingUploads.concat(uploadedFiles.map(f => ({
          name: f.name,
          category: f.category,
          uploadedAt: new Date().toISOString(),
          size: f.size
        })));
        localStorage.setItem('portfolioUploads', JSON.stringify(newUploads.slice(-50))); // Keep last 50

        uploadStatus.innerHTML = `
          <div style="text-align: left; padding: 10px;">
            <p>✓ <strong>${successCount} image(s) ready to upload!</strong></p>
            <p style="font-size: 0.85rem; color: #ccc; margin: 10px 0;">
              <strong>Next Step:</strong> Download the image files to your computer, then:
            </p>
            <ol style="font-size: 0.85rem; color: #ccc; margin: 5px 0;">
              <li>Go to your project folder: <code>uploaded-images/${category}/</code></li>
              <li>Paste the files there</li>
              <li>Commit and push to your repository</li>
              <li>Redeploy on Netlify</li>
            </ol>
            <button type="button" onclick="downloadImages('${category}')" style="
              margin-top: 10px;
              padding: 8px 16px;
              background-color: #2196F3;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            ">📥 Download Selected Images</button>
          </div>
        `;
        uploadStatus.className = 'upload-status success';
        
        // Auto-close after 5 seconds for demo
        setTimeout(() => {
          modal.style.display = 'none';
          uploadStatus.textContent = '';
          uploadStatus.className = 'upload-status';
        }, 5000);
      } else {
        uploadStatus.textContent = 'Failed to process images';
        uploadStatus.className = 'upload-status error';
      }

      selectedFiles = [];
      fileList.innerHTML = '';
      fileInput.value = '';
    } catch (error) {
      console.error('Upload error:', error);
      uploadStatus.textContent = 'Error: ' + error.message;
      uploadStatus.className = 'upload-status error';
    } finally {
      submitBtn.disabled = false;
    }
  });

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  }

  // Global function to download images
  window.downloadImages = function(category) {
    const uploads = JSON.parse(localStorage.getItem('portfolioUploads') || '[]');
    const latestUploads = uploads.filter(u => u.category === category).slice(-5);
    
    if (latestUploads.length === 0) {
      alert('No images found for this category');
      return;
    }

    alert(`📁 To complete the upload:\n\n1. Create folder: uploaded-images/${category}/\n2. Add your image files there\n3. Commit & push to GitHub\n4. Netlify will auto-deploy\n\nFiles tracked: ${latestUploads.length}`);
  };
});

