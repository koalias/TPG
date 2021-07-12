const generateTeam = (team) => {
    const generateManager = (manager) => {
      return `
          <div class="card px-6 py-4">
          <div class="card-header">
              <h2 class="card-title">${manager.getName()}</h2>
          </div>
          <div class="card-body">
              <ul class="list-group">
                <li >Role:${manager.getRole()}</li>
                  <li>ID: ${manager.getId()}</li>
                  <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li>Office number: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
      </div>
          `;
    };

    const generateEngineer = (engineer) => {
      return `
          <div class="card px-6 py-4">
            <div class="card-header">
          <h1 class="text-xl">${engineer.getName()}</h1>
        </div>
         <div class="card-body">
          <ul>
            <li >Role:${engineer.getRole()}</li>
              <li>ID: ${engineer.getId()}</li>
              <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
          </ul>
        </div>
    </div>
          `;
    };
  
    // create the html for interns
    const generateIntern = (intern) => {
      return `
      <div class="card px-6 py-4">
            <div class="card-header">
                <h1 class="text-xl">${intern.getName()}</h1>  
            </div>
            <div class="card-body">
                <ul >
                    <li >Role:${intern.getRole()}</li>
                    <li >ID: ${intern.getId()}</li>
                    <li >Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li >GitHub: <a href="https://github.com/fsdf" target="_blank" rel="noopener noreferrer">fsdf</a></li>
                    <li ">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
          `;
    };
  
    const html = [];
  
    html.push(
      team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
  
    return html.join("");
  };
  
  // export function to generate entire page
module.exports = (team) => {
    return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Team Profile Generator</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
                <script src="https://kit.fontawesome.com/c502137733.js"></script>
            </head>
    
            <body>
                <div class="container-fluid pb-3 pt-3 bg-blue-500 mb-5">
                    <h1 class="text-center text-b text-bold text-xl text-white">Team</h1>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="team-area col-12 d-flex justify-content-center">
                            ${generateTeam(team)}
                        </div>
                    </div>
                </div>
            </body>
        </html>
      `;
  };
  