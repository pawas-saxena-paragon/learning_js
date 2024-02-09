Cross-Site Scripting (XSS) is a type of security vulnerability that occurs when an attacker injects malicious scripts into web pages that are then viewed by other users. The goal of XSS attacks is to execute malicious scripts in the context of a user's browser, often leading to the theft of sensitive information, session hijacking, or other malicious activities.

### Types of XSS:

1. **Stored (Persistent) XSS:**
   - Malicious scripts are permanently stored on the target server, such as in a database. When a user requests the affected page, the script is served along with the content.

2. **Reflected (Non-Persistent) XSS:**
   - Malicious scripts are embedded in a URL or a form and are reflected back to the user in the server's response. The attack is typically successful when the user clicks on a manipulated link.

3. **DOM-based XSS:**
   - The vulnerability is in the Document Object Model (DOM) rather than in the HTML. Malicious scripts manipulate the DOM and execute in the context of the user's browser.

### How XSS Works:

1. **Injection:**
   - An attacker injects malicious code, usually JavaScript, into user-input fields, URL parameters, or other places where user data is processed and displayed.

2. **Execution:**
   - The injected script is executed when the victim accesses the page containing the manipulated content. This script runs in the context of the victim's browser with the same privileges as the legitimate scripts on the page.

### Mitigating XSS:

1. **Input Validation:**
   - Validate and sanitize user inputs to ensure that they do not contain malicious scripts. Use server-side validation and filtering mechanisms.

2. **Output Encoding:**
   - Encode user inputs before rendering them in HTML. This prevents the browser from interpreting the input as executable code.

3. **Content Security Policy (CSP):**
   - Implement a Content Security Policy to control which resources are allowed to be loaded and executed on a web page. It can help mitigate the impact of XSS by restricting the sources of scripts.

4. **HTTP-only Cookies:**
   - Mark cookies as HTTP-only to prevent them from being accessed by client-side scripts, reducing the risk of session hijacking.

5. **Secure Headers:**
   - Implement security headers, such as `X-Content-Type-Options`, `X-Frame-Options`, and `Strict-Transport-Security`, to enhance the security of web applications.

