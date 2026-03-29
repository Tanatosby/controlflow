let userRole = 'employee'; // This can be 'admin', 'employee', 'subscriber', or any other role
let userAuthorized; 
switch (userRole) {
    case 'admin':
        userAuthorized = "Admin access granted.";
        break;
    case 'employee':
        userAuthorized = "Dietary Services";
        break;
    case 'suscriber':
        userAuthorized = "Partial access granted.";
        break;
    default:
        userAuthorized = "You do not have access.";
}

console.log(userAuthorized);    