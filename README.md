# devEvolution

### Criar uma API de produto/pedido 
###################
### Produto
##### RF
#### Criar Produto
#### Editar Produto
#### Deletar Produto
#### Visualizar Produto

#### RN

#### Criar Produto
`1. Deve ser  possível criar um novo produto`
`2. Deve ser  possível criar um novo produto apenas quando o usuário estiver autenticado`
`3. Deve ser  possível editar um produto apenas quando o usuário estiver autenticado`
`4. Deve ser  possível editar um produto apenas se o produto existir`

#### Editar Produto
`1. Deve ser  possível editar apenas um produto existente`
`2. Deve ser  possível editar um  produto apenas quando o usuário estiver autenticado`
#### Deletar Produto
`1. Deve ser  possível deletar apenas  um produto existente`
`2. Deve ser  possível deletar um  produto apenas quando o usuário estiver autenticado`
#### Visualizar Produto
`1. Deve ser  possível visualizar um produto existente`
`2. Deve ser  possível visualizar um  produto apenas quando o usuário estiver autenticado`
 ###################

### Usuário
##### RF
#### Criar Usuário
#### Editar Usuário
#### Deletar Usuário
#### Visualizar Usuário
#### Escolher endereço de entrega
#### Adicionar endereço de entrega
#### Editar endereço de entrega

##### RN
#### Criar Usuário
`1. Deve ser possível criar um usuário novo`
`2. Não deve ser possível criar um usuário com login repetido`
`3. Deve ser possível colocar uma imagem de avatar no usuário`
#### Editar Usuário
`1. Deve ser possível editar um usuário novo`
`2. Não deve ser possível criar um usuário com login repetido`
`3. Deve ser possível alterar a senha via email`
`4. Deve ser possível colocar uma imagem de avatar no usuário`
#### Deletar Usuário
`1. Deve ser possível deletar um usuário`
`2. Não deve ser possível deletar um usuário sem estar autenticado`
`3. Deve ser possível deletar uma imagem de avatar no usuário`
#### Visualizar Usuário
`1. Deve ser possível visualizar apenas um usuário existente`
`2. Não deve ser possível visualizar um usuário sem estar autenticado`
`3. Deve ser possível visualizar outros usuários`
#### Escolher endereço de entrega
`1. Deve ser possível escolher apenas um endereço existente`
`2. Não deve ser possível escolher um endereço sem estar autenticado`
`3. Deve ser possível escolher dois endereços`
#### Adicionar endereço de entrega
`1. Deve ser possível adicionar vários endereços para um usuário`
`2. Não deve ser possível adicionar um endereço sem estar autenticado`
`3. Não deve ser possível escolher dois endereços`
#### Editar endereço de entrega
`1. Deve ser possível editar os endereços para um usuário`
`2. Não deve ser possível editar um endereço sem estar autenticado`
`3. Não deve ser possível escolher dois endereços como padrão`
###################

### Pedidos
##### RF
#### Criar Pedido
#### Editar Pedido
#### Deletar Pedido
#### Visualizar Pedido
#### Escolher método de pagamento
#### Adicionar metodo de pagamento

##### RN
#### Criar Pedido
`1. Deve ser possível criar o pedidos apenas autenticado`
`2. Deve ser possível criar pedidos apenas depois de selecionar um ou mais produtos`
`3. Deve ser possível retirar produtos`
`4. Deve ser possível inserir produtos`
#### Editar Pedido
`1. Deve ser possível editar o pedidos apenas autenticado`
`2. Deve ser possível editar produtos apenas que estão com status pendente ou confirmado`
`3. Deve ser possível inserir produtos`
`4. Deve ser possível retirar produtos`
#### Deletar Pedido
`1. Deve ser possível deletar o pedidos apenas autenticado`
`2. Deve ser possível deletar produtos apenas que estão com status pendente ou  aguardando confirmação`
`3. Deve ser possível deletar produtos do pedido`
#### Visualizar Pedido
`1. Deve ser possível visualizar o pedidos apenas autenticado`
`2. Deve ser possível visualizar produtos`
`3. Deve ser possível visualizar produtos do pedido`
#### Finalizar Pedido
`1. Deve ser possível finalizar o pedidos apenas autenticado`
`2. Deve ser possível finalizar pedidos somente depois de concluído`
#### Avaliar Pedido
`1. Deve ser possível avaliar pedido somente quando autenticado`
`2. Deve ser possível avaliar pedido somente depois de concluído`
#### Escolher método de pagamento
`1. Deve ser possível escolher o metodo de pagamento do pedido apenas autenticado`
#### Adicionar metodo de pagamento
`1. Deve ser possível adicionar o metodo de pagamento do pedido apenas autenticado`
`2. Deve ser possível adicionar o metodo de pagamento do  direto no pedido ou buscando a forma padrão no cadastro`
###################

### Cliente
##### RF

#### Criar Cadastro
#### Editar Cadastro
#### Deletar Cadastro
#### Visualizar cadastro


##### RN

#### Criar Cadastro
`1. Deve ser possível criar um cadastro`
#### Editar Cadastro
`1. Deve ser possível editar um cadastro`
#### Deletar Cadastro
`1. Deve ser possível deletar um cadastro`
#### Visualizar cadastro
`1. Deve ser possível visualizar apenas o próprio cadastro`
