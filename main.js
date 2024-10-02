const reviewsSection = document.querySelector(".reviewsSection");

const reviewContent = reviewsSection.querySelector(".reviewText");
const previousButton = reviewsSection.querySelector(".reviewPreviousBtn");
const nextButton = reviewsSection.querySelector(".reviewNextBtn");

const reviewsArray = [
    "REVIEW0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, minus, deserunt labore officia facilis porro autem debitis impeditblanditiis ut eum id error? Tempore, sint",
    "REVIEW1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, minus, deserunt labore officia facilis porro autem debitis impeditblanditiis ut eum id error? Tempore, sint",
    "REVIEW2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,minus, deserunt labore officia facilis porro autem debitis impeditblanditiis ut eum id error? Tempore, sint.",
    "REVIEW3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,minus, deserunt labore officia facilis porro autem debitis impeditblanditiis ut eum id error? Tempore, sint.",
];


nextButton.addEventListener("click", handleClickNextBtn) 
previousButton.addEventListener("click", handleClickPrevBtn) 



let currentReviewIndex = 0;
function updateReviewContent() {
    reviewContent.textContent = reviewsArray[currentReviewIndex];
}

function handleClickNextBtn() {

    if (currentReviewIndex === reviewsArray.length - 1) return
    currentReviewIndex = currentReviewIndex + 1;
    updateReviewContent() 

} 

function handleClickPrevBtn() {

    if (currentReviewIndex === 0) return
    currentReviewIndex = currentReviewIndex - 1;
    updateReviewContent() 
} 

 updateReviewContent()