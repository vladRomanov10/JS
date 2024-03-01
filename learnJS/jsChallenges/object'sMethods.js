const calculator = {
    read() {
        this.a = Number(prompt('Введите первое число'))
        this.b = Number(prompt('Введите второе число'))
    },

    sum() {
        console.log(this.a + this.b)
    },

    mul() {
        console.log(this.a * this.b)
    }
}
