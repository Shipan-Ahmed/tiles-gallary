

const getData = async () => {
    const res = await fetch("https://tile-vogue.vercel.app/tiles.json");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
};

export default getData;