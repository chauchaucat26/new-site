function createheader() {
    let url = "./assets/data/texts/header.txt";
    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.text();
        })
        .then(data => {
        document.getElementById("header").innerHTML = data;
        })
        .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

createheader()
