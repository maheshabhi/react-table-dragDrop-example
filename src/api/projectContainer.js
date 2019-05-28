import _projects from './projects.json';

const TIMEOUT = 100;

export default {
  getProjects: (cb, timeout) => setTimeout(() => cb(_projects), timeout || TIMEOUT)
}
