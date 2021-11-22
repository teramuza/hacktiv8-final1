
# Hacktiv8 Final Project 1

Pada final project kali ini, kami membuat aplikasi Reflection yang dimana aplikasi ini digunakan untuk mencatat dan mengukur target-target pencapaian seseorang.


## Run Locally

Clone the project

```bash
  git clone https://github.com/teramuza/hacktiv8-final1.git
```

Go to the project directory

```bash
  cd hacktiv8-final1
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

Start the server as dev mode

```bash
  yarn start-dev
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PG_HOST` = `your postgres host`

`PG_PORT` = `your postgres port running`

`PG_USER` = `your postgres username`

`PG_PASS` = `your postgres user password`

`PG_DB_NAME` = `you can create new db and import sql from /sources/db.sql`

`JWT_SECRET_KEY` = `you can generate your own JWT_SECRET_KEY`




## API Reference

### Register

```http
  POST /api/v1/users/register
```

- **Body**

| Key | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |


### Login

```http
  POST /api/v1/users/login
```

- **Body**

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required** |
| `password`      | `string` | **Required** |

### Create Reflection

```http
  POST /api/v1/reflections/
```

- **Header**

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**, JWT Token |

- **Body**

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `string` | **Required** |
| `low_point`      | `string` | **Required** |
| `take_away`      | `string` | **Required** |

### Read Reflection

```http
  GET /api/v1/reflections/
```

- **Header**

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**, JWT Token |

### Update Reflection

```http
  PUT /api/v1/reflections/:id
```

- **Header**

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**, JWT Token |

- **Body**

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `string` | **Required** |
| `low_point`      | `string` | **Required** |
| `take_away`      | `string` | **Required** |

### Delete Reflection

```http
  DELETE /api/v1/reflections/:id
```

- **Header**

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**, JWT Token |
