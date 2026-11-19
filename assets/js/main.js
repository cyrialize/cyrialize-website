document.addEventListener('DOMContentLoaded', function() {
    let theme = getTheme();
    setTheme(theme);
    setThemeSelect(theme);
});

function selectTheme(event) {
    let chosenTheme = document.getElementById('themes').value;
    setTheme(chosenTheme);
    saveTheme(chosenTheme);
}

function setTheme(theme) {
    let body = document.getElementsByTagName('body')[0];

    if (theme === 'none') {
	body.classList = [];

    } else {
	body.classList = [theme];
    }
}

function saveTheme(theme) {
    localStorage.setItem('cyrialize-theme', theme);
}

function setThemeSelect(theme) {
    document.getElementById('themes').value = theme;
}

function getTheme() {
    let savedTheme = localStorage.getItem('cyrialize-theme');
    if (savedTheme === null) {
	localStorage.setItem('cyrialize-theme', 'none');
	return 'none';
    }
    return savedTheme;
}
