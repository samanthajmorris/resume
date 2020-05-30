import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="root",
  port=8889,
  database="novascotia"
)

def post_count(restaurant, count):
    mycursor = mydb.cursor()
    sql = "INSERT INTO restaurants (name, count) VALUES (\'" + restaurant + "\', " + str(count) + ")"

    mycursor.execute(sql)
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")

def update_count(restaurant, count):
    mycursor = mydb.cursor()
    sql = "UPDATE restaurants SET count = " + str(count) + " WHERE name = \'" + restaurant + "\'"

    mycursor.execute(sql)
    mydb.commit()
    print(mycursor.rowcount, "record(s) affected")

def get_count(restaurant):
    mycursor = mydb.cursor()
    mycursor.execute("SELECT count FROM restaurants where name = \'" + restaurant + "\'")
    myresult = mycursor.fetchall()

    for x in myresult:
        print(x[0])

if __name__ == "__main__":
    get_count("keegansplace")