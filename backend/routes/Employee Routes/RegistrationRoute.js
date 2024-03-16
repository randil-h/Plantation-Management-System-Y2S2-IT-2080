import express from "express";
import {RegistrationRecord} from "../../models/EmpManagement/RegistrationModel.js";



const router = express.Router();

//Route for save a new employee
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.f_name ||
            !request.body.l_name||
            !request.body.dob||
            !request.body.gender||
            !request.body.contact_no||
            !request.body.emp_email||
            !request.body.nic||
            !request.body.e_address||
            !request.body.emp_type||
            !request.body.qualifications||
            !request.body.h_date

        ) {
            return response.status(400).send ({
                message: 'Send all required fields',
            });
        }

        const NewRegistration = {

            f_name: request.body.f_name,
            l_name: request.body.l_name,
            dob: request.body.dob,
            gender: request.body.gender,
            contact_no: request.body.contact_no,
            emp_email: request.body.emp_email,
            nic: request.body.nic,
            e_address: request.body.e_address,
            emp_type: request.body.emp_type,
            qualifications: request.body.qualifications,
            h_date: request.body.h_date,

        };

        const RegistrationsRecords = await RegistrationRecord.create(NewRegistration)
        return response.status(201).send(RegistrationsRecords);

    } catch(error) {

        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route to get all the register employees from the database
router.get('/', async (request, response) => {
    try {
        const RegistrationsRecords = await RegistrationRecord.find({});

        return response.status(200).json({
            count: RegistrationsRecords.length,
            data: RegistrationsRecords,
        });
    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for get one register employee from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const RegistrationsRecords = await RegistrationRecord.findById(id);

        return response.status(200).json(RegistrationsRecords);
    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for update employee

router.put('/:id', async (request, response) => {
    try {
        if (

            !request.body.f_name ||
            !request.body.l_name||
            !request.body.dob||
            !request.body.gender||
            !request.body.contact_no||
            !request.body.emp_email||
            !request.body.nic||
            !request.body.e_address||
            !request.body.emp_type||
            !request.body.qualifications||
            !request.body.h_date

        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = request.params;

        const result = await RegistrationRecord.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Registration record not found' });
        }

        return response.status(200).send({ message: 'Registration record updated successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to delete a registration record

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await RegistrationRecord.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Registration record not found' });
        }

        return response.status(200).send({ message: 'Registration record deleted successfully' });
    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;





