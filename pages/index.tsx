import { NextPage } from "next";

export async function getServerSideProps(): Promise<{
    props: { data: string };
}> {
    const key: string = "7bfe2a9d6e00e1f0d6974f869e519a07";
    const lon: string = "42.2959";
    const lat: string = "71.7128";

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=${lat}&lon=${lon}&appid=${key}`
    );
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}

const Home: NextPage<Props> = ({ data }) => (
    <main>
        <h1>{data.main.temp}°F</h1>
    </main>
);

interface Props {
    data: {
        main: {
            temp: string;
        };
    };
}

export default Home;
