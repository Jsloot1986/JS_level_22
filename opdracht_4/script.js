const testNum = num => {
    return new Promise((resolve, reject) =>{
        if (num > 10){
            resolve(num + 'is groter dan 10');
        }else{
            reject(num + 'is kleiner dan 10');
        }
    });
};
testNum(8)
    .then(result => console.log(result)
    )
    .catch(error => console.log(error));

testNum(12)
    .then(result => console.log(result)
    )
    .catch(error => console.log(error));

const makeAllCaps = words => {
        return new Promise((resolve, reject)=>{
            if (words.every(word =>{
                return typeof word === 'string';
            })
        )
        {resolve(
            sortWords(words.map(word =>{
                    return word.toUpperCase();  
                })
            )
        );
            }else {
                reject('Not a string!');
            }
    });
};

const sortWords = words =>{
    return new Promise((resolve, reject) =>{
        if (words) {
            resolve(words.sort());
        }else {
            reject('strings only!');
        }
    });
};

const wordsArr = ['tea', 'coffee', 'break'];

makeAllCaps(wordsArr)
.then(sortWords(wordsArr))
.then(result => console.log(result))
.catch(error => console.log(error));

const noWords = [1, 'hoi', 'Amsterdam', '='];

makeAllCaps(noWords)
.then(sortWords(noWords))
.then (result=> console.log(result))
.catch(error => console.log(error));