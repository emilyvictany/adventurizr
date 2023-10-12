steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE favorites (
            user_id INTEGER REFERENCES users(id),
            activity_id INTEGER REFERENCES activities(id),
            PRIMARY KEY (user_id, activity_id),
            UNIQUE (user_id, activity_id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE favorites;
        """
    ]
]
