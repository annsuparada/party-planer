import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParties, getPartyById, deleteParty} from '../../store/actions';
import TodoForm from '../todoComponents/TodoForm';
import ShoppingListForm from '../shoppingListComponents/ShoppingListForm';

const Party = props => {
    const partyId = props.match.params.id
    const todoListId = props.partyById.todo_lists_id
    const shoppingListId = props.partyById.shopping_lists_id
    useEffect(() => {
        props.getPartyById(partyId)
    }, [])
    const getTodoList = props.partyById.todo_list
    const getShoppingList = props.partyById.shopping_list
    
    const goBacktoParties = () => {
        props.history.goBack()
    }
    const deleteParty = (id) => {
        props.deleteParty(id)
        props.history.push('/parties')
    }
    
    

    const test = (id) => {
        console.log(`working ${id}`)
    }

    return (
        <>
            {/* {console.log('=============', props)} */}
            <button onClick={goBacktoParties}>Back</button>
            <h1>Party</h1>
            <p>{props.partyById.party_name} Party</p>
            <p>Date: {props.partyById.date}</p>
            <p>Guests: {props.partyById.guests}</p>
            <p>Theme: {props.partyById.theme}</p>
            <p>Budget: ${props.partyById.budget}</p>
            <button onClick={() => deleteParty(partyId)}>Delete</button>
  
            {/* ---------------------------shopping list------------------------------ */}
            <h2>Shopping List</h2>
            <ShoppingListForm shoppingListId={shoppingListId} />
            {props.item && props.item.map(item => (
                <div>
                    {item.item} {item.price}
                </div>
            ))}
            {getShoppingList && getShoppingList.map(item => (
                <div>
                    {item.item} {item.price}
                </div>
            ))}
                 <p>Total $ {props.totalPrice}</p>
            

            {/* ---------------------------todo list------------------------------ */}
            
            <TodoForm todoListId={todoListId} partyId={partyId} getTodoList={getTodoList}/>
          
        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.partyReducer.isLoading,
    partyById: state.partyReducer.partyById,
    error: state.partyReducer.error,
    deleteSuccess: state.partyReducer.deleteSuccess,
    item: state.shoppingReducer.item,
    totalPrice: state.shoppingReducer.totalPrice,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getParties, getPartyById, deleteParty}
    )(Party)
)