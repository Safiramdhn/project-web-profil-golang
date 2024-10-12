// Function to render project list
const renderProjectList = (projects) => {
    const contentDiv = document.getElementById('project-list');
    contentDiv.innerHTML = '';
  
    if (projects && projects.length) {
      projects.forEach((project) => {
        const article = document.createElement('article');
        article.innerHTML = `
            <hgroup>
              <h3>${project.name}</h3>
              <p>${project.start_date} - ${project.end_date} | <a href="${project.link}">Source Code</a></p>
            </hgroup>
            <p class="description">Project Description: ${project.description}</p>
            <p class="tech-stack">Tech Stack: ${project.tech_stack}</p>
          `;
        contentDiv.appendChild(article);
      });
    } else {
      console.log('No projects found.');
    }
  };
  
  // Main function to load project data and render the list
  const loadProject = () => {
    const projects = [
      {
        id: 1,
        name: 'Zettacamp Mini Project',
        description: '',
        start_date: 'dd/mm/yyyy',
        end_date: 'dd/mm/yyyy',
        tech_stack: '',
        link: '',
      },
      {
        id: 2,
        name: 'Restaurant Management Project',
        description: '',
        start_date: 'dd/mm/yyyy',
        end_date: 'dd/mm/yyyy',
        tech_stack: '',
        link: '',
      },
      {
        id: 3,
        name: 'Image Processing App Project',
        description: '',
        start_date: 'dd/mm/yyyy',
        end_date: 'dd/mm/yyyy',
        tech_stack: '',
        link: '',
      },
    ];
    renderProjectList(projects);
  };
  
  document.addEventListener('DOMContentLoaded', loadProject);