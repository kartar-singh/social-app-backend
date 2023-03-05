import { Request, Response, NextFunction } from 'express';

console.log("inside the regestration >>>>>>>>>>>>>")

export async function create() {

	try {
		console.log('JobController create>>>>>>>>>>>>')

		const job = new Job(req.body);
		await job.save();
		res.status(201).json((await JobService.findJobById(job._id)));
	} catch (err) {
		logger.error("create : Error while creating job: ",{'body':req.body,'err':err, 'user':userId});
		next(err);
	}
}
