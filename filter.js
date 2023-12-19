//Given a list of numbers, use filter to create a new list containing only the even numbers.

arr = [1,2,3,4,5,6]

const filtering = (i) =>{
    if(i%2==0){
        return true;
    }
    else{
        return false;
    }
}


console.log(arr.filter(filtering));