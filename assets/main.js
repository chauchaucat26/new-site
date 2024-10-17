function creat() {
    let currentPage = window.location.pathname.split('/').pop();
    let pageName = currentPage.split('.')[0];
    let cathName = pageName + '-site-data'
    console.log(pageName)
}

creat()
