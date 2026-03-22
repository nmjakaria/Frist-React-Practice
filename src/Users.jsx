import {use} from 'react';
export default function Users({featchUsers}){
    const users = use(featchUsers);
    return(
        <div style={{border:'2px solid blue', padding:'20px', borderRadius:'10px', margin:'10px'}}>
            <h3>Users {users.length}</h3>
            <h4>Users name: 
                <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
            </h4>
        </div>
    )
}