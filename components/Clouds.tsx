import { FC } from "react";
import Image from "next/image";

const Cloud: FC<Props> = ({ position, width, height }) => (
    <div className="fixed" style={{ left: `${position}%` }}>
        <Image src="/images/cloud.png" width={width} height={height} alt="" />
    </div>
);

interface Props {
    position: number;
    width: number;
    height: number;
}

const Clouds: FC = () => (
    <div className="flex w-screen h-screen bg-gradient-to-b from-white/70 via-white/10"></div>
);

export default Clouds;
