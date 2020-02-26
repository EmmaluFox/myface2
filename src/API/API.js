function fetchApi(){
    fetch('https://localhost:5000/')
        .then(response => response.json())
        .then(data => this.setState({ data }));
}
export {fetchApi};