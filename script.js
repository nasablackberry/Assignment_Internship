
var employees = [
    {
      id: 1,
      name: "Arvind Singh Rathore",
      dept: "IT",
      address: "Army Institute Of Technology, Pune",
      coordinates: [18.6068991,73.8751184] 
    },
    {
        id: 2,
        name: "Shivank Singh",
        dept: "IT",
        address: "Aryabhatta Center - AIT Library",
        coordinates: [ 18.6067463,73.875109] 
      },
    {
        id: 3,
        name: "Abhay Sahu",
        dept: "IT",
        address: "AIT Boys Mess",
        coordinates: [18.6063946,73.8746713] 
    },
    {
        id: 4,
        name: "Sonali Singh",
        dept: "Mech",
        address: "Kalpana Hostel",
        coordinates: [18.6063946,73.8746713] 
    }

   
  ];

  function updateCoordinates(employeeId, newAddress) {
    var employee = employees.find(emp => emp.id === employeeId);
    employee.address = newAddress;
    employee.coordinates = [newLatitude, newLongitude];
  }
  