// Write your solution in this file!
const employee = {
    name:"John",
    streetAddress: "123 Main Street"
}

function updateEmployeeWithKeyAndValue(empObj, key, value){
    const newObj = {...empObj}
    newObj[key] = value
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(empObj, key, value){
    empObj[key] = value
    return empObj
}

function deleteFromEmployeeByKey(empObj, key){
    const newObj = {...empObj}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}