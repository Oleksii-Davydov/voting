const btns = document.querySelectorAll('.counter_btn');

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter_value');
        const counterValue = +inp.value;
        let newValue;

        if (direction === 'plus') {
            newValue = counterValue + 1;
        } else {

        }
        inp.value = newValue;
    })
})


