const md5file = require('md5-file');

const store = {
    tasks: [], 
    images: []
}

const storeTask = async ({ path }) => {
    const task = {
        id: store.tasks.length,
        timestamp: new Date(),
        path,
        
      }
    store.tasks.push(task);
}

const storeImage = async ({ path }) => {
  const image = {
    id: store.images.length,
    timestamp: new Date(),
    path,
    md5: await md5File(path),
  }
  store.tasks.push(image);
}

const getStore = () =>  {
  return store;
}

const getTask = (index) => {
  return store.tasks[index] 
}

module.exports = {
  storeTask,
  storeImage,
  getStore,
  getTask
}