function Calculator() {
    this.read = function() {
        this.a = Number(prompt('Введите первое число'))
        this.b = Number(prompt('Введите второе число'))
    },

    this.sum = function() {
        console.log(this.a + this.b)
    },

    this.mul = function() {
        console.log(this.a * this.b)
    }
}