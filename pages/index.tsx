import { NextPage } from "next";

export async function getServerSideProps(): Promise<{
    props: { data: string };
}> {
    const key: string = process.env.API_KEY as string;
    const lat: string = "71.5523";
    const lon: string = "42.3459";

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${lat}&lon=${lon}&appid=${key}`
    );
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}

const Home: NextPage<Props> = ({ data }) => (
    <main className="flex justify-center items-center w-screen h-screen">
        <h1 className="text-9xl font-semibold">{data.current.temp}&deg;F</h1>
    </main>
);

interface Props {
    data: {
        current: {
            temp: string;
        };
    };
}

export default Home;
