import { FC } from "react";
import "./style.scss";
import pawn from "../../assets/pawn.svg";
import rook from "../../assets/rook.svg";
import knight from "../../assets/knight.svg";
import bishop from "../../assets/bishop.svg";
import queen from "../../assets/queen.svg";
import king from "../../assets/king.svg";

type PieceProps = {
  type: string;
  player: string;
};

const Piece: FC<PieceProps> = ({ type, player }) => {
  return (
    <>
      <img src={pawn} alt="a" />
    </>
  );
};

export default Piece;
