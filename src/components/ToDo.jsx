import React from "react";

export const ToDo = (props) => {
  const { toDo, onChangeToDo, disabled, onClickAdd } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={toDo}
        onChange={onChangeToDo}
        disabled={disabled}
      />
      <button onClick={onClickAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
