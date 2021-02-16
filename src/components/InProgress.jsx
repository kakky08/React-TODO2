import React from "react";

export const InProgress = (props) => {
  const { inProgress, onClickConplete, onClickReverse } = props;
  return (
    <div className="inProgress-area">
      <p className="title">進行中のTODO</p>
      <ul>
        {inProgress.map((doing, index) => {
          return (
            <div key={doing} className="list-row">
              <li>{doing}</li>
              <button onClick={() => onClickConplete(index)}>完了</button>
              <button onClick={() => onClickReverse(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
