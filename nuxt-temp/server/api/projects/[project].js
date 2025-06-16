export default defineEventHandler(async (event) => {
  const projectId = event.context.params.project
  
  // Replace this with your actual data fetching logic
  return {
    project: {
      title: 'Project Title',
      description: 'Project Description',
      features: [],
      technologies: []
    }
  }
}) 