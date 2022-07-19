/**
 * HttpService.js 提供网络请求服务
 */

const https = require('https');

class HttpService {
  get (url, options={}) {
    return this.createRequest('GET', url, options);
  }

  createRequest (method, urlString, options) {
    return new Promise((resolve, reject) => {
      let request;
      if (method === 'GET') {
        request = https.get(
          urlString,
          options,
          response => this.onResponse(response, resolve, reject)
        );
      }

      request.on('error', reject);
      request.end();
    })
  }

  onResponse (response, resolve, reject) {
    const hasResponseFailed = response.status >= 400;
    let responseBody = '';

    if (hasResponseFailed) {
      reject(`Request to ${response.url} failed with HTTP ${response.status}`);
    }

    response.on('data', chunk => responseBody += chunk.toString());
    response.on('end', () => resolve(responseBody));
  }
}

module.exports = new HttpService();
