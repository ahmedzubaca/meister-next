import sql from 'better-sqlite3';

const db = sql('projects.db');

export function getProjects(cover) {  
  return db.prepare('SELECT * FROM projects WHERE imageType  = ? ').all(cover);
}

export function getProjectsDataById(projectId){  
  return db.prepare('SELECT * FROM projects WHERE projectId  = ? ').all(projectId);
}

export function saveProject(project) {
  db.prepare(`
    INSERT INTO projects
    (projectId, title, location, investor, size, imageType, imageUrl)
    VALUES (
      @projectId,
      @title,
      @location,
      @investor,
      @size,
      @imageType,
      @imageUrl
    )
  `).run(project);
}