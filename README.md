
LEVANTAMENTO DE REQUISITOS E FUNCIONALIDADES
--------------------------------------------

1. Objetivo Geral
Desenvolver uma solução simples e acessível que ajude as empreendedoras do estúdio de beleza a organizar sua rotina de atendimentos, melhorar a comunicação com as clientes e otimizar o uso do tempo e espaço no estúdio.

2. Requisitos Funcionais

Código  | Requisito Funcional        | Descrição
--------|----------------------------|---------------------------------------------------------------
RF01    | Cadastro de clientes       | Permitir o registro de informações das clientes, como nome, telefone, serviços preferidos e observações.
RF02    | Gerenciamento de agendamentos | Criar, editar e excluir agendamentos com data, hora, tipo de serviço e cliente associado.
RF03    | Notificações e lembretes   | Enviar lembretes para as clientes sobre os horários marcados, de forma manual ou automatizada.
RF04    | Controle de horários       | Exibir uma visualização dos horários disponíveis e ocupados, evitando conflitos de agendamentos.
RF05    | Histórico de atendimentos  | Manter o registro dos atendimentos realizados para consulta futura.

3. Funcionalidades Principais

3.1 Cadastro de Clientes
- Inclusão, edição e exclusão de clientes.
- Campos obrigatórios: nome, telefone.
- Campos opcionais: serviço(s) frequente(s), observações.
- Lista de clientes com busca por nome.

3.2 Agendamentos
- Criação de novos agendamentos com:
  - Data e hora.
  - Cliente selecionado da base.
  - Tipo de serviço (manicure, pedicure, cabelo).
  - Status do agendamento (pendente, confirmado, concluído, cancelado).
- Edição e remoção de agendamentos.
- Visualização por dia ou semana.

3.3 Notificações
- Geração de lembretes automáticos para o WhatsApp.
- Mensagens pré-definidas para confirmação, lembrete ou reagendamento.
- Opção de envio manual ou integração com WhatsApp Web/Business.

3.4 Controle de Horários
- Exibição de horários disponíveis x ocupados.
- Prevenção de agendamentos duplicados.
- Visualização em formato de calendário.

4. Requisitos Não Funcionais

Código  | Requisito Não Funcional    | Descrição
--------|----------------------------|---------------------------------------------------------------
RNF01   | Usabilidade                | A interface deve ser simples e intuitiva.
RNF02   | Acessibilidade             | A solução deve estar disponível em dispositivos móveis.
RNF03   | Custo zero ou baixo        | Utilizar ferramentas gratuitas.
RNF04   | Baixa necessidade de manutenção | Deve funcionar com o mínimo de suporte técnico contínuo.
