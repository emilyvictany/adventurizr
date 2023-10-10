steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE favorites (
            id SERIAL PRIMARY KEY NOT NULL,
            user_id INTEGER REFERENCES users("id"),
            activity_id INTEGER REFERENCES activities("id")
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE favorites;
        """
    ]
]
