import "./ExpenseDate.css"

function ExpenseDate(props){
    const month = props.date.toLocaleString('he-IL' ,{month:'long'});
    const Day = props.date.toLocaleString('he-IL' ,{day:'numeric'});
    const year = props.date.getFullYear();

    return(
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{Day}</div>
        <div className="expense-date__day">{year}</div>
    </div> 
    )
}

export default ExpenseDate;