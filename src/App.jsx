import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import generateMessage from './utilities/generateMessage'
import './styles.css'

export default function App() {
  const [userData, setUserData] = useState({
    hasEntered: false,
    pageLoadTime: new Date(),
    entranceTime: undefined,
    clickCoordinates: { offsetX: undefined, offsetY: undefined },
  })


  const handleEnterClick = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      hasEntered: true,
      entranceTime: new Date(),  
      clickCoordinates: {
        offsetX: event.nativeEvent.offsetX,
        offsetY: event.nativeEvent.offsetY,  
      },
    }))
  }

  if (userData.hasEntered) {
    generateMessage(userData)
  }

  return (
    <div>
      <button
        disabled={userData.hasEntered} 
        className={userData.hasEntered ? 'activated' : 'unactivated'}
        onClick={handleEnterClick}  
      >
        {userData.hasEntered ? 'Bağlanıyor...' : 'Enter'}
      </button>

      <WelcomeMessage userData={userData} />
    </div>
  )
}
