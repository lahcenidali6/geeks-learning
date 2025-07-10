
interface User {
  readonly id: number;   
  name: string;
  email: string;
}


interface PremiumUser extends User {
  membershipLevel?: string; 
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  
  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`);
  } else {
    console.log("Membership Level: None");
  }
}


const premiumUser1: PremiumUser = {
  id: 101,
  name: "Ahmed",
  email: "ahmed@example.com",
  membershipLevel: "Gold"
};

const premiumUser2: PremiumUser = {
  id: 102,
  name: "Sara",
  email: "sara@example.com",
};

printUserDetails(premiumUser1);


printUserDetails(premiumUser2);

