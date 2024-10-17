function creat() {
    let currentPage = window.location.pathname.split('/').pop();
    let pageName = currentPage.split('.')[0];
    let cathName = pageName + '-site-data';
    let headurl = './assets/texts/' + pageName + '.txt'
    fetch(headurl)
    .then(response => response.text())
    .then(txtContent => {
        let lsdata = txtContent
        let currentTime = new Date().toLocaleString();
        localStorage.setItem(cathName, lsdata);
        localStorage.setItem(cathName + 'loadTime', currentTime);
        document.getElementById("main").innerHTML = lsdata;
    })
    .catch(error => {
        localStorage.setItem(cathName, error);
    });

if ('serviceWorker' in navigator) {
}
}
creat()
