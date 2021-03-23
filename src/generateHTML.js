const header = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="dist/css/style.css">
</head>
<body>
<div class="container">
        <header>
            <h1>Team Profile</h1>
        </header>
        <div class="box-container">`;
const footer = ` </div>
</div>
</body>
</html>`
function generateManager(data) {
    return `<div class="box">
    <h1>Manager</h1>
    <h1>${data.name}</h1>
        <ul>
        <li>Name: ${data.name}</li>
        <li>ID Number: ${data.id}</li>
        <li>Email: ${data.email}</li>
        <li>Office Phone Number: ${data.OfficePhoneNumber}</li>
    </ul>            
</div>
<div class="box-container">
`;
}
function generateEngineer(data) {
   return `<div class="box">
    <h1>Engineer</h1>
    <h1>${data.name}</h1>
    <ul>
        <li>Name: ${data.name}</li>
        <li>ID Number: ${data.id}</li>
        <li>Email: ${data.email}</li>
        <li>Github Username: ${data.github}</li>
    </ul>   
</div>
`
}
function generateEmployee(data) {
return `<div class="box">
    <h1>Employee</h1>
    <h1>${data.name}</h1>
    <ul>
        <li>Name: ${data.name}</li>
        <li>ID Number: ${data.id}</li>
        <li>Email: ${data.email}</li>
    </ul>   
</div>
`
}
function generateIntern(data) {
return `<div class="box">
    <h1>Intern</h1>
    <h1>${data.name}</h1>
    <ul>
        <li>Name: ${data.name}</li>
        <li>ID Number: ${data.id}</li>
        <li>Email: ${data.email}</li>
        <li>School Attending: ${data.school}</li>
    </ul>   
</div>
`
}

module.exports = {generateManager, generateEngineer, generateEmployee ,generateIntern, header, footer}
