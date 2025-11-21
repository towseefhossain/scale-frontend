import { useState } from 'react'
import reactLogo from './assets/react.svg'
import goLogo from './assets/Go-Logo_Aqua.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [getOneTimestamp, setGetOneTimestamp] = useState<(Date | null)[]>([null, null])
  const [getAllTimestamp, setGetAllTimestamp] = useState<(Date | null)[]>([null, null])
  const [postTimestamp, setPostTimestamp] = useState<(Date | null)[]>([null, null])
  const [updateTimestamp, setUpdateTimestamp] = useState<(Date | null)[]>([null, null])
  const [deleteTimestamp, setDeleteTimestamp] = useState<(Date | null)[]>([null, null])

  const formatTime = (date: Date | null): string => {
    if (!date) return '';
    
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
    
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://go.dev/" target="_blank">
          <img src={goLogo} className="logo" alt="Go logo" />
        </a>
      </div>
      <h1>Vite + React + Go</h1>

      <div className='card'>
        <button onClick={async () => {
          await fetch('http://localhost:8080/api/v1/items', {
            method: 'GET',
          }).then(res => res.json()).then(data => {
            console.log(data);
            setGetAllTimestamp([new Date(data.timestamp), new Date()]);
          });
        }}>
          GET /api/v1/items
        </button>
        <p>Get Items Server Time: {formatTime(getAllTimestamp[0])}</p>
        <p>Get Items Client Time: {formatTime(getAllTimestamp[1])}</p>
      </div>

      <div className='card'>
        <button onClick={async () => {
          await fetch('http://localhost:8080/api/v1/items', {
            method: 'POST',
          }).then(res => res.json()).then(data => {
            console.log(data);
            setPostTimestamp([new Date(data.timestamp), new Date()]);
          });
        }}>
          POST /api/v1/items/1
        </button>
        <p>Get Items Server Time: {formatTime(postTimestamp[0])}</p>
        <p>Get Items Client Time: {formatTime(postTimestamp[1])}</p>
      </div>

      <div className='card'>
        <button onClick={async () => {
          await fetch('http://localhost:8080/api/v1/items/1', {
            method: 'GET',
          }).then(res => res.json()).then(data => {
            console.log(data);
            setGetOneTimestamp([new Date(data.timestamp), new Date()]);
          });
        }}>
          GET /api/v1/items/1
        </button>
        <p>Get Items Server Time: {formatTime(getOneTimestamp[0])}</p>
        <p>Get Items Client Time: {formatTime(getOneTimestamp[1])}</p>
      </div>

      <div className='card'>
        <button onClick={async () => {
          await fetch('http://localhost:8080/api/v1/items/1', {
            method: 'PUT',
          }).then(res => res.json()).then(data => {
            console.log(data);
            setUpdateTimestamp([new Date(data.timestamp), new Date()]);
          });
        }}>
          PUT /api/v1/items/1
        </button>
        <p>Get Items Server Time: {formatTime(updateTimestamp[0])}</p>
        <p>Get Items Client Time: {formatTime(updateTimestamp[1])}</p>
      </div>

      <div className='card'>
        <button onClick={async () => {
          await fetch('http://localhost:8080/api/v1/items/1', {
            method: 'DELETE',
          }).then(res => res.json()).then(data => {
            console.log(data);
            setDeleteTimestamp([new Date(data.timestamp), new Date()]);
          });
        }}>
          DELETE /api/v1/items/1
        </button>
        <p>Get Items Server Time: {formatTime(deleteTimestamp[0])}</p>
        <p>Get Items Client Time: {formatTime(deleteTimestamp[1])}</p>
      </div>

      <p className="read-the-docs">
        Click on the Vite, React and Go logos to learn more
      </p>
    </>
  )
}

export default App
