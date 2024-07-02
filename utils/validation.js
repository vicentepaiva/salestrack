function validateUser(data) {
  const { nome, login, senha } = data;


  if (typeof nome !== 'string' || nome.trim() === '') {
      throw new Error('Nome é obrigatório e deve ser uma string.');
  }

  if (typeof login !== 'string' || login.trim() === '') {
      throw new Error('Login é obrigatório e deve ser uma string.');
  }

  if (typeof senha !== 'string' || senha.length < 6) {
      throw new Error('Senha é obrigatória e deve ter pelo menos 6 caracteres.');
  }
sário

  return true; 
}

export { validateUser };