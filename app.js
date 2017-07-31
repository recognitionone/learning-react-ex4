
function CarShoppingTitle(props) {
	return(<div>
				<h2 className="title intro">{props.title}</h2>
				<p>{props.subtitle}</p>
			</div>);
}

function CarShoppingOption(props) {
	return(<div>
				<h2 className="title">Choose Options</h2>
				<p>New Only <input type="checkbox" id="coding" name="interest" value="coding" checked/></p>
				<br/>
				<span>Select type</span>
				<span>
					<select>
						<option value="all">All</option>
						<option value="cars">Cars</option>
						<option value="trucks">Trucks</option>
						<option value="convertibles">Convertibles</option>
					</select>
				</span>
			</div>);
}

function DisplayGrid(props) {
	return(
			<div>
				<table>
					<thead>
						<tr>
							<th>Year</th>
							<th>Model</th>
							<th>Price</th>
							<th>Buy</th>	
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{props.year}</td>
							<td>{props.model}</td>
							<td>{props.price}</td>
							<td><button>Buy</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
}

function Cars(props) {
	return(
			<div>
				<h2 className="title">{props.header}</h2>
				<DisplayGrid year="2013" model="A" price="32000" />
			</div>
		);
}

function CarShopping(props) {
	return (
				<div>
					<CarShoppingTitle title = "Welcome to React Transportation" subtitle = "The best place to buy vehicles online" />
					<CarShoppingOption title = "Choose option" value = {["NotAll", "Cars", "Trucs", "Convertibles"]}/>
					<Cars header="Cars"/>
					<Cars header="Cars"/>
					<Cars header="Cars"/>
				</div>
		);

}

ReactDOM.render(
	<CarShopping active = {true} />,
	document.getElementById("rootOfAllEvil"));





















