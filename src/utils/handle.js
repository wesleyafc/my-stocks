export const onlyNumbers = (e) => {
    if (e.key === '+' || e.key === '*' || e.key === '/' || e.key === '-') {
        e.preventDefault();
    }
}