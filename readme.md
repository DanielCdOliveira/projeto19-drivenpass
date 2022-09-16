<div align="center"><img style = "width:100%;"src="https://i.imgur.com/yxXA2RN.png"></img></div>
<hr>
<h2 align=center>DrivenPass (Back-End)</h2>
<h3 align=center>Web development Project</h3>
<hr>
<h4 align=center>A password manager</h4>
<h4 align=center>First project using Prisma, a Object-relational mapping(ORM) and doing integration tests with Jest</h4>
<h4 align=center>Check the <a href="https://github.com/DanielCdOliveira/projeto19-drivenpass-front">Front-end</a></h4>
<div align=center style="display:flex; justify-content: center; gap:5%">
    <img style = "width:30%;"src="https://i.imgur.com/UngkeMY.png">
    <img style = "width:30%;"src="https://i.imgur.com/EmkiF7z.png">
    <img style = "width:30%;"src="https://i.imgur.com/166HJs8.png">
</div>
<hr>

# DATABASE

- Bank diagram

 <div align="center"><img style = "width:100%;"src="https://i.imgur.com/3wkqlVS.png"></img></div>

# API REFERENCE

#### SIGN-UP

- **POST** /signup

#### Request:

| Body    | Type     | Description               |
| :------ | :------- | :------------------------ |
| `name`  | `string` | **Required**. name        |
| `email` | `string` | **Required**. valid email |

#

#### SIGN-IN

- **POST** /signin

#### Request:

| Body    | Type     | Description               |
| :------ | :------- | :------------------------ |
| `name`  | `string` | **Required**. name        |
| `email` | `string` | **Required**. valid email |

#### Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjYzMzM1NzkxfQ.TXbQtfkJodi1XPBtEQTHfEFYDVQqXTdzJYu3mcBfR8E"
}
```

### Authorization

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. valid token |

- headers:

```json
{{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjYzMzM1NzkxfQ.TXbQtfkJodi1XPBtEQTHfEFYDVQqXTdzJYu3mcBfR8E"
  }
```

<br/>

## Credentials

### **All routes need authentication**

#

- **POST** /credential/create
- Route to register a new credential

- Body
  | Body | Type | Description |
  | :----------- | :------- | :------------------------ |
  | `title` | `string` | **Required**. credential title |
  | `url` | `string` | **Required**. url to credential |
  | `userName` | `string` | **Required**. username for credential |
  | `password` | `string` | **Required**. password for credential |

- **GET** /credentials
  - Route to get all credentials from user
  - Response

```json
[
  {
    "id": credential ID,
    "title": credential title,
    "url": credential url,
    "userName": username for credential,
    "password": password for credential,
    "userId": user ID
  }
]
```

- **GET** /credential/:credentialId
  - Get credential by id
  - Response

```json
  {
    "id": credential ID,
    "title": credential title,
    "url": credential url,
    "userName": username for credential,
    "password": password for credential,
    "userId": user ID
  }
```

- **DELETE** /credential/:credentialId

  - Route to delete credential

## Notes

### **All routes need authentication**

#

- **POST** /note/create
- Route to register a new note

- Body
  | Body | Type | Description |
  | :----------- | :------- | :------------------------ |
  | `title` | `string` | **Required**. note title |
  | `text` | `string` | **Required**. note text |

- **GET** /notes
  - Route to get all notes from user
  - Response

```json
[

  {
    "id": note ID,
    "title": note title,
    "text": note text
  }
]
```

- **GET** /note/:noteId
  - Get note by id
  - Response

```json
  {
    "id": note ID,
    "title": note title,
    "text": note text
  }
```

- **DELETE** /note/:noteId

  - Route to delete note

## Notes

### **All routes need authentication**

#

- **POST** /card/create
- Route to register a new card
- Body
  | Body | Type | Description |
  | :----------- | :------- | :------------------------ |
  | `title` | `string` | **Required**. note title |
  | `cardNumner` | `string` | **Required**. card number |
  | `cardName` | `string` | **Required**. name on card |
  | `cvc` | `string` | **Required**. cvc |
  | `password` | `string` | **Required**. password for card|
  | `expirationDate` | `string` | **Required**. expiration date |
  | `isVirtual` | `boolean` | **Required**. card is virtual or no |
  | `cardType` | `string` | **Required**. card type |

- **GET** /cards
  - Route to get all cards from user
  - Response

```json
[
  {
    "id": card ID,
    "title": card title,
    "cardNumber": card number,
    "cardName": card name,
    "cvc": cvc,
    "expirationDate": expiration date,
    "password": password,
    "isVirtual": true or false,
    "cardType": card Type,
    "userId": user ID
  }
]
```

- **GET** /card/:cardId
  - Get card by id
  - Response

```json
  {
    "id": card ID,
    "title": card title,
    "cardNumber": card number,
    "cardName": card name,
    "cvc": cvc,
    "expirationDate": expiration date,
    "password": password,
    "isVirtual": true or false,
    "cardType": card Type,
    "userId": user ID
  }
```

- **DELETE** /note/:noteId

  - Route to delete note

## WIFI

### **All routes need authentication**

#

- **POST** /wifi/create
- Route to register a new wifi
- Body
  | Body | Type | Description |
  | :----------- | :------- | :------------------------ |
  | `title` | `string` | **Required**. note title |
  | `wifiName` | `string` | **Required**. wifi name |
  | `password` | `string` | **Required**. wifi password |

- **GET** /wifi-connections
  - Route to get all cards from user
  - Response

```json
[
  {
    "id": wifi ID,
    "title": wifi title,
    "wifiName": wifi name,
    "password": wifi password,
    "userId": user ID
  }
]
```

- **GET** /wifi/:wifiId
  - Get wifi by id
  - Response

```json
  {
    "id": wifi ID,
    "title": wifi title,
    "wifiName": wifi name,
    "password": wifi password,
    "userId": user ID
  }
```

- **DELETE** /note/:noteId

  - Route to delete note

## Documents

### **All routes need authentication**

#

- **POST** /document/create
- Route to register a new document
- Body
  | Body | Type | Description |
  | :----------- | :------- | :------------------------ |
  | `name` | `string` | **Required**. document name |
  | `expeditionDate` | `string` | **Required**. expediton date |
  | `expirationDate` | `string` | **Required**. wifi expiration date |
  | `registeNumber` | `string` | **Required**. wifi registe number |
  | `expeditonAgency` | `string` | **Required**. wifi expediton agency |
  | `documentType` | `string` | **Required**. wifi document type |

- **GET** /documents
  - Route to get all documents from user
  - Response

```json
[
  {
    "id": document ID,
    "name": document name,
    "expeditionDate": expedition date,
    "expirationDate": expiration date,
    "registerNumber": register number,
    "expeditionAgency": expedition agency,
    "documentType": document type,
    "userId": user ID
  }
]
```

- **GET** /document/:documentId
  - Get document by id
  - Response

```json
  {
    "id": document ID,
    "name": document name,
    "expeditionDate": expedition date,
    "expirationDate": expiration date,
    "registerNumber": register number,
    "expeditionAgency": expedition agency,
    "documentType": document type,
    "userId": user ID
  }
```

- **DELETE** /note/:noteId

  - Route to delete note

## Usage

Install my project with npm

> Clone the repository:

```bash
  git clone git@github.com:DanielCdOliveira/projeto18-valex.git
```

> Install dependences:

```bash
  npm install
```

> Create a .env file like the .env.example file

> Run aplication:

```bash
  npm run dev
```

### TESTS
> Configure .env.test file

> Run tests:

```bash
  npm run test
```
<hr>

### Built with

![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](	https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/danielcdoliveira/
