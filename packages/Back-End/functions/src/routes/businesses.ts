
import * as express from 'express';
import axios from 'axios';
const cors = require('cors');
//import { Request, Response } from 'express';

interface GetBusinessesRequest extends express.Request {
	body: { 
		term: string,
		location: string,
		sortBy: string, 
	}
}

const businesses = express.Router();

const getBusinesses = async (req : GetBusinessesRequest, res : express.Response) => {

	const apiKey = 'AmX43N_jFBUWKFgYcSXFpRPSPQhxXwUjRx1odw35LY01H5xeIDAlHvPKRQ2vLs6lWFj0NeHq2X7cFRnaBjiQP4DZnacuMvQLzPjTCjytjX93i9mNOzT2NQzZ1eSPXHYx';

	const {term, location, sortBy} = req.query

	if(term !== undefined && location !== undefined && sortBy !== undefined) {
		const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`

		try {
		const response = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		})

		return res.json(response.data) 

		} catch(error) {
			return res.status(500).json({error})
		}

	} else {
		return res.status(400).json({error: 'term not provided'})
	}

}

businesses.use(cors())
businesses.get('/', getBusinesses)

export default businesses