export const Redirect = () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('access_token');
    if (token) {
        localStorage.setItem('token', token);
        window.location.href = '/teste';
    }
    console.log(localStorage.getItem('token'));
    return(
        <>
            <h1>Redirect</h1>
        </>
    )
}