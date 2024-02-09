CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to restrict webpages from making requests to a different domain than the one that served the original web page. The same-origin policy is enforced by browsers to prevent potentially malicious websites from making unauthorized requests on behalf of a user.

CORS allows servers to specify who can access their resources, relax the same-origin policy, and enable cross-origin requests when necessary. This is particularly relevant in the context of modern web applications where frontend and backend components may reside on different domains.

Here's a brief overview of how CORS works:

### Basics of CORS:

1. **Same-Origin Policy:**
   - By default, web browsers enforce the same-origin policy, allowing web pages to make requests only to the same domain from which the web page originated.

2. **Cross-Origin Requests:**
   - When a web page hosted on one domain makes a request (e.g., an XMLHttpRequest or a fetch API call) to a different domain, the browser blocks the request to protect against potential security risks.

3. **CORS Headers:**
   - To enable cross-origin requests, a server must include specific HTTP headers in its response. These headers inform the browser that it is safe for the requesting domain to access the specified resources.

### Common CORS Headers:

1. **`Access-Control-Allow-Origin`:**
   - Specifies which origins are allowed to access the resource. It can be a specific origin, a comma-separated list of origins, or a wildcard (`*`) indicating that any origin is allowed.

   ```http
   Access-Control-Allow-Origin: https://allowed-origin.com
   ```

2. **`Access-Control-Allow-Methods`:**
   - Specifies the HTTP methods (e.g., GET, POST, PUT, DELETE) that are allowed when accessing the resource.

   ```http
   Access-Control-Allow-Methods: GET, POST, PUT
   ```

3. **`Access-Control-Allow-Headers`:**
   - Specifies which HTTP headers can be used when making the actual request.

   ```http
   Access-Control-Allow-Headers: Content-Type, Authorization
   ```

4. **`Access-Control-Allow-Credentials`:**
   - Indicates whether the browser should include credentials (e.g., cookies, HTTP authentication) in the actual request.

   ```http
   Access-Control-Allow-Credentials: true
   ```

5. **`Access-Control-Expose-Headers`:**
   - Specifies which headers should be exposed and made accessible to the requesting client.

   ```http
   Access-Control-Expose-Headers: X-Custom-Header
   ```

### Example:

Suppose you have a server at `https://api.example.com`, and you want to allow cross-origin requests from `https://webapp.example.com`. Your server's response should include appropriate CORS headers:

```http
Access-Control-Allow-Origin: https://webapp.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

These headers inform the browser that requests from `https://webapp.example.com` are allowed, specify the allowed methods, headers, and credentials.

By setting up CORS properly on the server side, you can control and secure cross-origin resource sharing based on your application's requirements.