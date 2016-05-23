function OAuthException(message) {
    this.name = 'OAuth Exception';
    this.message = message;
}

OAuthException.prototype = new Error();
OAuthException.prototype.constructor = OAuthException;