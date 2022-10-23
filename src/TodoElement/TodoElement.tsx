import { useState } from "react";
import getStyles from "./styles";

export interface TodoProps {
  value: string;
  index: number;
  onDelete: (index: number) => void;
}

const TodoElement = ({ value, onDelete, index }: TodoProps) => {
  const [checked, setChecked] = useState(false);

  const styles = getStyles(checked);

  return (
    <div style={styles.mainContainer as React.CSSProperties}>
      <div style={styles.leftContainer}>
        <input
          type="checkbox"
          style={styles.checkBox}
          onChange={() => setChecked((value) => !value)}
        />{" "}
        {value}
      </div>

      <button style={styles.closeBtn} onClick={() => onDelete(index)}>
        X
      </button>
    </div>
  );
};

export default TodoElement;
