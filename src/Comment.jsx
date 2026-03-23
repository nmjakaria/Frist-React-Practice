import './App.css';
export default function Comment({ comment }) {
    console.log(comment);
    const { name, email, body } = comment;

    return (
            <div className="commentCard">
                <h3>{name}</h3>
                <p className="email">{email}</p>
                <p className="body">{body}</p>
            </div>
    )
}