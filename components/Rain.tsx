import { FC } from "react";

const Rain: FC<Props> = ({ count }) => {
    let drops: JSX.Element[] = [];

    for (let i = 0; i < count; i++) {
        const size: number = Math.random() * 8;
        const posX: number = Math.random() * 101;
        const duration: number = Math.random() * (1 - 0.8) + 0.8;
        const delay: number = Math.random() * 5;

        drops.push(
            <>
                <div
                    key={i}
                    className={`fixed bg-blue-300/50 rounded-full aspect-[1/15] min-w-[5px] min-h-[5px] top-[-120px]`}
                    style={{
                        width: `${size}px`,
                        left: `${posX}%`,
                        animation: `rain ${duration}s linear ${delay}s infinite`,
                    }}
                ></div>
                <style jsx>{`
                    @keyframes rain {
                        100% {
                            margin-top: calc(100vh + 120px);
                        }
                    }
                `}</style>
            </>
        );
    }

    return (
        <>
            <div className="h-screen w-screen bg-gradient-to-b from-gray-600 via-grey-500 to-gray-500/50">
                {drops}
            </div>
        </>
    );
};

interface Props {
    count: number;
}

export default Rain;
