window.addEventListener("DOMContentLoaded", setup);

async function setup() {
	// DONE: Fetch products from the API
	const products = await getProducts("/products");

	//No point in proceeding if we don't have data.
	if(products == null){
		return;
	}
	//Proceed

	// TODO: Sort the products by price (low to high by default)

	// DONE: Render the products to the page in a responsive grid
	const productParent = document.getElementById("products");
	render(productParent, sort(products));
	

	//DONE : Implement search functionality
	const searchBar = document.getElementById('search-bar');
	searchBar.addEventListener('input', (e) => {
		let searchReturn = search(products, e.target.value);
		render(render(productParent, searchReturn));
	});
	 


	// DONE: Use the refactored sorting function for dynamic sort order
}


// API Endpoint: GET /products
// Returns: Array of product objects with id, title, price (in cents), and array of images
// Error handling, will return an empty array if something went wrong
async function getProducts(endpoint){
	try {
    const data = await fetch(endpoint);
	const prods = await data?.json();

	//data doesnt exist, move into try catch.
	if (prods == null) {
		throw "Data set empty";
	}
	return prods;
	}
	// BONUS: Add error handling for the fetch request
	catch (error){
		//steps I would take on prod code
		// 1. write to external error log (grafana or similar)
		// 2. wrtie internal error log
		// 3. send end-user non security compromising msg
		alert(error);
		return null;
	}
}
//Render Products
//Takes an array of products and a parent element, returns nothing
function render(parent, products){
	//destroy any children for re renders
	while (parent?.firstChild) {
    parent.removeChild(parent.firstChild);
  	}

	if (!products?.length){return;} //Don't need to render on 0 prods

	//create a container that has image and text data, then append to our grid parent
	for(let i = 0; i < products.length; i++){
		//container
		const div = document.createElement("div");

		//content
		const img = document.createElement("img");
		img.src = products[i].images[0].src;
		div.appendChild(img);

		const h2 = document.createElement("h2");
		h2.textContent = products[i].title;
		div.appendChild(h2);

		const price = document.createElement("h3");
		price.textContent = formatPrice(products[i].price);
		div.appendChild(price);

		//push
		parent.appendChild(div);
	}
	return;
}

//Render Helper Functions
//Takes a price in cents (int) and returns a formatted string in dollars to display to the user
//Expects dollar ammount to be > 0
function formatPrice(price){
	let str = price.toString();
	const str1 = str.slice(0, str.length-2);
	const str2 = str.slice(str.length-2);
	return str = "$" + str1 + "." + str2;
	
}
//End Render

//Search
function search(products, substring){
	//could use .fliter for more readable code. 
	let prods = [];
	for (let i = 0; i < products.length; i ++){
		if (products[i].title.includes(substring)){
			prods.push(products[i]);
		}
	}
	return prods;
}


/**
 * Sorts an array of products by price in ascending or descending order.
 *
 * Your task is to refactor and improve this function:
 * - Make it clean, modern, and readable.
 * - Allow sorting in either "asc" or "desc" order using the `sortOrder` parameter.
 * - Ensure the output remains the same.
 * - A plus, but you do not need to use the messyFunction() function.
 *
 * Requirements:
 * - Refactor the code to use modern JavaScript syntax and best practices.
 * - Rename variables and functions to be more descriptive.
 * - Fill in the missing parts of the JSDoc comments.
 *
 * Feel free to leave comments explaining your thought process.
 *
 * @param {Array} products - Array of product objects, each with a `price` property.
 * @param {string} sortOrder - Either "asc" for ascending or "desc" for descending sort order.
 * @returns {Array} - A new array of products sorted by price in the specified order.
 */
function sort(products, sortOrder) { //renaming data1 and data2 to reflect what they actually are
	//Original func appears to be swap sort, double nested for loop: O(n^2), could probably do better with quick sort or another lower time complexity algo

	//iterating through data1 then pushing data1[i] to t is not needed. Adds O(n) complexity.
	// let t = [];
	// for (let i = 0; i < data1.length; i++) {
	// 	t.push(data1[i]);
	// }
	let prods = [...products];

	switch(sortOrder){
		case "asc":
			prods.sort((a, b) => a.price - b.price);
			break;
		case "desc":
			prods.sort((a, b) => b.price - a.price);
			break;
		default:
			prods.sort((a, b) => a.price - b.price);
			break;
	}

			// if ((sortOrder === "asc" && products[i].price > products[j].price) || (sortOrder === "desc" && products[i].price < products[j].price)) { 
			//this introduces overhead of checking every loop if we are asc, or desc, wrapping our loop in a case statement is simplier, cleaner, and more readable.

				// let tmp = products[i];
				// products[i] = products[j];
				// products[j] = tmp;

				//can achieve the same thing but make it cleaner and less confusing using helper function and better syntax for readability
				//swap(products, i, j);

	return prods;	
}

//swap(a,b) would be clean, but need to pass array by ref to avoid assigns in our main sort func
function swap(array, a, b){
	[array[a], array[b]] = [array[b], array[a]];
}

//sort helpers for cleaner modular code
// Ending up using ES6 .sort for more modern readable code, leaving this code in since this is where my thoughts went
// function sortAsc(products){
// 	for (let i = 0; i < products.length; i++) {
// 		for (let j = i + 1; j < products.length; j++) {
// 			if(products[i].price > products[j].price){
// 				swap(products, i, j);
// 			}
// 		}
// 	}
// }
// function sortDesc(products){
// 	for (let i = 0; i < products.length; i++) {
// 		for (let j = i + 1; j < products.length; j++) {
// 			if(products[i].price < products[j].price){
// 				swap(products, i, j);
// 			}
// 		}
// 	}
// }
