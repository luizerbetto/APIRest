# APIRest

# Rotas:

1 - Geral = localhost:3000

2 - Pessoa
  - Get /people - Lista as pessoas;
  - Get /people/:id - lista pessoa baseado no id
  - Post /people - adicona uma pessoa com os dados passados
  - Put /people/update/:id - atualiza uma pessoa baseado no ID
  - Delet /people/:id - remova uma pessoa baseada no id
 
3 - Evento
  - Get /event/list - lista todos os eventos
  - Get /event/:id - encontra um evento pelo id
  - Post /event - adiciona um evento
  - Put /event/update/:id - atualiza um evento
  - Delet /event/:id - remove um evento
  - Get /event/bypeople/:peopleId - Pega lista de evento baseado no ligação com pessoa