const shortid = require('shortid');
const URL = require('../models/Url');

// postman input
// {
// url: http://localhost:3030.....
// }

// gen new short url
const handleGenerateNewShortURL = async (req, res) => {
    try {
        const body = req.body;
        
        if(!body.url) {
            return res.status(400).send({ 
                error: 'URL is missing'
            })
        }
        
        const shortID = shortid();
        
        await URL.create({
            shortID: shortID,
            redirectURL: body.url,
            visitHistory: [],
        }) // in services file
        
        return res.json({shortID: shortID});
    } catch (error) {
        return res.status(500).send({ 
            error: 'Internal Server Error' 
        });
    }
}

const handleRedirectNewShortURL = async (req, res) => {
    try {
        const shortID = req.params.shortID;
        const entry = await URL.findOneAndUpdate({
            shortID,
        }, {
            $push: {
                visitHistory: new Date.now()
            }
        })  // in services file


        if(!entry || !entry.redirectURL) // learn more about logic operations 
        {
            return res.status(404).send({
                error: 'URL not found'
            })
        }


        res.redirect(entry.redirectURL)

    } catch (error) {
        return res.status(404).send({
            error: 'Short URL not found'
        });
    }
}



const handleAnalyticsURL = async (req, res) => {
    try {
        const shortID = req.params.shortID;
        const result = await URL.findOne({shortID});  // in services file

        return res.json({
            visits: result.visitHistory.length,
            analytics: result.visitHistory
        })

    } catch (error) {
        return res.status(500).send({
            error: 'Internal Server Error'
        });
    }
}



module.exports = {
    handleGenerateNewShortURL,
    handleRedirectNewShortURL,
    handleAnalyticsURL
}