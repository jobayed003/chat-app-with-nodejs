// get login page
const getLogin = (req, res, next) => {
  res.render('index');
};
const loginController = () => {};

module.exports = { getLogin, loginController };
