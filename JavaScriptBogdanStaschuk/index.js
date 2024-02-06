const newPost = function (post, addedAt = Date()) {
    return {
        ...post,
        addedAt: addedAt,
    }
};

const firstPost = {
    id: 1,
    author: 'Vlad',
}

console.log(newPost(firstPost));