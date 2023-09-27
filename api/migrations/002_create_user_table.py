
steps = [
[
# "Up" SQL statement
"""
CREATE TABLE users (

    id SERIAL PRIMARY KEY NOT NULL,

    first VARCHAR(100) NOT NULL,

    last VARCHAR(100) NOT NULL,

    email VARCHAR(100) NOT NULL,

    password VARCHAR(100) NOT NULL

);
""",
# "Down" SQL statement
"""
DROP TABLE users;
"""
]
]
