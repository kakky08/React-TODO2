import React, { useEffect, useState } from "react";
import "./styles.css";
import { ToDo } from "./components/ToDo";
import { Incomplete } from "./components/Incomplete";
import { InProgress } from "./components/InProgress";
import { Complete } from "./components/Complete";

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
      <ToDo
        toDo={toDo}
        onChangeToDo={onChangeToDo}
        disabled={incomplete.length >= 5}
        onClickAdd={onClickAdd}
      />
      {incomplete.length >= 5 && (
        <p style={{ color: "red" }}>これ以上追加できません</p>
      )}
      <Incomplete
        incomplete={incomplete}
        onClickDoing={onClickDoing}
        onClickDelete={onClickDelete}
      />
      <InProgress
        inProgress={inProgress}
        onClickConplete={onClickConplete}
        onClickReverse={onClickReverse}
      />
      <Complete
        complete={complete}
        onClickDoneDelete={onClickDoneDelete}
        onClickDoneReverse={onClickDoneReverse}
      />
    </>
  );
};
