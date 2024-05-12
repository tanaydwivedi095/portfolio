/** @format */

const btech_card = document.querySelector("#btech-card");
const btech_card_text = document.querySelector("#btech-card-text");
btech_card.addEventListener("mouseover", () => {
  btech_card_text.innerHTML =
    '<span>Pranveer Singh Institute of Technology</span><span style="display:block">Acquired 76.8%</span>';
});
btech_card.addEventListener("mouseout", () => {
  btech_card_text.innerHTML =
    '<span>Information Technology</span><span style="display:block">December 2020 - Ongoing</span>';
});

const intermediate_card = document.querySelector("#intermediate-card");
const intermediate_card_text = document.querySelector(
  "#intermediate-card-text"
);
intermediate_card.addEventListener("mouseover", () => {
  intermediate_card_text.innerHTML =
    '<span>Woodbine Gardenia School</span><span style="display:block">Acquired 78.5%</span>';
});
intermediate_card.addEventListener("mouseout", () => {
  intermediate_card_text.innerHTML =
    '<span>Physics, Chemistry, Mathematics</span><span style="display:block">April, 2019 - March, 2020</span>';
});

const highschool_card = document.querySelector("#highschool-card");
const highschool_card_text = document.querySelector("#highschool-card-text");
highschool_card.addEventListener("mouseover", () => {
  highschool_card_text.innerHTML =
    '<span>Woodbine Gardenia School</span><span style="display:block">Acquired 84.83%</span>';
});
highschool_card.addEventListener("mouseout", () => {
  highschool_card_text.innerHTML =
    '<span>Science</span><span style="display:block">April, 2017 - March, 2018</span>';
});

const portfolio_card = document.querySelector("#portfolio");
const portfolio_card_text = document.querySelector("#portfolio-text");
portfolio_card.addEventListener("mouseover", () => {
  portfolio_card_text.innerHTML =
    "<span>Developed an AI-powered skin lesion image classification system that utilizes transfer learning with a combined CNN/ML/Vision Transformer architecture. The system achieved accuracy of 94.37% in classification of malignant and benign lesions, and it features a user-friendly UI for seamless interaction.</span>";
});
portfolio_card.addEventListener("mouseout", () => {
  portfolio_card_text.innerHTML =
    '<span style="display: block">Domain: Web Development</span><span style="display: block">Technology: HTML5, CSS3, JavaScript, Bootstrap</span><span style="display: block">May 2024 - May 2024</span>';
});

const streamlit_project_card = document.querySelector("#streamlit-project");
const streamlit_project_card_text = document.querySelector(
  "#streamlit-project-text"
);
streamlit_project_card.addEventListener("mouseover", () => {
  streamlit_project_card_text.innerHTML =
    "<span>Developed an AI-powered skin lesion image classification system that utilizes transfer learning with a combined CNN/ML/Vision Transformer architecture. The system achieved accuracy of 94.37% in classification of malignant and benign lesions, and it features a user-friendly UI for seamless interaction.</span>";
});
streamlit_project_card.addEventListener("mouseout", () => {
  streamlit_project_card_text.innerHTML =
    '<span style="display: block">Domain: Machine Learning</span><span style="display: block">Technology: Python, Streamlit</span><span style="display: block">November 2023 - December 2023</span>';
});

const skin_cancer_using_lvit = document.querySelector(
  "#skin-cancer-using-lvit"
);
const skin_cancer_using_lvit_text = document.querySelector(
  "#skin-cancer-using-lvit-text"
);
skin_cancer_using_lvit.addEventListener("mouseover", () => {
  skin_cancer_using_lvit_text.innerHTML =
    "<span>Developed an AI-powered skin lesion image classification system that utilizes transfer learning with a combined CNN/ML/Vision Transformer architecture. The system achieved accuracy of 94.37% in classification of malignant and benign lesions, and it features a user-friendly UI for seamless interaction.</span>";
});
skin_cancer_using_lvit.addEventListener("mouseout", () => {
  skin_cancer_using_lvit_text.innerHTML =
    '<span style="display: block">Domain: Machine Learning</span><span style="display: block">Technology: Python, PyTorch</span><span style="display: block">September 2023 - November 2023 </span>';
});

