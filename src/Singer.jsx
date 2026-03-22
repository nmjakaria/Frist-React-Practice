import './App.css';
export default function Singer({singer}){
    return(
        <div className='singer'>
            <h3>ID: {singer.id}</h3>
            <h3>Name: {singer.name}</h3>
            <p>Age: {singer.age}</p>
        </div>
    )
}