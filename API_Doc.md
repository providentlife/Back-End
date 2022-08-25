# Project Health
## User
###  `GET` `/`
- `/user` Gets all users from database.
- `/user/:id` Gets single user by id from database.
###  `POST` `/`
- `/user` Posts a user into database for user sign up.
- `/user/login` Posts user credentials to authenticate and return JWT token if successful.
###  `DELETE` `/`
- `/user/:id` Deletes a user by id from database.

## User Starting Metrics
###  `GET` `/`
- `/user-starting-metrics` Gets all user starting metrics from database.
- `/user-starting-metrics/:id` Gets all user starting metrics by id from database.
###  `POST` `/`
- `/user-starting-metrics` Posts user starting metric into database.
###  `DELETE` `/`
- `/user-starting-metrics:id` Deletes a user starting metrics by id from database.

## Weight Entries
###  `GET` `/`
- `/weight-entries/:id` Gets all weight entries by user starting metrics id from database.
###  `POST` `/`
- `/weight-entries` Posts user weight entries into database.
###  `PUT` `/`
- `/weight-entries/:id` Updates single user weight entry by id from database.
