# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

Structured Query Language, is a domain-specific language used to communicate with relational databases. 


2. What the PostgreSQL query that would return all the content in a particular table?

SUM


3. What is the command to create a new Rails application with a PostgreSQL database?

-d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

.create

5. What is a migration? Why would you use one?

It's a tool that allows you to change the shape of your database.

6. What is the command to generate a migration file?

rails db:migrate

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

rails generate model ModelName

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

db/schema.rb
it should not be modified directly 

9. What is the Rails console?

Rails console allows us to interact directly with the active record.

10. What is the Rails console command to see all the content in a particular table?

rails c