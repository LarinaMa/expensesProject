const expensesList = document.getElementById("expenses-list");
const expensesForm = document.getElementById("expenses-form");
const costInput = document.getElementById("cost-input");
// Create an empty array for our expenses
let expenses = [];
// When someone clicks submit:
expensesForm.addEventListener("submit", (e) => {
  // Stop page from refreshing
  e.preventDefault();
  // Grab the value from the input
  let cost = costInput.value;
  console.log(cost);
  // Validate: Fields is empty? Fails==>Don't submit
  if (cost === "") {
    window.alert("Please enter a cost");
    return;
  }
  // Turn the input string into a number
  cost = parseFloat(cost);
  console.log(cost);
  // Validate: Value is a number? Fails==>Don't submit
  if (typeof cost !== "number") {
    window.alert("The cost value must be a number");
    return;
  }
  // Passes => Add new value to expenses array
  expenses.push(cost);
  console.log(expenses);
  // Clear input
  costInput.value = "";
  // Display expenses as a list item
  // 1.Create new <li>
  const li = document.createElement("li");
  // 2.Set the content to the new cost
  li.innerText = cost;
  // 3. Add the <li> to the Ex
  expensesList.appendChild(li);
  console.log("submitted");
});
