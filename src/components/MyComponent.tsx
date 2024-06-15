import React from 'react'

interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>
}

const MyComponent:React.FC <Props> = ({name, setName}:Props) => {
  
  return (
    <input type="text" value={name} onChange={event => setName(event.target.value)} />
  )
}

export default MyComponent