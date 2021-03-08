import database from "../../../../database/database.ts";

export default (req, res) => {
  const {todo} = req.body;
  database.query(`INSERT INTO todos (todo) VALUES ($1) RETURNING *; --`, [todo])
  .then(table => res.status(200).json(table.rows))
  .catch(err => res.status(500).json(err))
}