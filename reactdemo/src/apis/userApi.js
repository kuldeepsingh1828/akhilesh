const url = "https://jsonplaceholder.typicode.com/users";

export const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json()
    const columns = Object.keys(data[0]);
    return { columns, data }
}