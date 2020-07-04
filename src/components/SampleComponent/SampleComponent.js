import React, { memo } from 'react';

const SampleComponent = memo(({ postList }) => (
    <div>
        A sample component for post List:
        <ul>
            {postList &&
                postList.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    </div>
));

export { SampleComponent };
