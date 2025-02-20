import React from 'react'
import Person from './Person'

export default function PersonListComponent() {
const names=['Mohini','Dhyana','Mohini']

    const persons=[{
        id:1,
        name:'Mohini',
        skill:'.Net'
    },
    {
        id:2,
        name:'Dhyana',
        skill:'React'
    }]

    const personList=persons.map(person=> <Person key={person.id} person={person}/>)

    const nameList=names.map((name,index)=> <h2 key={index} >{name}</h2>)

  return (
    <div>{nameList}</div>
  )
}
