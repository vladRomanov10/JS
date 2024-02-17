class MyFriends {
    constructor (name, surename, bestFriend) {
        this.name = name
        this.surename = surename
        this.bestFriend = bestFriend
    }

    quarrel() {
        this.bestFriend = !this.bestFriend
        return 'Successfully'
    }

    static doubleFriend(friend1, friend2) {
        return `${friend1} + ${friend2} = GAY`
    }
}

const nike = new MyFriends('Никита', 'Грузинский', true)
const rus = new MyFriends('Руслан', 'Арипжанов', true)

console.log(nike)
console.log(rus)

console.log(MyFriends.doubleFriend(nike.name, rus.name))