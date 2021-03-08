import database from '../../../../database/database';

export default (req, res) => {
  database.query(`SELECT * FROM todos; --`)
    .then(table => res.json(table.rows))
    .catch(err => res.json(err));
};
