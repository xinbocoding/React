import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from "faker"
import ApprovalCard from './approvalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Are you sure?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="4:30PM"
                    context="Nice blog"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="4:50PM"
                    context="not bed"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);