**auth Route**
| Endpoint | Method | Description |
|--------------------|--------|-----------------|
| /api/auth/register | POST | register a user |
| /api/auth/login | POST | login a user |

**users Route**
| Endpoint | Method | Description |
|--------------------|--------|---------------|
| /api/users/:userId | PUT | update a user |
| /api/users/:userId | DELETE | delete a user |
| /api/users/:userId | GET | get a user |

**posts Route**
| Endpoint | Method | Description |
|------------------------------------------------------|--------|--------------------------------------------------------------|
| /api/posts/ | POST | create a post |
| /api/posts/:postId | PUT | update a post |
| /api/posts/:postId | DELETE | delete a post |
| /api/posts/:postId | GET | get a single post |
| /api/posts?user=[]<br>/api/posts?cat[]<br>/api/posts | GET | get a user's posts<br>get posts by category<br>get all posts |

**categories Route**
| Endpoint | Method | Description |
|------------------|--------|--------------------|
| /api/categories/ | POST | create a category |
| /api/categories/ | GET | get all categories |
