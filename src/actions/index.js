import projectContainer from '../api/projectContainer';
import * as types from '../constants/ActionsTypes';

const receiveProjects = projects => ({
    type: types.RECEIVE_PROJECTS,
    projects
})

export const getAllProjects = () => dispatch => {

    projectContainer.getProjects(projects => {
        dispatch(receiveProjects(projects))
    });
}

export const addProject = (data) => {
    return {
        type: ADD_PROJECT,
        payload: data
    }
}