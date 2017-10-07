const jsonResponse = (res, status, response) => {
    res.status(status).json(response);
};

module.exports.getPosts = (req, res) => {
    jsonResponse(res, 200, { success: true });
};