import express from 'express';
import { Project } from '../models/csModel.js';

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const projects = await Project.find({});

        return response.status(200).json({
            count: projects.length,
            data: projects
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

export default router;