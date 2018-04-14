export default collection => `
    ${collection.map(model => `
        <h3>
            ${model.date.date()}: ${model.name_es || ''}
        </h3>
    `).join('')}
`;
