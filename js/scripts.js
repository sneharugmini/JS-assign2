// constants for query selector
const customColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const customNumberInput = document.querySelector('#customNumber');
const studentId = document.querySelector('#myStudentId');
const imageSelect = document.querySelector('#imageSelect');
const selectedImage = document.querySelector('#selectedImage');
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);

    if (userInput >= 0 && userInput <= 100) {
        studentId.textContent = `Student ID: 200533731`;
        document.body.style.backgroundColor = getColorBasedOnInput(userInput);
    } else {
        alert('Please enter a number between 0 and 100.');
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomInput = Math.floor(Math.random() * 100) + 1;
    document.body.style.backgroundColor = getColorBasedOnInput(randomInput);
}

// function to generate options for select list
function addList() {
     // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}
    imageSelect.innerHTML = '<option value="">Please choose…</option>';

    for (let i = 0; i < images.length; i++) {
        const option = document.createElement('option');
        option.value = images[i];
        option.textContent = images[i];
        imageSelect.appendChild(option);
    }


// function to change image
function changeImage() {
    const selectedOption = imageSelect.value;
    studentId.textContent = 'Student ID: 200533731'; // Replace with your actual student ID
    document.body.style.backgroundImage = `url(img/${selectedOption})`;
}

// Helper function to get color based on user input
function getColorBasedOnInput(input) {
    if (input < 0 || input > 100) {
        return 'red';
    } else if (input >= 0 && input <= 20) {
        return 'green';
    } else if (input > 20 && input <= 40) {
        return 'blue';
    } else if (input > 40 && input <= 60) {
        return 'orange';
    } else if (input > 60 && input <= 80) {
        return 'purple';
    } else {
        return 'yellow';
    }
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// event listeners for on change event of select
addList();
