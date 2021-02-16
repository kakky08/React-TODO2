import React, { useEffect, useState } from "react";
import "./styles.css";

export const App = () => {
  const [toDo, setToDo] = useState("");
  const [incomplete, setIncomplete] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [complete, setComplete] = useState([]);

  const onChangeToDo = (event) => setToDo(event.target.value);

  const onClickAdd = () => {
    const newToDos = [...incomplete, toDo];
    setIncomplete(newToDos);
    setToDo("");
  };

  const onClickDelete = (index) => {
    const newIncomplete = [...incomplete];
    newIncomplete.splice(index, 1);
    setIncomplete(newIncomplete);
  };

  const onClickDoing = (index) => {
    const newIncomplete = [...incomplete];
    newIncomplete.splice(index, 1);
    setIncomplete(newIncomplete);
    const newDoing = [...inProgress, incomplete[index]];
    setInProgress(newDoing);
  };

  const onClickReverse = (index) => {
    const newProgress = [...inProgress];
    newProgress.splice(index, 1);
    setInProgress(newProgress);
    const incompleteReverse = [...incomplete, inProgress[index]];
    setIncomplete(incompleteReverse);
  };

  const onClickConplete = (index) => {
    const newProgress = [...inProgress];
    newProgress.splice(index, 1);
    setInProgress(newProgress);
    const newComplete = [...complete, inProgress[index]];
    setComplete(newComplete);
  };

  const onClickDoneDelete = (index) => {
    const newDone = [...complete];
    newDone.splice(index, 1);
    setComplete(newDone);
  };

  const onClickDoneReverse = (index) => {
    const newDone = [...complete];
    newDone.splice(index, 1);
    setComplete(newDone);
    const newDoing = [...inProgress, complete[index]];
    setInProgress(newDoing);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={toDo}
          onChange={onChangeToDo}
          disabled={incomplete.length >= 5}
        />
        <button onClick={onClickAdd} disabled={incomplete.length >= 5}>
          追加
        </button>
      </div>
      {incomplete.length >= 5 && (
        <p style={{ color: "red" }}>これ以上追加できません</p>
      )}
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplete.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickDoing(index)}>進行中</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
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
    </>
  );
};
