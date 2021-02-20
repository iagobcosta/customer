export const cpfMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

export const mascaraData = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
}

export const formatDate = value => {
  const dateReplace = value.replace("/","").replace("/","");
  const dateString = dateReplace.toString();
  const day = dateString.substr(0, 2);
  const month = dateString.substr(2, 2);
  const year = dateString.substr(4);
  const date = year + '-' + month + '-' + day
  return date;
}

export const termsFormat = value => {
  return value
    .replace(/@/g,'\n')
}