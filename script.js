var employees = [
    {
      id: 1,
      name: "Arvind Singh Rathore",
      dept: "IT",
      address: "Army Institute Of Technology, Pune",
      coordinates: [18.6068991, 73.8751184]
    },
    {
      id: 2,
      name: "Shivank Singh",
      dept: "IT",
      address: "Aryabhatta Center - AIT Library",
      coordinates: [18.6067463, 73.875109]
    },
    {
      id: 3,
      name: "Abhay Sahu",
      dept: "IT",
      address: "AIT Boys Mess",
      coordinates: [18.6063946, 73.8746713]
    },
    {
      id: 4,
      name: "Sonali Singh",
      dept: "Mech",
      address: "Kalpana Hostel",
      coordinates: [18.6063946, 73.8746713]
    },
    // 50 additional employees
    {
      id: 5,
      name: "Rahul Sharma",
      dept: "IT",
      address: "Kothrud, Pune",
      coordinates: [18.509536, 73.825485]
    },
    {
      id: 6,
      name: "Aishwarya Deshmukh",
      dept: "HR",
      address: "Shivajinagar, Pune",
      coordinates: [18.536208, 73.841581]
    },
    {
      id: 7,
      name: "Amit Patel",
      dept: "Marketing",
      address: "Viman Nagar, Pune",
      coordinates: [18.567583, 73.914128]
    },
    {
      id: 8,
      name: "Pooja Gupta",
      dept: "Finance",
      address: "Magarpatta City, Pune",
      coordinates: [18.523616, 73.930034]
    },
    // Continue adding employees below
    {
      id: 9,
      name: "Aniket Joshi",
      dept: "IT",
      address: "Baner, Pune",
      coordinates: [18.563972, 73.776244]
    },
    {
      id: 10,
      name: "Priya Shah",
      dept: "Marketing",
      address: "Bund Garden Road, Pune",
      coordinates: [18.533137, 73.885742]
    },
    {
      id: 11,
      name: "Rohit Mehta",
      dept: "Finance",
      address: "Kalyani Nagar, Pune",
      coordinates: [18.548333, 73.906461]
    },
    {
      id: 12,
      name: "Sneha Verma",
      dept: "HR",
      address: "Wakad, Pune",
      coordinates: [18.607185, 73.765677]
    },
    {
      id: 13,
      name: "Vikram Sharma",
      dept: "IT",
      address: "Pimpri-Chinchwad, Pune",
      coordinates: [18.620346, 73.807974]
    },
    {
      id: 14,
      name: "Neha Patel",
      dept: "Finance",
      address: "Kharadi, Pune",
      coordinates: [18.550706, 73.939834]
    },
    {
      id: 15,
      name: "Amita Das",
      dept: "Marketing",
      address: "Hadapsar, Pune",
      coordinates: [18.504315, 73.927995]
    },
    {
      id: 16,
      name: "Kunal Bhatt",
      dept: "IT",
      address: "Bavdhan, Pune",
      coordinates: [18.511172, 73.765333]
    },
    {
      id: 17,
      name: "Meera Jain",
      dept: "HR",
      address: "Aundh, Pune",
      coordinates: [18.561811, 73.810757]
    },
    {
      id: 18,
      name: "Alok Singhania",
      dept: "Finance",
      address: "Camp, Pune",
      coordinates: [18.517126, 73.855900]
    },
    {
      id: 19,
      name: "Anita Reddy",
      dept: "Marketing",
      address: "Senapati Bapat Road, Pune",
      coordinates: [18.533481, 73.840829]
    },
    {
      id: 20,
      name: "Gaurav Mishra",
      dept: "IT",
      address: "Kondhwa, Pune",
      coordinates: [18.478468, 73.891986]
    },
    {
      id: 21,
      name: "Renuka Sharma",
      dept: "HR",
      address: "Katraj, Pune",
      coordinates: [18.447611, 73.864985]
    },
    {
      id: 22,
      name: "Santosh Gupta",
      dept: "IT",
      address: "Bibwewadi, Pune",
      coordinates: [18.479843, 73.867670]
    },
    {
      id: 23,
      name: "Rohini Desai",
      dept: "Marketing",
      address: "Karve Nagar, Pune",
      coordinates: [18.496793, 73.818623]
    },
    {
      id: 24,
      name: "Ajay Kapoor",
      dept: "Finance",
      address: "Pashan, Pune",
      coordinates: [18.545628, 73.802757]
    },
    {
      id: 25,
      name: "Rajesh Iyer",
      dept: "IT",
      address: "Nigdi, Pune",
      coordinates: [18.651124, 73.775878]
    },
    {
      id: 26,
      name: "Anjali Shah",
      dept: "HR",
      address: "Vishrantwadi, Pune",
      coordinates: [18.570964, 73.889438]
    },
    {
      id: 27,
      name: "Avinash Sharma",
      dept: "Marketing",
      address: "Bhosari, Pune",
      coordinates: [18.625348, 73.836754]
    },
    {
      id: 28,
      name: "Nisha Singhania",
      dept: "IT",
      address: "Chinchwad, Pune",
      coordinates: [18.634450, 73.796624]
    },
    {
      id: 29,
      name: "Manoj Kumar",
      dept: "Finance",
      address: "Yerwada, Pune",
      coordinates: [18.564352, 73.876132]
    },
    {
      id: 30,
      name: "Anita Gupta",
      dept: "HR",
      address: "Wanowrie, Pune",
      coordinates: [18.494300, 73.905887]
    },
    {
      id: 31,
      name: "Rahul Deshpande",
      dept: "IT",
      address: "Hinjawadi, Pune",
      coordinates: [18.591592, 73.738472]
    },
    {
      id: 32,
      name: "Priyanka Mishra",
      dept: "Marketing",
      address: "Koregaon Park, Pune",
      coordinates: [18.536917, 73.893745]
    },
    {
      id: 33,
      name: "Sanjay Patel",
      dept: "Finance",
      address: "Narhe, Pune",
      coordinates: [18.443875, 73.803947]
    },
    {
      id: 34,
      name: "Kavita Rao",
      dept: "HR",
      address: "Lohegaon, Pune",
      coordinates: [18.580346, 73.918906]
    },
    {
      id: 35,
      name: "Ramesh Kumar",
      dept: "IT",
      address: "Shivne, Pune",
      coordinates: [18.447737, 73.792346]
    },
    {
      id: 36,
      name: "Ananya Sharma",
      dept: "Marketing",
      address: "Wagholi, Pune",
      coordinates: [18.576249, 73.982140]
    },
    {
      id: 37,
      name: "Vijay Reddy",
      dept: "Finance",
      address: "Deccan Gymkhana, Pune",
      coordinates: [18.515556, 73.837137]
    },
    {
      id: 38,
      name: "Priya Kapoor",
      dept: "HR",
      address: "Warje, Pune",
      coordinates: [18.477876, 73.803604]
    },
    {
      id: 39,
      name: "Abhishek Iyer",
      dept: "IT",
      address: "Pimpri, Pune",
      coordinates: [18.620875, 73.812466]
    },
    {
      id: 40,
      name: "Sneha Joshi",
      dept: "Marketing",
      address: "Khadki, Pune",
      coordinates: [18.570389, 73.840462]
    },
    {
      id: 41,
      name: "Santosh Kumar",
      dept: "Finance",
      address: "Sinhagad Road, Pune",
      coordinates: [18.465984, 73.817819]
    },
    {
      id: 42,
      name: "Rajesh Shah",
      dept: "HR",
      address: "Dhanori, Pune",
      coordinates: [18.582188, 73.891261]
    },
    {
      id: 43,
      name: "Smita Singh",
      dept: "IT",
      address: "Vadgaon Sheri, Pune",
      coordinates: [18.553275, 73.934233]
    },
    {
      id: 44,
      name: "Vishal Mehta",
      dept: "Marketing",
      address: "Chandan Nagar, Pune",
      coordinates: [18.551325, 73.939037]
    },
    {
      id: 45,
      name: "Deepak Patel",
      dept: "Finance",
      address: "Magarpatta, Pune",
      coordinates: [18.526793, 73.932727]
    },
    {
      id: 46,
      name: "Aarti Sharma",
      dept: "HR",
      address: "Dighi, Pune",
      coordinates: [18.611162, 73.876709]
    },
    {
      id: 47,
      name: "Rohan Kapoor",
      dept: "IT",
      address: "Katraj-Kondhwa Road, Pune",
      coordinates: [18.461622, 73.852102]
    },
    {
      id: 48,
      name: "Anita Verma",
      dept: "Marketing",
      address: "Balewadi, Pune",
      coordinates: [18.580556, 73.753996]
    },
    {
      id: 49,
      name: "Rajat Iyer",
      dept: "Finance",
      address: "Viman Nagar, Pune",
      coordinates: [18.567583, 73.914128]
    },
    {
      id: 50,
      name: "Pooja Gupta",
      dept: "HR",
      address: "Baner, Pune",
      coordinates: [18.558691, 73.786777]
    }
  ];

  function updateCoordinates(employeeId, newAddress) {
    var employee = employees.find(emp => emp.id === employeeId);
    employee.address = newAddress;
    employee.coordinates = [newLatitude, newLongitude];
  }
  
