class CoffeMachine {
    _waterAmount = 0

    set waterAmount(value) {
        if (value < 0) throw new Error('Отрицательное количество воды')
        this._waterAmount = value
    }
    get waterAmount() {
        return this._waterAmount
    }
    
    constructor(power) {
        this._power = power
        console.log(`Создана кофеварка, мощность: ${power}`)
    }

    get power() {
        return this._power
    }
}

let coffeMachine = new CoffeMachine(100)

coffeMachine.waterAmount = -1