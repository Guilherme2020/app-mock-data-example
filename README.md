### Como executar o projeto

- Na pasta raiz, execute:
  yarn
- Depois entre na pasta /mockserver e realize o npm i
- Após rodar a instalação dos pacotes dentro dessa pasta, então executamos nosso server local: npm run start-auth
- Feito isso devemos voltar a pasta raiz do projeto RN e então executar o comando reverte do android para que nosso emulador reconheça a api rodando na porta especifica
  adb -s 5556 reverse tcp:8000 tcp:8000 (detalhe 5556 se refere ao id do meu emulador local)
- Por fim podemos realizar o build rodando: yarn android
