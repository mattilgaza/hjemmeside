function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
    const content = document.querySelector('.content');
    content.style.visibility = 'hidden'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
    const content = document.querySelector('.content');
    content.style.visibility = 'visible'
}

