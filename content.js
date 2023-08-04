// Select the node that will be observed for mutations
let targetNode = document.querySelector('body');

// Options for the observer (which mutations to observe)
let config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
let callback = function(mutationsList, observer) {
  // Try to select the "Next" and "Previous" buttons
  let nextButton = document.querySelector('.ytp-next-button.ytp-button');
  let prevButton = document.querySelector('.ytp-prev-button.ytp-button');

  if (nextButton !== null && prevButton !== null) {
    // Increase the size of the buttons
    nextButton.style.width = '100%';
    nextButton.style.height = '100%';
    prevButton.style.width = '100%';
    prevButton.style.height = '100%';

    // Change the background color of the buttons
    nextButton.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'; // red with 60% transparency
    prevButton.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'; // red with 60% transparency

    // Create new divs to hold each button
    let nextDiv = document.createElement('div');
    let prevDiv = document.createElement('div');

    // Style the divs to appear at the right and left edges of the screen
    nextDiv.style.position = 'fixed';
    nextDiv.style.zIndex = '9999';
    nextDiv.style.width = '100px';
    nextDiv.style.height = '33.33vh'; // 1/3 of the viewport height
    nextDiv.style.right = '0';
    nextDiv.style.top = '33.33vh'; // Start from 1/3 of the viewport height
    nextDiv.style.display = 'flex';
    nextDiv.style.alignItems = 'center';
    nextDiv.style.justifyContent = 'center';

    prevDiv.style.position = 'fixed';
    prevDiv.style.zIndex = '9999';
    prevDiv.style.width = '100px';
    prevDiv.style.height = '33.33vh'; // 1/3 of the viewport height
    prevDiv.style.left = '0';
    prevDiv.style.top = '33.33vh'; // Start from 1/3 of the viewport height
    prevDiv.style.display = 'flex';
    prevDiv.style.alignItems = 'center';
    prevDiv.style.justifyContent = 'center';

    // Remove the buttons from their current parent node
    nextButton.parentNode.removeChild(nextButton);
    prevButton.parentNode.removeChild(prevButton);

    // Add the buttons to the new divs
    nextDiv.appendChild(nextButton);
    prevDiv.appendChild(prevButton);

    // Add click event listeners to the divs
    nextDiv.addEventListener('click', () => nextButton.click());
    prevDiv.addEventListener('click', () => prevButton.click());

    // Add the new divs to the body
    document.body.appendChild(nextDiv);
    document.body.appendChild(prevDiv);

    observer.disconnect(); // Stop observing once the buttons are found
  }
};

// Create an observer instance linked to the callback function
let observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
