import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="inputArea">
        <input placeholder="Todoを入力" className="input" />
        <button className="inputButton">追加</button>
      </div>
      <div className="incompleteArea">
        <p className="incompleteTitle">未完了なTODO</p>
        <div className="incomplete">
          <ul className="incompleteList">
            <li className="incompleteListItem">ああああ</li>
            <button className="incompleteButton">進行中</button>
            <button className="incompleteButton">削除</button>
          </ul>
        </div>
        <div className="incompleteArea">
          <p className="incompleteTitle">未完了なTODO</p>
          <div className="incomplete">
            <ul className="incompleteList">
              <li className="incompleteListItem">いいいい</li>
              <button className="incompleteButton">進行中</button>
              <button className="incompleteButton">削除</button>
            </ul>
          </div>
        </div>
      </div>
      <div className="inProgressArea">
        <p className="inProgressTitle">進行中のTODO</p>
        <div className="inProgress">
          <ul className="inProgressList">
            <li className="inProgressListItem">うううう</li>
            <button className="inProgressButton">完了</button>
            <button className="inProgressButton">戻す</button>
          </ul>
        </div>
      </div>
      <div className="completeArea">
        <p className="completeTitle">完了したTODO</p>
        <div className="complete">
          <ul className="completeList">
            <li className="completeListItem">ええええ</li>
            <button className="completeButton">戻す</button>
            <button className="completeButton">削除</button>
          </ul>
        </div>
      </div>
    </>
  );
};
