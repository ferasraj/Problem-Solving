let lunches = [];
// menuArray that takes an array
// lunchItem a string

function addLunchToEnd(menuArray, lunchItem) {
  menuArray.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return menuArray;
}
function addLunchToStart(menuArray, lunchItem) {
  menuArray.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return menuArray;
}
function removeLastLunch(menuArray) {
  if (menuArray.length === 0) {
    console.log("No lunches to remove.");
    return menuArray;
  }
  const removedItem = menuArray.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return menuArray;
}

function removeFirstLunch(menuArray) {
  if (menuArray.length === 0) {
    console.log("No lunches to remove.");
    return menuArray;
  }
  const removedItem = menuArray.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return menuArray;
}

function getRandomLunch(menuArray) {
  if (menuArray.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * menuArray.length);
  const randomLunch = menuArray[randomIndex];
  console.log(`Randomly selected lunch: ${randomLunch}`);
  return randomLunch;
}
function showLunchMenu(menuArray) {
  if (menuArray.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  const menuItems = menuArray.join(", ");
  console.log(`Menu items: ${menuItems}`);
}
// Example usage:
addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Burger");
addLunchToStart(lunches, "Salad");
showLunchMenu(lunches); // Output: Menu items: Salad, Pizza, Burger
removeLastLunch(lunches); // Output: Burger removed from the end of the lunch menu.
removeFirstLunch(lunches); // Output: Salad removed from the start of the lunch menu.
showLunchMenu(lunches); // Output: Menu items: Pizza
getRandomLunch(lunches); // Randomly selected lunch: Pizza
