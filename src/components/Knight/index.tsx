import { FC } from "react";
import "../../assets/global.scss";
import "./style.scss";
import { ReactComponent as Knight } from "../../assets/knight.svg";

type KnightProps = {
  player: string;
};

const Piece: FC<KnightProps> = ({ player }) => {
  return (
    <>
      <Knight className={`${player} knight`} />
    </>
  );
};

export default Piece;
