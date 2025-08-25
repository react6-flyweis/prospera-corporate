import type { People } from "./peopleColumns";

// Sample people data used in the data table. Fields aligned with `People` type.
// Avatars are assigned statically to RandomUser portrait URLs (no helper functions).
export const peoplesData: People[] = [
  {
    employeeId: "123456789",
    user: {
      id: "u1",
      name: "Kalyan Sarkar",
      email: "kalyan.sarkar@example.com",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      mobile: "+8801712345678",
    },
    department: "Designer",
    jobTitle: "UI designer",
    employmentType: "Employee",
    createdAt: "2024-08-01T10:15:00.000Z",
  },
  {
    employeeId: "123456780",
    user: {
      id: "u2",
      name: "Ahmad Dias",
      email: "ahmad.dias@example.com",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      mobile: "+8801712345679",
    },
    department: "Developer",
    jobTitle: "Front End",
    employmentType: "Employee",
    createdAt: "2024-07-21T09:00:00.000Z",
  },
  {
    employeeId: "123456781",
    user: {
      id: "u3",
      name: "Paityn Vetrovs",
      email: "paityn.vetrovs@example.com",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      mobile: "+8801712345680",
    },
    department: "Salesman",
    jobTitle: "Outdoor",
    employmentType: "Employee",
    createdAt: "2024-05-11T14:30:00.000Z",
  },
  {
    employeeId: "123456782",
    user: {
      id: "u4",
      name: "Madelyn Bator",
      email: "madelyn.bator@example.com",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      mobile: "+8801712345681",
    },
    department: "Designer",
    jobTitle: "UX designer",
    employmentType: "Employee",
    createdAt: "2023-12-02T08:45:00.000Z",
  },
  {
    employeeId: "123456783",
    user: {
      id: "u5",
      name: "Marley Dorwart",
      email: "marley.dorwart@example.com",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      mobile: "+8801712345682",
    },
    department: "Designer",
    jobTitle: "UI designer",
    employmentType: "Employee",
    createdAt: "2023-11-08T11:20:00.000Z",
  },
  {
    employeeId: "123456784",
    user: {
      id: "u6",
      name: "Paityn Workman",
      email: "paityn.workman@example.com",
      avatar: "https://randomuser.me/api/portraits/men/77.jpg",
      mobile: "+8801712345683",
    },
    department: "Designer",
    jobTitle: "UI designer",
    employmentType: "Employee",
    createdAt: "2024-01-15T16:00:00.000Z",
  },
  {
    employeeId: "123456785",
    user: {
      id: "u7",
      name: "Adison Gouse",
      email: "adison.gouse@example.com",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      mobile: "+8801712345684",
    },
    department: "Designer",
    jobTitle: "UI designer",
    employmentType: "Employee",
    createdAt: "2024-02-05T12:10:00.000Z",
  },
];

export default peoplesData;
