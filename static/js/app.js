// Site scripts

var toggleMenu = function() {
    var trigger = document.querySelector('.site-menu-trigger'),
        target = document.querySelector('.site-menu'),
        triggerClass = 'is-closed',
        menuIsOpen;

    trigger.classList.add(triggerClass);

    trigger.addEventListener('click', function(e){
        menuIsOpen = trigger.classList.contains(triggerClass);
        if(menuIsOpen) {
            trigger.classList.remove(triggerClass);
        } else {
            trigger.classList.add(triggerClass);
        }
    });
};

toggleMenu();
