function creat() {
  const currentPage = window.location.pathname.split('/').pop();
  const pageName = currentPage.split('.')[0];
  console.log(pageName)
}
