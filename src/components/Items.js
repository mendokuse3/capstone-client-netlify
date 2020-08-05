import React, { useContext} from 'react';
import '../css/Item.css';
import TrackerContext from '../context/Context'


export default function Items(props) {
    const data = useContext(TrackerContext)
        return (
            <div className='tracker-area'>
                {data && Object.keys(data).map((item, i) => {
                    // console.log(item)
                    if(data[item].rewards !== undefined){
                        return (
                            <div className='dungeon' key={i}>
                                <div className={`tracker-element dungeon-reward ${data[item].rewards[data[item].counter]}`} onClick={() => props.handleTrackerReward(item)}>
                                <div className={`tracker-element dungeon-name ${data[item].current[0]}`} />
                                </div>
                            </div>
                        )
                    } else {
                        return(
                            <div className={`tracker-element item ${data[item].current[data[item].counter]} ${data[item].has ? '' : 'does-not-have'}`} key={i} onClick={() => props.handleTrackerItem(item)}> </div>
                        )
                    }
                })}
                <button className='reset-button' onClick={() => props.resetTracker()}>Reset</button>
            </div>
        )
}


