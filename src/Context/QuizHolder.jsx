import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [


    {
        "question": "Who won the ICC T20 World Cup in 2024?",
        "a": "Australia",
        "b": "India",
        "c": "England",
        "d": "New Zealand",
        "correct": "b"
    },
    {
        "question": "Which is a valid keyword in Java?",
        "a": "interface",
        "b": "string",
        "c": "Float",
        "d": "unsigned",
        "correct": "a"
    },
    {
        "question": "Which one of the following will declare an array and initialize it with five numbers?",
        "a": "Array a = new Array(5);",
        "b": "int [] a = {23,22,21,20,19};",
        "c": "int a [] = new int[5];",
        "d": "int [5] array;",
        "correct": "b"
    },
    {
        "question": "The command to eliminate a table from a database is:",
        "a": "REMOVE TABLE CUSTOMER;",
        "b": "DROP TABLE CUSTOMER;",
        "c": "DELETE TABLE CUSTOMER;",
        "d": "UPDATE TABLE CUSTOMER;",
        "correct": "b"
    },
    {
        "question": "SQL data definition commands make up a(n) ________ .",
        "a": "DDL",
        "b": "DML",
        "c": "HTML",
        "d": "XML",
        "correct": "a"
    }
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };
