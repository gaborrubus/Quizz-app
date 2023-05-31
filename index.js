const main = document.querySelector('[data-js="main"]');
const bookmark = document.querySelector('[data-js="question_bookmark_card"]');
const answer = document.querySelector('[data-js="answer_toggle"]');
const answerButton = document.querySelector('[data-js="show_answer_toggle"]');
const hideButton = document.querySelector('[data-js="hide_answer_toggle"]');

answer.addEventListener("click", () => {
  answerButton.classList.toggle("show_answer_active");
  hideButton.classList.toggle("hidden_answer_active");
});

hideButton.addEventListener("click", () => {
  answerButton.classList.toggle("show_answer_active");
  hideButton.classList.toggle("hidden_answer_active");
});

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("question_card_bookmark_active");
});
