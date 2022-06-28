import { useState } from 'react';

function App() {
    const [message, setMessage] = useState('')
    const [list, setList] = useState([])

    const handleChange = event => {
      setMessage(event.target.value)
    }

    const handleClick = event =>{
        event.preventDefault();

        setList([{
            message: message,

        },
        ...list,
      
      ])
      setMessage('')
  };

  return(
      <div>
          <input
              type="text"
              id="message"
              name="message"
              onChange={handleChange}
              value={message}
              autocomplete="off"
              onKeyDown= {(e) => {
                if(e.code === 'Enter'){
                  handleClick(e)
                }
              }}
          />

          <h4>Messages</h4>
          {list.map((item,idx) =>(
              <p key={idx}> {item.message} </p>
          ))}
      </div>
  )




}
export default App;