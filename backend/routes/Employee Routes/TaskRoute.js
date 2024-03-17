import express from "express";
import {TaskRecord} from "../../models/EmpManagement/TaskModel.js";



const router = express.Router();

//Route for save a new task
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.emp_id ||
            !request.body.task||
            !request.body.assign_date||
            !request.body.due_date||
            !request.body.task_des||
            !request.body.task_status

        ) {
            return response.status(400).send ({
                message: 'Send all required fields',
            });
        }

        const NewTask = {

            emp_id:request.body.emp_id,
            task:request.body.task,
            assign_date:request.body.assign_date,
            due_date:request.body.due_date,
            task_des:request.body.task_des,
            task_status:request.body.task_status,

        };

        const TaskRecords = await TaskRecord.create(NewTask)
        return response.status(201).send(TaskRecords);

    } catch(error) {

        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route to get all the tasks from the database
router.get('/', async (request, response) => {
    try {
        const TaskRecords = await TaskRecord.find({});

        return response.status(200).json({
            count: TaskRecords.length,
            data: TaskRecords,
        });
    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for get one task from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const TaskRecords = await TaskRecord.findById(id);

        return response.status(200).json(TaskRecords);
    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for update employee

router.put('/:id', async (request, response) => {
    try {
        if (

            !request.body.emp_id ||
            !request.body.task||
            !request.body.assign_date||
            !request.body.due_date||
            !request.body.task_des||
            !request.body.task_status

        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = request.params;

        const result = await TaskRecord.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Task record not found' });
        }

        return response.status(200).send({ message: 'Task record updated successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to delete a task record

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await TaskRecord.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Task record not found' });
        }

        return response.status(200).send({ message: 'Task record deleted successfully' });
    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
