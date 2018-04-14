export default collection => `
    ${collection.map(model => `<h3>${model.day}: ${model.name_es || ''}</h3>`).join('')}
`;
