import React from 'react'

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

    const personList=persons.map(person=> <h2>{person.name} knows {person.skill}</h2>)
    
  return (
    <div>{personList}</div>
  )
}
