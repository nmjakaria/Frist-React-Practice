import {use} from 'react';
import Friend from './Friend';
export default function Friends ({featchFriend}){
    const friends = use(featchFriend);
    return(
        <div style={{border:'2px solid aqua', padding:'20px', borderRadius:'10px', margin:'10px'}}>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}