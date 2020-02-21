export default async (req, res, next) => {
  if (req.userType !== 'Admin') {
    return res.send({ error: 'Usuário sem permissão para acessar esse serviço!' });
  }
  return next();
};
