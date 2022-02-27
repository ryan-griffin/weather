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
    <div className="flex w-screen h-screen">
        <Cloud position={0} width={400} height={220} />
        <Cloud position={12} width={350} height={205} />
        <Cloud position={21} width={400} height={191} />
        <Cloud position={33} width={400} height={205} />
        <Cloud position={42} width={600} height={220} />
        <Cloud position={57} width={300} height={130} />
        <Cloud position={65} width={400} height={192} />
        <Cloud position={75} width={400} height={197} />
        <Cloud position={85} width={300} height={212} />
    </div>
);

export default Clouds;
