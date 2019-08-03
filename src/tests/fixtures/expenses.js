 import moment from 'moment';
 
 export const expenses = [
     {
        id: 1,
        description : 'test',
        note : 'test note',
        amount : 1200,
        createdAt : moment(0).valueOf()
     },
     {
        id: 2,
        description : 'Coffee',
        note : 'Coffee note',
        amount : 1500,
        createdAt : moment(0).add(4,'days').valueOf()
     },
     {
        id: 3,
        description : 'Rent',
        note : 'rent note',
        amount : 2200,
        createdAt : moment(0).subtract(5, 'days').valueOf()
     },
     {
        id: 4,
        description : 'Gas',
        note : 'gas bill',
        amount : 4200,
        createdAt : moment(0).add(6, 'days').valueOf()
     }
 ];