const skin_cancer_using_hybrid_model = document.querySelector(
  "#skin-cancer-using-hybrid-model"
);
const skin_cancer_using_hybrid_model_text = document.querySelector(
  "#skin-cancer-using-hybrid-model-text"
);
skin_cancer_using_hybrid_model.addEventListener("mouseover", () => {
  skin_cancer_using_hybrid_model_text.innerHTML =
    "<span>Developed an AI-powered skin lesion image classification system that utilizes transfer learning with a combined CNN/ML/Vision Transformer architecture. The system achieved accuracy of 94.37% in classification of malignant and benign lesions, and it features a user-friendly UI for seamless interaction.</span>";
});
skin_cancer_using_hybrid_model.addEventListener("mouseout", () => {
  skin_cancer_using_hybrid_model_text.innerHTML =
    '<span style="display: block">Domain: Machine Learning</span><span style="display: block">Technology: Python, Tensorflow, SciPy</span><span style="display: block">February, 2023 - June 2023</span>';
});

const movie_recommendation_system = document.querySelector(
  "#movie-recommendation-system"
);
const movie_recommendation_system_text = document.querySelector(
  "#movie-recommendation-system-text"
);
movie_recommendation_system.addEventListener("mouseover", () => {
  movie_recommendation_system_text.innerHTML =
    "<span>Utilizes cosine similarity and diverse parameters like Director, Production, Genre, and Release Year to identify similar movies. This ML-powered system delivers personalized recommendations, enhancing user experience and engagement.</span>";
});
movie_recommendation_system.addEventListener("mouseout", () => {
  movie_recommendation_system_text.innerHTML =
    '<span style="display: block">Domain: Machine Learning</span><span style="display: block">Technology: Python, Scikit-learn</span><span style="display: block">September 2022 - October 2022</span>';
});

const stock_price_prediction = document.querySelector(
  "#stock-price-prediction"
);
const stock_price_prediction_text = document.querySelector(
  "#stock-price-prediction-text"
);
stock_price_prediction.addEventListener("mouseover", () => {
  stock_price_prediction_text.innerHTML =
    "<span>Built a CNN-LSTM model for stock price prediction, leveraging diverse parameters like opening price. This versatile model accurately predicts prices across various companies, providing valuable insights for investors</span>";
});
stock_price_prediction.addEventListener("mouseout", () => {
  stock_price_prediction_text.innerHTML =
    '<span style="display: block">Domain: Machine Learning</span><span style="display: block">Technology: Python, Scikit-learn</span><span style="display: block">August 2022 - September 2022</span>';
});

const paper1_card = document.querySelector("#paper1-card");
const paper1_card_text = document.querySelector("#paper1-card-text");
paper1_card.addEventListener("mouseover", () => {
  paper1_card_text.innerHTML =
    "<span>Research related to a classification model utilizing the prowess of both CNN and ML to provide the most efficient solution for classifying images in binary category.</span>";
});
paper1_card.addEventListener("mouseout", () => {
  paper1_card_text.innerHTML =
    '<span>Accepted</span><span style="display: block;">June 2023 - April 2024</span>';
});

const paper2_card = document.querySelector("#paper2-card");
const paper2_card_text = document.querySelector("#paper2-card-text");
paper2_card.addEventListener("mouseover", () => {
  paper2_card_text.innerHTML =
    "<span>Research related to exploring solutions of classifying lesion images into their respective categories using the power of Vision Image Transformer.</span>";
});
paper2_card.addEventListener("mouseout", () => {
  paper2_card_text.innerHTML =
    '<span>Under Review</span><span style="display: block;">September 2023 - In progress</span>';
});
