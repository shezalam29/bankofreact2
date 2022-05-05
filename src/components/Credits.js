import { Link } from 'react-router-dom';

const Credits = (props) => {
	let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0,10);
            return <li class='box2' key={credit.id}>${credit.amount}<br></br>{credit.description}<br></br>{date}</li>
        }) 
    }
    return (
    	<div>
            <Link to="/">Home</Link>
            <h1>Credits</h1>
            {creditsView()}
            <form class = 'center' onSubmit={props.addCredit}>
                Enter credit description: 
                <input type="text" name="description" />
                <br></br>
                Enter credit amount: 
                <input type="number" name="amount" step='any'/>
                <br></br>
                <button type="submit">Add Credit</button>
            </form>
    	</div> 
    )
}
export default Credits;