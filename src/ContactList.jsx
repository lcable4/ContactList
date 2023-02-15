import React from 'react'
import ContactRow from './ContactRow'

const ContactList = (props) => {
 
  const list = props.contacts

  return (
    <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
            
            <ContactRow contacts={list} />
            

          </tbody>
        </table>
  )
}
export default ContactList
