import { Link } from 'react-router-dom';

const Debits = (props) => {
	let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0,10);
            return <li class='box' key={debit.id}>${debit.amount}<br></br>{debit.description}<br></br>{date}</li>
        }) 
    }
    return (
    	<div>
            <Link to="/">Home</Link>
            <h1>Debits</h1>
            {debitsView()}
            <form class = 'center' onSubmit={props.addDebit}>
                Enter debit description: 
                <input type="text" name="description" />
                <br></br>
                Enter debit amount:
                <input type="number" name="amount" step='any'/>
                <br></br>
                <button type="submit">Add Debit</button>
            </form>
    	</div>
    )
}
export default Debits;