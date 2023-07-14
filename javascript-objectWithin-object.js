var employee_details = {

    emp1:{
        name:"krishnanshu",
        age:23
    },

    emp2:{
        name:"Sulangana",
        age:23
    },

    emp3:{
        name:"Rajat Sharma",
        age:23
    }
};

let a = 1;
console.log(employee_details['emp1'].name,employee_details['emp2'].name,employee_details['emp3'].name);
a++;
console.log(employee_details['emp'+a]);
a++;
console.log(employee_details['emp'+a]);