function searchByName(newname){
    let newData = dataOfPeople.filter(function(elem){
        return elem.name == newname;
    })
}
function getBiggestAge(arr){
   let oldestDate = new Date();
    for(let i = 0; i < arr.length; i++){
        let dateInArr = new Date(arr[i].birthDate);
        if(oldestDate > dateInArr) oldestDate = dateInArr;
    }
    return oldestDate;
}


const dataOfPeople = [
    {
        name: 'Jonny Walker',
        birthDate: '1995-12-17'
    },
    {
        name: 'Andrew',
        birthDate: '2001-10-29'
    },
    {
        name: 'Jonny Walker',
        birthDate: '1992-12-17'
    },
    {
        name: 'Andrew',
        birthDate: '2008-10-29'
    },
    {
        name: 'Jonny Walker',
        birthDate: '1985-12-17'
    },
    {
        name: 'Andrew',
        birthDate: '2010-10-29'
    }    
];





