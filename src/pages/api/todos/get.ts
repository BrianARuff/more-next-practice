import database from '../../../../database/database';

console.log(database);

export default (req, res) => {
  database.query(`SELECT * FROM todos; --`)
    .then(table => res.json(table.rows))
    .catch(err => res.json(err));
};
