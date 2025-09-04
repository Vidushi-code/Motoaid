function verifyRC() {
  const fileInput = document.getElementById('rcUpload');
  if (fileInput.files.length === 0) {
    alert("Please upload your RC document first.");
    return;
  }

  const file = fileInput.files[0];
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

  if (!allowedTypes.includes(file.type)) {
    alert("Invalid file type. Please upload JPG, PNG, or PDF only.");
    return;
  }

  document.getElementById('loader').style.display = 'block';

  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    alert("RC Verified Successfully ✅");
    document.getElementById('problem-selection').style.display = 'block';
  }, 3000);
}

function showform() {
  document.getElementById('location-form').style.display = 'block';
}

function submitfullproblem() {
  const problem = document.getElementById("problem").value;
  const pincode = document.getElementById(" pincode").value.trim();
  const state = document.getElementById(" state ").value;
  const highway = document.getElementById("highway").value.trim();

  if (!problem || !pincode || !state || !highway) {
    alert("Please fill all required fields before submitting.");
    return;
  }
  
  alert("Your request has been submitted successfully. Help is on the way!");
}
  function submitReview(event) {
  event.preventDefault();

  const name = document.getElementById("reviewer-name").value;
  const rating = document.getElementById("reviewer-rating").value;
  const text = document.getElementById("review-text").value;

  // Create a new review element
  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");

  reviewDiv.innerHTML = `
    <h4>${name}</h4>
    <p>${rating}</p>
    <p>${text}</p>
  `;

  // Append to review list
  document.getElementById("review-list").appendChild(reviewDiv);

  // Reset form
  document.getElementById("review-form").reset();
}
