import React from 'react';

const PostDetail = ({post, selected, comments}) => {

    return (
        <dialog open={selected}>
        <div>
            {comments.map(comment => {
                return <div key={`comment-${comment.id}`}>
                    <h5>
                        {comment.name}
                    </h5>
                    <div>
                        {comment.body}
                    </div>
                    <h6>
                        {comment.email}
                    </h6>
                </div>
            })}
        </div>
      </dialog>
    );
}

export default PostDetail;
