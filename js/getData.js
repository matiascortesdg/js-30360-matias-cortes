const getData = async () => {
    try {
       const response = await fetch("./js/stock.json")
       const data = await response.json();
       console.log(data);
       return data
    } catch (error) {
        console.log("hubo un error", error);
    }
}

export { getData }