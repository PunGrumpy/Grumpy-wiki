---
slug: what-is-rest-api
title: What Is REST API?
description: This blog post describe REST API, and covers of the most details REST API
authors: grumpy
tags: [api, coding, rest api]
hide_table_of_contents: false
---

<!-- ## Representational State Transfer (REST) -->

REST ( Representational State Transfer ) is a way of accessing flexible way without having any processing <br/>
RESTful APIs communicate through HTTP requests to perform CRUD (Create, Read, Update, and Delete) operations in a resource

<!-- truncate -->

![What Is REST API?](../static/img/blog/technology-man-holding-virtual-reality.png)

### CRUD

**CRUD is the acronym for CREATE, READ, UPDATE and DELETE.** These terms describe the four essential operations for creating and managing persistent data elements, mainly in relational and NoSQL databases.

-   **CREATE** operation adds a new record to a database. In RDBMS, a database table row is referred to as a record, while columns are called attributes or fields. The CREATE operation adds one or more new records with distinct field values in a table
-   **READ** returns records (or documents or items) from a database table (or collection or bucket) based on some search criteria. The READ operation can return all records and some or all fields
-   **UPDATE** is used to modify existing records in the database. For example, this can be the change of address in a customer database or price change in a product database. Similar to READ, UPDATEs can be applied across all records or only a few, based on criteria
-   **DELETE** operations allow the user to remove records from the database. A hard delete removes the record altogether, while a soft delete flags the record but leaves it in place. For example, this is important in payroll where employment records need to be maintained even after an employee has left the company

## How REST API Works?

When a client request is made via a RESTful API, it transfers a representation of the state of the resource to the requester of endpoint

This information, or representation, is delivered in one of several formats via HTTP: JSON (JavaScript Object Notation), HTML, XLT, Python, PHP, or plain text. JSON is the most generally popular file format to use because, despite its name, it's language-agnostic, as well as readable by both humans and machines
