class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
} 

const firstCommnet = new Comment ('First comment')

console.log(firstCommnet)

firstCommnet.upvote()
console.log(firstCommnet)

firstCommnet.upvote()
firstCommnet.upvote()
console.log(firstCommnet)

console.log('-----------')

const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

console.log(secondComment, thirdComment)


secondComment.upvote()
thirdComment.upvote()

console.log(secondComment, thirdComment)

console.log('-----------')

class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray(10, 36, 55)

console.log(myArray)
console.log(myArray.sum())