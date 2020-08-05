import React, {useState} from 'react';
import {Notes} from './components/Notes'
import Items from './components/Items'
import TrackerContext from './context/Context'

import './css/App.css';



export default function App() {
 const [stateData, setStateData] = useState(TrackerContext._currentValue.stateData)
    // console.log(this.state.stateData)
  const handleTrackerItem = (item) => {
    if(stateData[item].has === false){
      setStateData({
          ...stateData,
          [item]: {
            ...stateData[item],
            has: true
          }
        })
        return stateData[item].current[stateData[item].counter]
    } else {
      if(stateData[item].counter < stateData[item].current.length - 1){
        setStateData({
          ...stateData,
          [item]: {
            ...stateData[item],
            counter: stateData[item].counter += 1
          }
        })
        return stateData[item].current[stateData[item].counter]
      }
      else {
        setStateData({
          ...stateData,
          [item]: {
            ...stateData[item],
            counter: 0,
            has: false
          }
        })
      }
    }
  }

  const handleTrackerReward = (item) => {
    if(stateData[item].has === false){
      setStateData({
          ...stateData,
          [item]: {
            ...stateData[item],
            has: true,
            counter: stateData[item].counter += 1
          }
        })
      return stateData[item].current[stateData[item].counter]
    } else {
      if(stateData[item].counter < stateData[item].rewards.length - 1){
        setStateData({
          ...stateData,
          [item]: {
            ...stateData[item],
            counter: stateData[item].counter += 1
          }
        })
        return stateData[item].rewards[stateData[item].counter]
      }
      else {
        setStateData({
          ...stateData,
          [item]: {
            ...stateData[item],
            counter: 0,
            has: false
          }
        })
      }
    }
  }

  const resetTracker = () => {
    setStateData(TrackerContext._currentValue.stateData)
  }

  return (
    <TrackerContext.Provider value={stateData} >
      <div className="App">
          <Items resetTracker={resetTracker} handleTrackerItem={handleTrackerItem} handleTrackerReward={handleTrackerReward}/>
          <Notes />
      </div>
    </TrackerContext.Provider>
  );
}





