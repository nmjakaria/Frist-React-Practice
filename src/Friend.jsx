export default function Friend ({friend}){
    const {name, email, phone} = friend;
    return(
        <div style={{border:'2px solid white', padding:'20px', borderRadius:'10px', margin:'10px'}}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}