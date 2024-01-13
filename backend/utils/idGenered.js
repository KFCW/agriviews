const crypto = require("crypto");

exports.idProductorGenered = () => {
    const length = 5;
    const bytes = crypto.randomBytes(Math.ceil(length/2));
    return bytes.toString("hex").slice(0, length);
}

