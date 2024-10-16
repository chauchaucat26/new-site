function createheader() {
    let headdata = '<a href="index.html"><img src="assets/image/favicon.png" class="logo"></a><nav><ul><li><a href="#">ABOUT</a></li><li><a href="#">TEAM</a></li><li><a href="#">NEWS</a></li><li><a href="#">CONTACT</a></li></ul></nav>';
    let url = "https://math-is-the-best-subject-in-the-world.vercel.app/";
    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.text();
        })
        .then(data => {
        document.getElementById("header").innerHTML = headdata;
        })
        .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    
    console.log(headdata);
}

createheader()
