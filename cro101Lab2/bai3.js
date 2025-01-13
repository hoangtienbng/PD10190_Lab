const class1 = [
    {
        mssv: 'PS0000',
        name: 'Nguyen Van A',
        avgPoint: 8.9,
        avgTraningPoint: 7,
        status: 'pass',
    },
    {
        mssv: 'PS0001',
        name: 'Nguyen Van B',
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: 'pass',
    }
];

const class2 = [
    {
        mssv: 'PS0002',
        name: 'Nguyen Van C',
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: 'failed',
    },
    {
        mssv: 'PS0003',
        name: 'Nguyen Van D',
        avgPoint: 10,
        avgTraningPoint: 10,
        status: 'pass',
    },
    {
        mssv: 'PS0004',
        name: 'Nguyen Van E',
        avgPoint: 10,
        avgTraningPoint: 2,
        status: 'pass',
    },
]

const allClass = class1.concat(class2);


const studentFailed = allClass.filter(student => student.status === 'failed');

console.log("Danh sach sinh vien tong sinh vien: ", allClass);
console.log("//===================================//");

console.log("Danh sach sinh vien that bai: ", studentFailed);
console.log("//===================================//");


function sapXepSV(allClass) {
    for (let i = 0; i < allClass.length; i++) {
        for (let j = i + 1; j < allClass.length; j++) {
            if (allClass[i].avgPoint > allClass[j].avgPoint) {
                let temp = allClass[i];
                allClass[i] = allClass[j];
                allClass[j] = temp;
            }
        }
    }
    console.log("Danh sach sinh vien da sap xep từ cao den thap: ", allClass);
    console.log("//===================================//");
}


function sapXepSV2(allClass) {
    for (let i = 0; i < allClass.length; i++) {
        for (let j = i + 1; j < allClass.length; j++) {
            if (allClass[i].avgTraningPoint > allClass[j].avgPoint) {
                let temp = allClass[i];
                allClass[i] = allClass[j];
                allClass[j] = temp;
            }
        }
    }
    console.log("Danh sach sinh vien da sap xep từ cao den thap: ", allClass);
    console.log("//===================================//");
}



sapXepSV(allClass);