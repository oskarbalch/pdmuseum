// script.js
const imageGrid = document.getElementById('image-grid');
const numRows = 500;
const numCols = 50;
const numImages = numRows * numCols;

// Replace these with the actual filenames of your images
const imageFilenames = [
    'myimage1.gif',
    '14299f931d55f126d82d9e6a4afea39c.gif',
    'screen.gif',
    'babyaliennoway.gif',
    'cartmanpoop.gif',
];

// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Create a shuffled order of images for each row
const rows = [];
for (let i = 0; i < numRows; i++) {
    const shuffledRow = shuffleArray(imageFilenames.slice()); // Create a copy of the array and shuffle it
    rows.push(shuffledRow);
}

// Generate the grid
for (let i = 0; i < numRows; i++) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('image-row');
    
    for (let j = 0; j < numCols; j++) {
        const imageIndex = j % rows[i].length;
        const imageElement = document.createElement('div');
        imageElement.classList.add('image');
        const img = document.createElement('img');
        img.src = rows[i][imageIndex];
        img.alt = 'Image ' + (imageIndex + 1);
        imageElement.appendChild(img);
        rowElement.appendChild(imageElement);
    }
    
    imageGrid.appendChild(rowElement);
}
