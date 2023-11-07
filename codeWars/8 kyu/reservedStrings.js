function solution(str){
    let answer = [];
    for (let i = 0; i < str.length; i++) {
        answer.unshift(str[i])
    }
    return answer.join("");
};