
function CarShoppingTitle(props) {
	return(<div>
				<h2 className="title">{props.title}</h2>
				<p className="text">{props.subtitle}</p>
			</div>);
}

function CarShoppingOption(props) {
	return(<div>
				<h2 className="title">Choose Options</h2>
				<p className="text">New Only <input 
								className="checkbox"
								type="checkbox" 
								id="coding" 
								name="interest" 
								value="coding" 
								defaultChecked/></p>
				<div>
				<span className="text">Select type</span>
				
				
				<select className="select">
					<option value={props.value[0]}>{props.value[0]}</option>
					<option value={props.value[1]}>{props.value[1]}</option>
					<option value={props.value[2]}>{props.value[2]}</option>
					<option value={props.value[3]}>{props.value[3]}</option>
				</select>
				
				</div>
			</div>);
}

function DisplayTable(props) {
	return(
			<div className="div-table">
				<table className="table">
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
							<td>{props.feature.year}</td>
							<td>{props.feature.model}</td>
							<td>${props.feature.price}</td>
							<td><button>Buy</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
}

function Cars(props) {
	console.log(props);
	return(
			<div>
				<h2 className="title">{props.header}</h2>
				{props.parameters.map(object => <DisplayTable feature={object} key={object.id}/>)}
			</div>
		);
}

function CarShopping(props) {
	const cars = [
		{year:2113, model:"1A", price:"132000", id:"0"},
		{year:2014, model:"B", price:"32000", id:"1"},
		{year:2015, model:"C", price:"32000", id:"2"},
	]

	const trucks = [
		{year:2113, model:"1A", price:"132000", id:"0"},
		{year:2014, model:"B", price:"32000", id:"1"},
		{year:2015, model:"C", price:"32000", id:"2"},
	]

	const convertibles = [
		{year:2113, model:"1A", price:"132000", id:"0"},
		{year:2014, model:"B", price:"32000", id:"1"},
		{year:2015, model:"C", price:"32000", id:"2"},
	]

	return (
				<div>
					<CarShoppingTitle title = "Welcome to React Transportation" subtitle = "The best place to buy vehicles online" />
					<CarShoppingOption title = "Choose option" value = {["NotAll", "Cars", "Trucs", "Convertibles"]}/>
					<Cars header="Cars" parameters={cars}/>
					<Cars header="Trucks" parameters={trucks}/>
					<Cars header="Convertibles" parameters={convertibles}/>
				</div>
		);

}

ReactDOM.render(
	<CarShopping active = {true} />,
	document.getElementById("rootOfAllEvil"));





















