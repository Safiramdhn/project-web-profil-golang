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
const loadProject = async () => {
  fetch('assets/projects.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((json) => {
      const projects = json.projects;
      renderProjectList(projects);
    })
    .catch((e) => {
      throw new Error(e);
    });
};

document.addEventListener('DOMContentLoaded', loadProject);

// function to download resume pdf
document.getElementById('download-resume').addEventListener('click', () => {
  fetch('assets/Resume - Dewi Safira Ramadhani, S.Kom.pdf')
    .then((res) => res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.getElementById('download-resume');
      a.href = url;
      a.download = 'Resume - Dewi Safira Ramadhani, S.Kom.pdf';
      window.URL.revokeObjectURL(url);
    });
});
