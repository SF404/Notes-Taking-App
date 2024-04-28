import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

const getNotes = async () => {
    try {
        const response = await api.get('notes/');
        console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
};

const createNote = async (formData) => {
    try {
        const response = await api.post('notes/', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const retrieveNote = async (id) => {
    try {
        const response = await api.get(`notes/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateNote = async (id, formData) => {
    try {
        const response = await api.put(`notes/${id}/`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteNote = async (id) => {
    try {
        const response = await api.delete(`notes/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export {
    getNotes,
    createNote, 
    retrieveNote,
    updateNote,
    deleteNote,
};
