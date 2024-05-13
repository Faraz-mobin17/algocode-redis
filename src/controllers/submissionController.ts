import { Request, Response } from 'express';
import { CreateSubmissionDto } from '../dtos/CreateSubmissionDto';

export async function addSubmission(req: Request, res: Response) {
  const submissionDto = req.body as CreateSubmissionDto;

  // TODO: add validation using zod

  return res.status(201).json({
    success: true,
    erro: {},
    message: 'Succcesfully collected the submission',
    data: submissionDto,
  });
}
