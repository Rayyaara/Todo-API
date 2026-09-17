const crypto = require("crypto");
if (!crypto.getFips) {
    crypto.getFips = () => 0;
}