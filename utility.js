const acceptsHtml = (req) => {
    return req.headers?.accept.includes("html");
};

const dirname = __dirname;

module.exports = { acceptsHtml, dirname };
