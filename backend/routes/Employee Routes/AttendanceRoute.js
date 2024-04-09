import express from "express";
import {AttendanceRecord} from "../../models/EmpManagement/AttendanceModel.js";



const router = express.Router();

//Route for save a new attendance
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.e_name ||
            !request.body.e_date||
            !request.body.att_status

        ) {
            return response.status(400).send ({
                message: 'Send all required fields',
            });
        }

        const NewAttendance = {

            e_name:request.body.e_name,
            e_date:request.body.e_date,
            att_status:request.body.att_status,

        };

        const AttendanceRecords = await AttendanceRecord.create(NewAttendance)
        return response.status(201).send(AttendanceRecords);

    } catch(error) {

        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route to get all the attendance from the database
router.get('/', async (request, response) => {
    try {
        const AttendanceRecords = await AttendanceRecord.find({});

        return response.status(200).json({
            count: AttendanceRecords.length,
            data: AttendanceRecords,
        });
    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for get one attendance from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const AttendanceRecords = await AttendanceRecord.findById(id);

        return response.status(200).json(AttendanceRecords);
    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for update attendance

router.put('/:id', async (request, response) => {
    try {
        if (

            !request.body.e_name ||
            !request.body.e_date||
            !request.body.att_status

        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = request.params;

        const result = await AttendanceRecord.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Attendance record not found' });
        }

        return response.status(200).send({ message: 'Attendance record updated successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to delete an attendance record

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await AttendanceRecord.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Attendance record not found' });
        }

        return response.status(200).send({ message: 'Attendance record deleted successfully' });
    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
