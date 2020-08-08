import React, {useState} from 'react';
import {Notes} from './components/Notes'
import Items from './components/Items'
import TrackerContext from './context/Context'
import resetStateData from './stateData';

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
    // setStateData(TrackerContext._currentValue.stateData)
    // setStateData(resetStateData);
    setStateData({
      ...TrackerContext._currentValue.stateData,
      EP: {
        ...TrackerContext._currentValue.stateData.EP,
        counter: 0
      },
      DP: {
        ...TrackerContext._currentValue.stateData.DP,
        counter: 0
      },
      TH: {
        ...TrackerContext._currentValue.stateData.TH,
        counter: 0
      },
      PD: {
        ...TrackerContext._currentValue.stateData.PD,
        counter: 0
      },
      SP: {
        ...TrackerContext._currentValue.stateData.SP,
        counter: 0
      },
      SW: {
        ...TrackerContext._currentValue.stateData.SW,
        counter: 0
      },
      TT: {
        ...TrackerContext._currentValue.stateData.TT,
        counter: 0
      },
      IP: {
        ...TrackerContext._currentValue.stateData.IP,
        counter: 0
      },
      MM: {
        ...TrackerContext._currentValue.stateData.MM,
        counter: 0
      },
      TR: {
        ...TrackerContext._currentValue.stateData.TR,
        counter: 0
      }
    })
    // currently a bug for dungeeons where upon reset it resets state for dungeons to have +1 count on reset
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





