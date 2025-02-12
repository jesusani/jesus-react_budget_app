import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import components
import Budget from './components/Budget';
import Remaining from './components/Remaining';

import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';


import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Laura's Budget Allocation</h1>
                    <div className='row mt-3'>
                    {
                        // Budget component
                        <div className='col-sm'>
                            <Budget />
                        </div>
                    }

                    {
                        //Remaining component
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                    }

                    {
                        //ExpenseTotal component
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    }
                       
                    {
                        <div className='col-12'>
                            <ExpenseList />
                        </div>
                    }

                    

                    {<div className='col-12'>
                        <AllocationForm />
                    </div>
                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
