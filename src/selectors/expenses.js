import moment from 'moment';
// unix timestamps (milliseconds)
// January 1st, 1970
// get visible expenses
const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {
     //    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
    //    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
    return expenses.filter((expense) => {
       const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
       const endDateMatch = endDate ? endDate.isSameOrAfter((expense.createdAt), 'day') :true;
       const textMatch = text == '' || expense.description.toLowerCase().includes(text.toLowerCase());

       return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
           return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

export default getVisibleExpenses;