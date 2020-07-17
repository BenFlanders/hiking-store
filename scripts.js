const selectElement = (s) => document.querySelector(s);

selectElement('.open-slide').addEventListener('click', () => {
    selectElement('.side-nav').classList.add('active');
})

selectElement('.btn-close').addEventListener('click', () => {
    selectElement('.side-nav').classList.remove('active');
})