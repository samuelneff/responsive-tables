
{

    window.addEventListener('load', initializeRowListeners);

    function initializeRowListeners() {
        const trs = document.querySelectorAll('tr:not(.cannot-expand)');
        trs.forEach(initializeRowListener);
    }

    function initializeRowListener(tr) {
        tr.addEventListener('click', rowClickHandler);
    }

    function rowClickHandler(event) {

        if (event.target.nodeName === 'A') {
            return;
        }

        event.currentTarget.classList.toggle('expanded');
    }

}