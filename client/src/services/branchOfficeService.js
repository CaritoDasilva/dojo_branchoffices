const axios = require('axios');

export const getAllBranchOffices = async () => {
    try {

        const response = await axios.get('http://localhost:8000/api/branchoffice');
        return response.data;

    } catch(err) {
        return err;
    }
} 

export const createNewBranchOffice = async (data) => {
    try {
        console.log('toy pasando', data)
        const response = await axios.post('http://localhost:8000/api/branchoffice/new', { data });
        return response.data;

    } catch(err) {
        return err;
    }
}

export const getOneBranchOffice = async (id) => {
     try {

        const response = await axios.get(`http://localhost:8000/api/branchoffice/${id}`);
        return response.data;

    } catch(err) {
        return err;
    }
}

export const deleteOneBranchOffice = async (id) => {
    try {

        const response = await axios.delete(`http://localhost:8000/api/branchoffice/delete/${id}`);
        return response.data;

    } catch(err) {
        return err;
    }
}

