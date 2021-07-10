import { FC } from "react";
import "../../assets/global.scss";
import { ReactComponent as Knight } from "../../assets/knight.svg";

type KnightProps = {
  player: string;
};

const Piece: FC<KnightProps> = ({ player }) => {
  return (
    <>
      <Knight className={player} />
    </>
  );
};

export default Piece;
