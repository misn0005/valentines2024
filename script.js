// Add heart cursor on hover
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        document.body.style.cursor = 'url("heart-cursor.png"), auto';
    });

    button.addEventListener('mouseout', () => {
        document.body.style.cursor = 'default';
    });
});
