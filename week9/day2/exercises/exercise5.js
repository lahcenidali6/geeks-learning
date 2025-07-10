function printUserDetails(user) {
    console.log("ID: ".concat(user.id));
    console.log("Name: ".concat(user.name));
    console.log("Email: ".concat(user.email));
    if (user.membershipLevel) {
        console.log("Membership Level: ".concat(user.membershipLevel));
    }
    else {
        console.log("Membership Level: None");
    }
}
var premiumUser1 = {
    id: 101,
    name: "Ahmed",
    email: "ahmed@example.com",
    membershipLevel: "Gold"
};
var premiumUser2 = {
    id: 102,
    name: "Sara",
    email: "sara@example.com",
};
printUserDetails(premiumUser1);
printUserDetails(premiumUser2);
