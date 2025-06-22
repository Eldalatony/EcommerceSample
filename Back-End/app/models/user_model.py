from app import mysql

def get_user_by_email_or_username(identifier):
    cursor = mysql.connection.cursor()
    cursor.execute(
        "SELECT * FROM customers WHERE email = %s OR username = %s",
        (identifier, identifier)
    )
    row = cursor.fetchone()
    cursor.close()
    if row:
        return {
            "id": row[0],
            "username": row[1],
            "email": row[2],
            "password": row[3]
        }
    return None

def insert_user(username, email, password):
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO customers (username, email, password) VALUES (%s, %s, %s)", (username, email, password))
    mysql.connection.commit()
    cursor.close()
