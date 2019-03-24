export const fakeFetch = async (fileName) => {
    return await import('./jsons/' + fileName);
};