import "./style.scss";
import { useState } from "react";
import Pawn from "../Pawn/";
import Queen from "../Queen";
import King from "../King";
import Rook from "../Rook";
import Knight from "../Knight";
import Bishop from "../Bishop";

const Chessboard = () => {
  const ROWS = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const THEMES = ["marble", "wood", "glass"];

  const [size, setSize] = useState(50);
  const [theme, setTheme] = useState(THEMES[0]);

  const handleRange = (event: any) => {
    setSize(event.target.value);
  };

  const handlePickTheme = (theme: string) => {
    setTheme(theme);
  };

  return (
    <>
      <div className="theme-picker">
        <h2>Theme picker</h2>
        <ul>
          {THEMES.map((THEME) => {
            return (
              <li key={THEME} onClick={() => handlePickTheme(THEME)}>
                <p>{THEME}</p>
                <div className={`${THEME}-picker`}></div>
              </li>
            );
          })}
        </ul>
      </div>
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
            <th className={`top-right-corner frame-${theme}`}></th>
            {COLUMNS.reverse().map((column) => {
              return (
                <th className={`frame-${theme}`}>
                  <span>{column}</span>
                </th>
              );
            })}
            <th className={`top-left-corner frame-${theme}`}></th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {ROWS.map((row) => {
            return (
              <tr>
                <th className={`frame-${theme}`}>
                  <span>{row}</span>
                </th>
                {COLUMNS.map((column) => {
                  return (
                    <td id={column + row} className={`square square-${theme}`}>
                      {row === "7" ? (
                        <Pawn player={`black black-${theme}`} />
                      ) : (
                        ""
                      )}
                      {row === "2" ? (
                        <Pawn player={`white white-${theme}`} />
                      ) : (
                        ""
                      )}
                      {column + row === "d1" ? (
                        <Queen player={`white white-${theme}`} />
                      ) : (
                        ""
                      )}
                      {column + row === "d8" ? (
                        <Queen player={`black black-${theme}`} />
                      ) : (
                        ""
                      )}
                      {column + row === "e1" ? (
                        <King player={`white white-${theme}`} />
                      ) : (
                        ""
                      )}
                      {column + row === "e8" ? (
                        <King player={`black black-${theme}`} />
                      ) : (
                        ""
                      )}
                      {column + row === "a1" || column + row === "h1" ? (
                        <Rook player={`white white-${theme}`} />
                      ) : (
                        ""
                      )}
                      {column + row === "a8" || column + row === "h8" ? (
                        <Rook player={`black black-${theme}`} />
                      ) : (
                        ""
                      )}
                      {column + row === "b1" || column + row === "g1" ? (
                        <Knight player={`white white-${theme}`} />
                      ) : (
                        ""
                      )}
                      {column + row === "b8" || column + row === "g8" ? (
                        <Knight player={`black black-${theme}`} />
                      ) : (
                        ""
                      )}
                      {column + row === "c1" || column + row === "f1" ? (
                        <Bishop player={`white white-${theme}`} />
                      ) : (
                        ""
                      )}
                      {column + row === "c8" || column + row === "f8" ? (
                        <Bishop player={`black black-${theme}`} />
                      ) : (
                        ""
                      )}
                    </td>
                  );
                })}
                <th className={`frame-${theme}`}>
                  <span>{row}</span>
                </th>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th className={`bottom-left-corner frame-${theme}`}></th>
            {COLUMNS.reverse().map((column) => {
              return (
                <th className={`frame-${theme}`}>
                  <span>{column}</span>
                </th>
              );
            })}
            <th className={`bottom-right-corner frame-${theme}`}></th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Chessboard;
