
steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE activities (
            id SERIAL PRIMARY KEY NOT NULL,
            title VARCHAR(200) NOT NULL,
            participants VARCHAR(200) NOT NULL,
            environment VARCHAR(200) NOT NULL,
            category VARCHAR(200) NOT NULL,
            published BOOLEAN DEFAULT (FALSE),
            user_id INTEGER REFERENCES users("id") ON DELETE CASCADE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE activities;
        """
    ]
]
