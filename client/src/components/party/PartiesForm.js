import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {addParty } from '../../store/actions';
import { Form, Select, Input, Button } from 'antd';

const PartyForm = props => {
    const [state, setSate] = useState({
        category_id: props.categoryId,
        party_name: '',
        guests: '',
        theme: '',
        date: '',
        budget: null,
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.addParty(state)
    } 

    const handleChange = e => {
        setSate({
            ...state, [e.target.name]: e.target.value
        })
    }

    return (
        <>
        {console.log('state', state)}
          <Form onSubmit={handleSubmit} labelCol={{ span: 5 }} wrapperCol={{ span: 5 }}>
            <Form.Item label="Party Name">
              {/* <label>Party Name</label> */}
              <Input
               type="text"
               name="party_name"
               value={state.party_name}
               onChange={handleChange}
               />
                </Form.Item>
                <Form.Item label="Guests">
              <Input
               type="text"
               name="guests"
               value={state.guests}
               onChange={handleChange}
               />
               </Form.Item>
               <Form.Item label="Theme">
              <Input
               type="text"
               name="theme"
               value={state.theme}
               onChange={handleChange}
               />
               </Form.Item>
               <Form.Item label="Date">
                <Input
               type="text"
               name="date"
               value={state.date}
               onChange={handleChange}
               />
               </Form.Item>
               <Form.Item label="Budget">
                <Input
               type="number"
               name="budget"
               value={state.budget}
               onChange={handleChange}
               />
               </Form.Item>
               <Button type="submit" type="primary">add</Button>
          </Form>
        </>
    )
}

const mapStateToProps = state => ({
  isLoading: state.partyReducer.isLoading,
  parties: state.partyReducer.parties,
  error: state.partyReducer.error
})

export default withRouter(
  connect(
    mapStateToProps,
    { addParty }
  )(PartyForm)
)