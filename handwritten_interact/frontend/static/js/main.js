const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');

// Prevenir el comportamiento por defecto del navegador
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

// Resaltar drop zone cuando se arrastra un archivo sobre ella
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});

// Manejar archivo soltado
dropZone.addEventListener('drop', handleDrop, false);

// Manejar archivo seleccionado
fileInput.addEventListener('change', handleFiles, false);

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    dropZone.classList.add('dragover');
}

function unhighlight() {
    dropZone.classList.remove('dragover');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    if (files instanceof FileList) {
        ([...files]).forEach(previewFile);
    } else if (files.target && files.target.files) {
        ([...files.target.files]).forEach(previewFile);
    }
}

function previewFile(file) {
    if (file.type.startsWith('image/')) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            preview.src = reader.result;
            sendImageToServer(file);
        }
    } else {
        alert('Por favor, selecciona un archivo de imagen.');
    }
}

function sendImageToServer(file) {
    const formData = new FormData();
    formData.append('image', file);

    fetch('/api/process_image', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        result.textContent = `Predicción: ${data.prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
        result.textContent = `Error al procesar la imagen ${error}`;
    });
}