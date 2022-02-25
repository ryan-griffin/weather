import { FC } from "react";

const Snow: FC<Props> = ({ count }) => {
    let flakes: JSX.Element[] = [];

    for (let i = 0; i < count; i++) {
        const posX: number = Math.random() * 101;
        const posY: number = Math.random() * 101;
        flakes.push(
            <div
                className="h-2 w-2 bg-white/60 rounded-full fixed"
                style={{
                    boxShadow: "0px 0px 10px 1px rgba(255,255,255,0.1)",
                    left: `${posX}%`,
                    top: `${posY}%`,
                }}
            ></div>
        );
    }

    return <>{flakes}</>;
};

interface Props {
    count: number;
}

export default Snow;
