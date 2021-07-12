import "./style.scss";
import { useState } from "react";
import Pawn from "../Pawn/";
import Queen from "../Queen";
import King from "../King";
import Rook from "../Rook";
import Knight from "../Knight";
import Bishop from "../Bishop";

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
      <div className="size-range">
        <p className="size-number">{size}</p>
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
      <table
        className="board"
        style={{ width: size + "vmin", height: size + "vmin" }}
      >
        <thead>
          <tr>
            <th className="top-right-corner"></th>
            {columns.reverse().map((column) => {
              return (
                <th>
                  <span>{column}</span>
                </th>
              );
            })}
            <th className="top-left-corner"></th>
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
                  return (
                    <td id={column + row} className="square">
                      {row === "7" ? <Pawn player="black" /> : ""}
                      {row === "2" ? <Pawn player="white" /> : ""}
                      {column + row === "d1" ? <Queen player="white" /> : ""}
                      {column + row === "d8" ? <Queen player="black" /> : ""}
                      {column + row === "e1" ? <King player="white" /> : ""}
                      {column + row === "e8" ? <King player="black" /> : ""}
                      {column + row === "a1" || column + row === "h1" ? (
                        <Rook player="white" />
                      ) : (
                        ""
                      )}
                      {column + row === "a8" || column + row === "h8" ? (
                        <Rook player="black" />
                      ) : (
                        ""
                      )}
                      {column + row === "b1" || column + row === "g1" ? (
                        <Knight player="white" />
                      ) : (
                        ""
                      )}
                      {column + row === "b8" || column + row === "g8" ? (
                        <Knight player="black" />
                      ) : (
                        ""
                      )}
                      {column + row === "c1" || column + row === "f1" ? (
                        <Bishop player="white" />
                      ) : (
                        ""
                      )}
                      {column + row === "c8" || column + row === "f8" ? (
                        <Bishop player="black" />
                      ) : (
                        ""
                      )}
                    </td>
                  );
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
            <th className="bottom-left-corner"></th>
            {columns.reverse().map((column) => {
              return (
                <th>
                  <span>{column}</span>
                </th>
              );
            })}
            <th className="bottom-right-corner"></th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Chessboard;
