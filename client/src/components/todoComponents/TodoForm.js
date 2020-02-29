import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPartyById, addTask, deleteTask } from '../../store/actions';
import { Form, Select, Input, Button, Row, Col, Popconfirm, message } from 'antd';
import {CloseSquareOutlined} from '@ant-design/icons';
import './todoForm.scss'

const TodoForm = (props) => {
    const [state, setSate] = useState({
        task: '',
    })

    useEffect(() => {
        props.getPartyById(props.partyId)
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        props.addTask(state)
    }

    const handleChange = e => {
        setSate({
            ...state,
            [e.target.name]: e.target.value,
            todo_lists_id: props.todoListId
        })
    }

    const deleteTask = (taskId) => {
        props.deleteTask(taskId)
        message.success(`Task was deleted!`);
    }

    return (
        <div className='list-box'>
            <h2>To-do List</h2>
            <Row type="flex" justify="space-around">
                <Col span={20}>
                    <Input
                        type="text"
                        name="task"
                        value={state.task}
                        onChange={handleChange}
                        placeholder="Task"
                        size="small"
                    />
                </Col>
                <Col span={4}>
                    <Button size='small' type="primary"onClick={handleSubmit}>add</Button>
                </Col>
            </Row>
            {/* =====================todo list======================== */}
            {props.task && props.task.map(task => (
                <Row>
                    <Col span={20}><p>{task.task}</p></Col>
                    <Col span={4}>
                    <Popconfirm
                            title="Are you sure delete this task?"
                            onConfirm={() => deleteTask(task.id)}
                            okText="Yes"
                            cancelText="No"
                        >
                        {/* <Icon type="close-square" style={{fontSize: 25}}/> */}
                        <CloseSquareOutlined />
                        </Popconfirm>
                    </Col>
                </Row>
            ))}
        </div>);
}


const mapStateToProps = state => ({
    isLoading: state.todoReducer.isLoading,
    task: state.todoReducer.task,
    error: state.todoReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { getPartyById, addTask, deleteTask }
    )(TodoForm)
)