import { use } from 'react';
import Comment from './Comment';
export default function Comments({ fetchComment }) {
    const comments = use(fetchComment);
    return (
        <div className='cardContainer' style={{ border: '2px solid green', padding: '20px', borderRadius: '10px', margin: '10px' }}>
            {
                comments.slice(0,10).map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}