import "./style.scss";
import { useState } from "react";
import Piece from "../piece/";

const Chessboard = () => {
  const [size, setSize] = useState(50);
  const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];

  //TODO: toggle in outside component with two way data binding
  // for size value, lines 17 to 28 in outside component
  const handleRange = (event: any) => {
    setSize(event.target.value);
  };

  return (
    <>
      <Piece type="pawn" />
      <div className="size-range">
        <input
          type="range"
          name="size"
          id="size"
          min="1"
          step="0.1"
          max="95"
          onChange={(event) => handleRange(event)}
        />
      </div>
      <p>{size}</p>
      <table
        className="board"
        style={{ width: size + "vmin", height: size + "vmin" }}
      >
        <thead>
          <tr>
            <th></th>
            <th>
              <span>h</span>
            </th>
            <th>
              <span>g</span>
            </th>
            <th>
              <span>f</span>
            </th>
            <th>
              <span>e</span>
            </th>
            <th>
              <span>d</span>
            </th>
            <th>
              <span>c</span>
            </th>
            <th>
              <span>b</span>
            </th>
            <th>
              <span>a</span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr>
                <th>
                  <span>{row}</span>
                </th>
                {columns.map((column) => {
                  return <td id={column + row} className="square"></td>;
                })}
                <th>
                  <span>{row}</span>
                </th>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>
              <span>a</span>
            </th>
            <th>
              <span>b</span>
            </th>
            <th>
              <span>c</span>
            </th>
            <th>
              <span>d</span>
            </th>
            <th>
              <span>e</span>
            </th>
            <th>
              <span>f</span>
            </th>
            <th>
              <span>g</span>
            </th>
            <th>
              <span>h</span>
            </th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Chessboard;
