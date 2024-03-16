const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  



function findUserByUsername(arr , str){
    return arr.find(function(obj){
        return obj.username === str;
    })
}

// console.log(findUserByUsername(users, 'mlewis')) // {username: 'mlewis'}
// console.log(findUserByUsername(users, 'taco')) // undefined







function removeUser(arr, str){
    const index = arr.findIndex(function(obj){
        return obj.username === str;
    })
    if (index !== -1){
        arr.splice(index, 1);
    }
    return arr ;
}
// console.log(removeUser(users, 'akagen')) // {username: 'akagen'}
// console.log(removeUser(users, 'akagen')) // undefined
