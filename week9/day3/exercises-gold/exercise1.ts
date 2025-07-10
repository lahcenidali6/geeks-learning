interface User {
  name: string;
  email: string;
}

interface Admin {
  adminLevel: number;
}

type AdminUser = User & Admin;

function getProperty(obj: AdminUser, prop: string): any {
  if (prop in obj) {
    return (obj as any)[prop];
  }
  return undefined;
}

const admin: AdminUser = {
  name: "John",
  email: "john@example.com",
  adminLevel: 2
};

console.log(getProperty(admin, "name"));       
console.log(getProperty(admin, "adminLevel")); 
console.log(getProperty(admin, "nonexistent"));
