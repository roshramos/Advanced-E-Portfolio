function contact (event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_8bj1ftc',
            'template_57ddk88',
            event.target,
            '59Y6hGk63RZJVQbyi'
    ).then (()=> {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible" ;   
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
        "The email service is temporarily unavailable. Please contact me directly on rosh.ramos123@gmail.com"
        );
    })
}
