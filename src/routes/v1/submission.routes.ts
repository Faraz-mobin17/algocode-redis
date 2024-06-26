import express from 'express';
import { addSubmission } from '../../controllers/submissionController';
import { validate } from '../../validators/zod.validator';
import { CreateSubmissionZodSchema } from '../../dtos/CreateSubmissionDto';

const submissionRouter = express.Router();

submissionRouter.post('/', validate(CreateSubmissionZodSchema), addSubmission);

export default submissionRouter;
