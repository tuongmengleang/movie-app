export function fileStorage(path) {
    return path ? process.env.REACT_APP_FILE_PATH + path : null;
}