import React from 'react'
import Person from './Person'

export default function PersonListComponent() {
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

    const personList=persons.map(person=> <Person person={person}/>)

  return (
    <div>{personList}</div>
  )
}
