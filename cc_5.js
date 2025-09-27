
// Coding Challenge 5: Employee Payroll Calculation 
// Step One: Employee Data  

const employees = [ 
    { name: "Olivia Durham", hourlyRate: 25, hoursWorked: 40 }, 
    { name: "Andriana Kilias", hourlyRate: 35, hoursWorked: 45 },
    { name: "Isabella Miranda", hourlyRate: 30, hoursWorked: 50}, 
    { name: "Sarah Miranda",  hourlyRate: 40, hoursWorked: 38 }, 
]; 

// Step 3: Payroll Base for 40 hours only 

function calculateBasePay(rate, hours) { 
    const regularHours = hours > 40 ? 40 : hours;
    return rate * regularHours * rate; 
} 
// Step 4: Overtime Pay Calculation 
function calculateOvertimePay(rate, hours) {
    if (hours <= 40) return 0;
    const overtimeHours = hours - 40; 
    return overtimeHours * rate * 1.5; 
}  
// return section 
function taxCalculator(rate) {
    return function(amount) {
        return amount * rate; 
    };

} 
// Step 5 : Tax Calculation 
const tax15 = taxCalculator(0.15); 
function calculateTaxes(grossPay) {
    return tax15(grossPay);
}
// Step 6: Payroll Summary that return an object  
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay; 
    const taxes = calculateTaxes(grossPay); 
    const netPay = grossPay - taxes;  

    return { 
        name: employee.name, 
        basePay: round2(basePay), 
        overtimePay: round2(overtimePay),
        grossPay: round2(grossPay),
        netPay: round2(netPay), 
    };
}
