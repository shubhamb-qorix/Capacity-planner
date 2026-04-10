# API Documentation

## Introduction
This document provides a complete overview of the API endpoints available in the Capacity Planner Python backend.

### Base URL
The base URL for all API requests is:  `http://api.capacity-planner.com/v1`

## Endpoints

### 1. **Get All Capacities**
  - **URL**: `/capacities`
  - **Method**: `GET`
  - **Description**: Retrieves a list of all capacities.
  - **Success Response**:
    - **Code**: 200
    - **Content**: `[{ id: 1, name: "Capacity 1", ... }, { id: 2, name: "Capacity 2", ... }]`
  - **Error Response**:
    - **Code**: 500
    - **Content**: `{ error: "Internal Server Error" }`

### 2. **Get Capacity by ID**
  - **URL**: `/capacities/{id}`
  - **Method**: `GET`
  - **Description**: Retrieves a specific capacity by its ID.
  - **URL Params**:
    - **Required**: `id=[integer]`
  - **Success Response**:
    - **Code**: 200
    - **Content**: `{ id: 1, name: "Capacity 1", ... }`
  - **Error Response**:
    - **Code**: 404
    - **Content**: `{ error: "Capacity not found" }`

### 3. **Create a New Capacity**
  - **URL**: `/capacities`
  - **Method**: `POST`
  - **Description**: Creates a new capacity.
  - **Payload**:
    ```json
    { "name": "New Capacity", ... }
    ```
  - **Success Response**:
    - **Code**: 201
    - **Content**: `{ id: 3, name: "New Capacity", ... }`
  - **Error Response**:
    - **Code**: 400
    - **Content**: `{ error: "Bad Request" }`

### 4. **Update Capacity**
  - **URL**: `/capacities/{id}`
  - **Method**: `PUT`
  - **Description**: Updates an existing capacity.
  - **URL Params**:
    - **Required**: `id=[integer]`
  - **Payload**:
    ```json
    { "name": "Updated Capacity", ... }
    ```
  - **Success Response**:
    - **Code**: 200
    - **Content**: `{ id: 1, name: "Updated Capacity", ... }`
  - **Error Response**:
    - **Code**: 404
    - **Content**: `{ error: "Capacity not found" }`

### 5. **Delete Capacity**
  - **URL**: `/capacities/{id}`
  - **Method**: `DELETE`
  - **Description**: Deletes a specific capacity by its ID.
  - **URL Params**:
    - **Required**: `id=[integer]`
  - **Success Response**:
    - **Code**: 204
    - **Content**: `null`
  - **Error Response**:
    - **Code**: 404
    - **Content**: `{ error: "Capacity not found" }`

## Conclusion
This API documentation provides the essential details needed for developers to integrate with the Capacity Planner backend. Refer to the specific sections for more in-depth information on each endpoint.