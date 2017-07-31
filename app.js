
function CarShoppingTitle(props) {
	return(<div>
				<h2>{props.title}</h2>
				<p>{props.subtitle}</p>
			</div>);
}

function CarOption(props) {
	return(<div>
				<h2>Choose Options</h2>
				<p>New Only <input type="checkbox" id="coding" name="interest" value="coding" checked/></p>
				<p>Select Type<select></select></p>
			</div>);
}

function BuyButton() {
	return(
		<button>Buy Now</button>
		);
}

function TableTopDetails(props) {
	return(<th>{props.detail}</th>
		);
}

function TableTop(props) {
	return(<tr>
				<TableTopDetails detail = {props.details[0]} />
				<TableTopDetails detail = {props.details[1]} />
				<TableTopDetails detail = {props.details[2]} />
				<TableTopDetails detail = {props.details[3]} /> 
            </tr>
		);
}

function TableBottom(props) {
	return(	<tr>
				<td>2013</td>
	            <td>A</td>
	            <td>$32000</td>
	            <td><BuyButton /></td>
	        </tr>);
}

function CarTable(props) {
	return(	<table>
				<TableTop details = {["Year", "Model", "Price", "Buy"]}/>
				<TableBottom />
				<TableTop details = {["Year", "Model", "Price", "Buy"]}/>
				<TableBottom />
				<TableTop details = {["Year", "Model", "Price", "Buy"]}/>
				<TableBottom />
			</table>);
}

function CarList(props) {
	return(
			<div>
				<h2>{props.header}</h2>
				<ul>
					<CarTable item = {props.items[0]} />					
				</ul>
			</div>
		);
}

function CarShopping(props) {
	return (
				<div>
					<CarShoppingTitle title = "Welcome to React Transportation" subtitle = "The best place to buy vehicles online" />
					<CarOption title = "Choose option" value = {["NotAll", "Cars", "Trucs", "Convertibles"]}/>
					<CarList header = "Cars" year = {["2013", "2011", "2016"]} />
					<CarList header = "Trucks" year = {["2014", "2013"]}/>				
					<CarList header = "Convertibles" year = {["2009", "2010", "2012", "2017"]}/>
				</div>
		);

}

ReactDOM.render(
	<CarShopping active = {true} />,
	document.getElementById("rootOfAllEvil"));





















