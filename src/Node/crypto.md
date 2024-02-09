The `crypto` module in Node.js provides cryptographic functionality, allowing developers to work with various cryptographic operations such as hashing, encryption, and decryption. Here are some commonly used functions in the `crypto` module:

### 1. **Hashing:**

#### `crypto.createHash(algorithm)`

- **Function:**
  - Creates a hash object using the specified algorithm.

- **Example:**
  ```javascript
  const crypto = require('crypto');
  const hash = crypto.createHash('sha256');
  hash.update('Hello, World!');
  const hashedData = hash.digest('hex');
  console.log(hashedData);
  ```

#### `hash.update(data[, inputEncoding])`

- **Function:**
  - Updates the hash content with the given data.

- **Example:**
  ```javascript
  hash.update('Hello, ');
  hash.update('World!');
  ```

#### `hash.digest([encoding])`

- **Function:**
  - Calculates the digest of all the updated data.

- **Example:**
  ```javascript
  const hashedData = hash.digest('hex');
  console.log(hashedData);
  ```

### 2. **HMAC (Hash-based Message Authentication Code):**

#### `crypto.createHmac(algorithm, key)`

- **Function:**
  - Creates an Hmac object using the specified algorithm and key.

- **Example:**
  ```javascript
  const hmac = crypto.createHmac('sha256', 'secret-key');
  hmac.update('Hello, World!');
  const hmacResult = hmac.digest('hex');
  console.log(hmacResult);
  ```

### 3. **Encrypting and Decrypting:**

#### `crypto.createCipher(algorithm, key)`

- **Function:**
  - Creates a cipher object using the specified algorithm and key.

- **Example:**
  ```javascript
  const cipher = crypto.createCipher('aes-256-cbc', 'encryption-key');
  let encryptedData = cipher.update('Hello, World!', 'utf-8', 'hex');
  encryptedData += cipher.final('hex');
  console.log(encryptedData);
  ```

#### `crypto.createDecipher(algorithm, key)`

- **Function:**
  - Creates a decipher object using the specified algorithm and key.

- **Example:**
  ```javascript
  const decipher = crypto.createDecipher('aes-256-cbc', 'encryption-key');
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
  decryptedData += decipher.final('utf-8');
  console.log(decryptedData);
  ```

### 4. **Random Bytes:**

#### `crypto.randomBytes(size[, callback])`

- **Function:**
  - Generates cryptographically strong pseudo-random data.

- **Example:**
  ```javascript
  crypto.randomBytes(16, (err, buffer) => {
    if (err) throw err;
    console.log('Random Bytes:', buffer.toString('hex'));
  });
  ```

### 5. **Key Derivation:**

#### `crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)`

- **Function:**
  - Performs key derivation using the PBKDF2 (Password-Based Key Derivation Function 2) algorithm.

- **Example:**
  ```javascript
  const password = 'secure-password';
  const salt = crypto.randomBytes(16).toString('hex');

  crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log('Derived Key:', derivedKey.toString('hex'));
  });
  ```

These are just a few examples of the commonly used functions in the `crypto` module. The module provides a wide range of cryptographic primitives and functionalities, so it's important to choose the appropriate algorithms and methods based on your specific use case and security requirements. Always follow best practices for cryptographic operations to ensure the security of your application.