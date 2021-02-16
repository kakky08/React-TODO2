import React from "react";

export const Complete = (props) => {
  const { complete, onClickDoneDelete, onClickDoneReverse } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {complete.map((done, index) => {
          return (
            <div key={done} className="list-row">
              <li>{done}</li>
              <button onClick={() => onClickDoneReverse(index)}>戻す</button>
              <button onClick={() => onClickDoneDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
