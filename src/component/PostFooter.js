import React from 'react';
import '../css/Post.css';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import { MoreHorizOutlined, ShareOutlined } from '@material-ui/icons';
import PostAnswer from './PostAnswer';

function PostFooter( {Id, queryId, queryName} ) {
    return (
        <div className="post__footer">
                <div className="post__footerAction">
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>

                <div className="post__footerAnswer">
                    <details>
                        <summary>
                            <ChatBubbleOutlineOutlinedIcon />
                        </summary>
                        <PostAnswer
                            Id={Id}
                            queryId={queryId}
                            queryName={queryName}
                        />
                    </details>
                </div>
                <div className="post__footerLeft">
                    <ShareOutlined />
                </div>
            </div>
    )
}

export default PostFooter;
