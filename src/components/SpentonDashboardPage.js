import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const SpentonDashboardPage=()=>(
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
) 


export default SpentonDashboardPage; 