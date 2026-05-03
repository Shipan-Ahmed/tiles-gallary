

const getData = async () => {
    const res = await fetch("http://localhost:3000/tiles.json");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
};

export default getData;