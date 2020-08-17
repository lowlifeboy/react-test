1. Authorization form. Fields - username and password. No validation needed -> send - received a token and saved it to local storage
2. The page with the table is available only to an authorized user. Append the table with the `Action` column
3. In the `Action` column add the `Delete` button. When you click on it, you need an `id` or `title` to confirm the action. Data matched - row should be removed
