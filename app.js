// class MyAppComponent extends React.Component {
// 	render() {
// 		return(
// 				<h1>Hello again my evil minions</h1>
// 			);
// 	}
// }

// ReactDOM.render(
// 	<MyAppComponent />,
// 	document.getElementById("rootOfAllEvil"));

// --------------------------------------------

// var num = 0;
// var item = {
// 	name: "cheese",
// 	price: 3
// }

// var inflation = 2;


// function updateNum() {
// 	ReactDOM.render(
// 		<div>{item.name}: {item.price*inflation}</div>,
// 		document.getElementById("rootOfAllEvil")
// 		);
// }

// setInterval(updateNum, 100);

// --------------------------------------------

// var product = {name:"apple",stock:0}

// if(product.stock > 0){
//     var element = <h1>The product named {product.name} is not in stock</h1>
// }
// else{
//     var element = <h1>The product named {product.name} and has {product.stock} units in stock</h1>
// }

// ReactDOM.render(
//     element,
//     document.getElementById("rootOfAllEvil")
// )

// --------------------------------------------
// var element = <h1>Hello {calculateArea(2,5) }</h1>

// function calculateArea(x,y) {
// 	return x * y;
// }

// ReactDOM.render(
// 	element,
// 	document.getElementById("rootOfAllEvil"));

// --------------------------------------------

// Class Components have state, lifecycle methods and properties
// Functional Components only have properties 

// function HelloWorld(props) {
// 	return <h1>message: {props.message * props.numberArray[props.index]}</h1>
// }

// ReactDOM.render(
// 	<HelloWorld message = "3" index = "3" numberArray = {[1,2,9,7,5]} />,
// 	document.getElementById("rootOfAllEvil"));


// --------------------------------------------


function ShoppingTitle(props) {
	return(<div>
		<h1>{props.title}</h1>
		<h2>Total number of items: {props.numItems}</h2>
	</div>);
}

function ListItem(props) {
	return(<li>{props.item}</li>);
}

function ShoppingList(props) {
	return(
			<div>
				<h3>{props.header}</h3>
				<ol>
					<ListItem item = {props.items[0]} />
					<ListItem item = {props.items[1]} />
					<ListItem item = {props.items[2]} />					
				</ol>
			</div>
		);
}

// function ShoppingApp(props) {
// 	if (props.active) {
// 		return (
// 				<div>
// 					<h1>This is active</h1>
// 					<ShoppingTitle title = "My shopping list" numItems = "9" />
// 					<ShoppingList header = "Food" items = {["oranges", "apples", "juice"]} />
// 					<ShoppingList header = "Clothes" items = {["denim", "pants", "shirt"]} />				
// 					<ShoppingList header = "Stuff" items = {["pen", "glue", "paper"]} />
// 				</div>
// 			);
// 	} else {
// 		return (<h1>This is not active</h1>
// 			);
// 	}
// }


function ShoppingApp(props) {
	return (
			props.active &&
				<div>
					<h1>This is active</h1>
					<ShoppingTitle title = "My shopping list" numItems = "9" />
					<ShoppingList header = "Food" items = {["oranges", "apples", "juice"]} />
					<ShoppingList header = "Clothes" items = {["denim", "pants", "shirt"]} />				
					<ShoppingList header = "Stuff" items = {["pen", "glue", "paper"]} />
				</div>
		);

	// if (props.active) {
	// 	return (
	// 			<div>
	// 				<h1>This is active</h1>
	// 				<ShoppingTitle title = "My shopping list" numItems = "9" />
	// 				<ShoppingList header = "Food" items = {["oranges", "apples", "juice"]} />
	// 				<ShoppingList header = "Clothes" items = {["denim", "pants", "shirt"]} />				
	// 				<ShoppingList header = "Stuff" items = {["pen", "glue", "paper"]} />
	// 			</div>
	// 		);
	// } else {
	// 	return (<h1>This is not active</h1>
	// 		);
	// }
}

ReactDOM.render(
	<ShoppingApp active = {true} />,
	document.getElementById("rootOfAllEvil"));

// --------------------------------------------






















