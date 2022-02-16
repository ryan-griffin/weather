import type { NextPage } from "next";

export async function getServerSideProps() {
    const res = await fetch("");
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}

const Home: NextPage<Props> = ({ data }) => {
    return <>{data}</>;
};

interface Props {
    data: string;
}

export default Home;
