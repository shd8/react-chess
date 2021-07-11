import { FC } from "react";
import "../../assets/global.scss";
import { ReactComponent as Bishop } from "../../assets/bishop.svg";

type BishopProps = {
  player: string;
};

const Piece: FC<BishopProps> = ({ player }) => {
  return <Bishop className={player} style={{}} />;
};

export default Piece;
