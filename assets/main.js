function creat() {
    let currentPage = window.location.pathname.split('/').pop();
    let pageName = currentPage.split('.')[0];
    console.log(currentPage)
    console.log(pageName)
}

creat()
