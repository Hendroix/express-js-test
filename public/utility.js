const acceptsHtml = (req) => {
    return req.headers?.accept.includes("html");
};

module.exports = { acceptsHtml };
