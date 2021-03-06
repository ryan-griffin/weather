import { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";
import Rain from "../components/Rain";
import Snow from "../components/Snow";
import Clouds from "../components/Clouds";

const Home: NextPage = () => {
    async function weather(lat: number, lon: number): Promise<string> {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await res.json();
        return data;
    }

    const [data, setData] = useState({
        weather: [{ description: "" }, { icon: "" }],
        name: "",
        main: {
            temp: "",
            temp_min: "",
            temp_max: "",
        },
    });

    const [gradient, setGradient] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
            weather(pos.coords.latitude, pos.coords.longitude).then(
                (result: any) => {
                    setData(result);
                }
            );
            const date = new Date();
            const hour = date.getHours();
            if (hour >= 20 || hour <= 3) {
                setGradient("bg-gradient-to-br from-sky-400/20 to-sky-600/20");
            } else if (hour >= 4 && hour <= 7) {
                setGradient("bg-gradient-to-br from-sky-400/40 to-sky-600/40");
            } else if (hour >= 8 && hour <= 15) {
                setGradient("bg-gradient-to-br from-sky-400 to-sky-600");
            } else if (hour >= 16 && hour <= 19) {
                setGradient("bg-gradient-to-br from-sky-400/40 to-sky-600/40");
            }
        });
    }, []);

    let effect: JSX.Element | undefined;
    if (
        data.weather[0].description == "rain" ||
        data.weather[0].description == "shower rain"
    ) {
        effect = <Rain count={100} />;
    } else if (data.weather[0].description == "snow") {
        effect = <Snow count={400} />;
    } else if (data.weather[0].description == "light snow") {
        effect = <Snow count={200} />;
    } else if (data.weather[0].description == "fog") {
        effect = <div className="h-screen w-screen bg-white/25"></div>;
    } else if (
        data.weather[0].description == "few clouds" ||
        data.weather[0].description == "scattered clouds" ||
        data.weather[0].description == "broken clouds"
    ) {
        effect = <Clouds />;
    }

    return (
        <main className={`w-screen h-screen bg-black ${gradient}`}>
            {effect}
            <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen">
                <h1 className="text-4xl font-semibold">{data.name}</h1>
                <div className="flex items-center">
                    <Image
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        height={128}
                        width={128}
                        alt=""
                    />
                    <h1 className="text-8xl font-semibold">
                        {data.main.temp}&deg;
                    </h1>
                </div>
                <h1 className="text-4xl font-semibold mb-6">
                    {data.weather[0].description}
                </h1>
                <div className="flex gap-10">
                    <div className="flex items-center gap-1">
                        <Image
                            src="/icons/arrow_down.png"
                            height={30}
                            width={30}
                            alt=""
                        />
                        <h1 className="text-4xl font-semibold">
                            {data.main.temp_min}&deg;
                        </h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image
                            src="/icons/arrow_up.png"
                            height={30}
                            width={30}
                            alt=""
                        />
                        <h1 className="text-4xl font-semibold">
                            {data.main.temp_max}&deg;
                        </h1>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
