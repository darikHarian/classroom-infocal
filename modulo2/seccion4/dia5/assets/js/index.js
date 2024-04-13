window.onscroll = function() {
    scrollFunction();
};

const scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar-bg').style.backgroundColor = '#212529';
    } else {
        document.getElementById('navbar-bg').style.backgroundColor = 'transparent';
    };
};