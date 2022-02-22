import { NextPage } from "next";
import Image from "next/image";

export async function getServerSideProps(): Promise<{
    props: { data: string };
}> {
    const key: string = process.env.API_KEY as string;
    const city: string = "shrewsbury";
    const state: string = "25";
    const country: string = "US";

    const locationRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${key}`
    );
    const location = await locationRes.json();

    const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${location[0].lat}&lon=${location[0].lon}&appid=${key}`
    );
    const data = await weatherRes.json();
    data.location = location;

    return {
        props: {
            data,
        },
    };
}

const Home: NextPage<Props> = ({ data }) => {
    const date = new Date();
    const hour = date.getHours();
    let gradient: string | undefined;
    if (hour >= 20 || hour <= 4) {
        gradient = "bg-gradient-to-br from-gray-800 to-gray-900";
    } else if (hour >= 5 && hour <= 13) {
        gradient = "bg-gradient-to-br from-sky-400 to-sky-600";
    } else if (hour >= 14 && hour <= 19) {
        gradient = "bg-gradient-to-br from-sky-700 to-sky-900";
    }

    return (
        <main
            className={`flex flex-col justify-center items-center w-screen h-screen ${gradient}`}
        >
            <h1 className="text-4xl font-semibold">{data.location[0].name}</h1>
            <div className="flex items-center">
                <Image
                    src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
                    height={128}
                    width={128}
                    alt=""
                />
                <h1 className="text-8xl font-semibold">
                    {data.current.temp}&deg;
                </h1>
            </div>
            <h1 className="text-4xl font-semibold mb-6">
                {data.current.weather[0].description}
            </h1>
            <div className="flex gap-10">
                <h1 className="text-4xl font-semibold">
                    L:{data.daily[0].temp.min}&deg;
                </h1>
                <h1 className="text-4xl font-semibold">
                    H:{data.daily[0].temp.max}&deg;
                </h1>
            </div>
        </main>
    );
};

interface Props {
    data: {
        location: any[];
        current: {
            temp: string;
            weather: any[];
        };
        daily: any[];
    };
}

export default Home;
