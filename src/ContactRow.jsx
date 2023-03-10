import React from 'react'

const ContactRow = (props) => {
  
    const contacts = props.contacts

    return (
        contacts.map(contact => {
          return <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
          </tr>
        })
  )
}
export default ContactRow
