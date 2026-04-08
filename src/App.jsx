import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2.tsx/Section2'

const App = () => {
  const users = [
    {
      id: 1,
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia temporibus iste facilis eligendi? Labore?',
      tag: 'Satisfied'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia temporibus iste facilis eligendi? Labore?',
      tag: 'Underserved'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia temporibus iste facilis eligendi? Labore?',
      tag: 'Underbanked'
    }

  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />

    </div>
  )
}

export default App