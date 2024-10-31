# Wikipedia Clone

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-v18.0.0-blue)
![Node.js](https://img.shields.io/badge/node.js-v16.0.0-green)
![Express](https://img.shields.io/badge/Express-v4.17.1-blue)

## 📖 Description

This project is a simple Wikipedia-like application that leverages the [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) to allow users to search for articles and retrieve content dynamically. The frontend is built using **React**, and the backend is powered by **Node.js** and **Express**.

## 🚀 Features

- Search for articles using keywords.
- Retrieve detailed content from selected articles.
- Modular design for easy scalability and maintainability.
- Responsive UI built with React.

## 📦 Installation

### Prerequisites

Make sure you have **Node.js** installed on your machine. You can download it from [Node.js Official Site](https://nodejs.org/).

### Clone the Repository

```bash
git clone https://github.com/dmunasingha/wikipedia-clone.git
cd wikipedia-clone
```

### Install Backend Dependencies

Navigate to the backend folder and install the dependencies:

```bash
cd backend
npm install
```

### Install Frontend Dependencies

Navigate to the frontend folder and install the dependencies:

```bash
cd frontend
npm install
```

## 🔧 Usage

### Running the Server

To start the backend server, run the following command in the `backend` directory:

```bash
cd backend
node index.js
```

The backend server will run at `http://localhost:5000`.

### Running the Frontend

To start the frontend application, run the following command in the `frontend` directory:

```bash
cd frontend
npm start
```

The frontend application will run at `http://localhost:3000`.

### API Endpoints

#### 1. Search Articles

- **Endpoint:** `GET /api/search?query={search_query}`
- **Description:** Search for articles related to the specified query.
- **Example Request:**
  
  ```bash
  curl 'http://localhost:5000/api/search?query=JavaScript'
  ```

- **Response:**
  
  ```json
  [
    {
      "pageid": 12345,
      "ns": 0,
      "title": "JavaScript",
      "snippet": "JavaScript is a programming language..."
    },
    ...
  ]
  ```

#### 2. Get Article Content

- **Endpoint:** `GET /api/article?title={article_title}`
- **Description:** Retrieve the content of the specified article.
- **Example Request:**

  ```bash
  curl 'http://localhost:5000/api/article?title=JavaScript'
  ```

- **Response:**
  
  ```json
  {
    "pageid": 12345,
    "title": "JavaScript",
    "extract": "JavaScript is a programming language..."
  }
  ```

## 📖 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🙏 Acknowledgements

- [Wikipedia API Documentation](https://www.mediawiki.org/wiki/API:Main_page)
- [Express.js](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [React](https://reactjs.org/)

## 📫 Contact

For any inquiries, feel free to reach out:

- **Your Name**: [munasingha.dunith@gmail.com](mailto:munasingha.dunith@gmail.com)
- **GitHub**: [dmunasingha](https://github.com/dmunasingha)

