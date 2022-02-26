import { FC } from "react";

const Snow: FC<Props> = ({ count }) => {
    let flakes: JSX.Element[] = [];

    for (let i = 0; i < count; i++) {
        const size: number = Math.random() * 14;
        const posX: number = Math.random() * 101;
        const duration: number = Math.random() * (10 - 4) + 4;
        const delay: number = Math.random() * 5;
        flakes.push(
            <>
                <div
                    key={i}
                    className={`fixed bg-white/60 shadow-[0_0_10px_1px_rgba(255,255,255,0.1)] rounded-full min-w-[8px] min-h-[8px]`}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        top: "-15px",
                        left: `${posX}%`,
                        animation: `snow ${duration}s linear ${delay}s infinite`,
                    }}
                ></div>
                <style jsx>{`
                    @keyframes snow {
                        100% {
                            margin-top: calc(100vh + 15px);
                        }
                    }
                `}</style>
            </>
        );
    }

    return <>{flakes}</>;
};

interface Props {
    count: number;
}

export default Snow;
