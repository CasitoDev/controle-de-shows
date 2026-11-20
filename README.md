# Controle de shows

Projeto **Paradigmas em Ação**, da disciplina Paradigmas de Linguagem de Programação da UniCesumar. Integrantes: **Nicolas Casito e André Aires**, turma EngSoft6S.

A bilheteria do show fictício Aurora tem duas vagas. A demonstração vende uma inteira de R$ 100,00 e uma meia de R$ 50,00. A terceira tentativa retorna “Show esgotado”. O saldo final é de zero vagas, duas confirmações e receita de R$ 150,00.

## Executar no VS Code

Abra a pasta do projeto em **Arquivo → Abrir Pasta**. No terminal PowerShell, execute:

~~~powershell
Start-Process .\index.html
~~~

O navegador executa a demonstração e os testes. Recarregue a página para repetir.

## Organização

| Arquivo | Conteúdo |
| --- | --- |
| modelo.js | Classes de show, ingresso e bilheteria. Controla lotação, preço e receita. |
| funcional.js | Cálculo puro da receita com map e reduce, em centavos. |
| demo.js | Instâncias, compras, confirmação por evento e testes. |
| index.html | Exibe os resultados da execução no navegador. |
| logica.pl | Oito fatos e quatro regras em Prolog sobre shows e disponibilidade. |
| Controle-de-Shows.pdf | Relatório técnico com espaços para as evidências. |
| Relatorio-editavel.html | Versão que recebe os prints e exporta o PDF final. |

## Consultas em Prolog

No terminal PowerShell, a partir da pasta deste projeto, abra o SWI-Prolog:

~~~powershell
& "C:\Program Files\swipl\bin\swipl.exe" -s .\logica.pl
~~~

No prompt do Prolog, digite uma consulta por vez, incluindo o ponto final.

| Consulta | Resposta esperada |
| --- | --- |
| vagas(horizonte, N). | N = 4 |
| disponivel(S). | S = horizonte |
| esgotado(aurora). | true |
| opcao(rock, S). | false |

Aurora é o único show de rock e está lotado. Para voltar ao PowerShell, digite halt. e pressione Enter.

## Evidências para o relatório

Capture as imagens com Windows + Shift + S e salve cada PNG.

1. **Figura 1, página 11.** Abra modelo.js e capture as primeiras três classes, de Ingresso ao fim de IngressoMeia.
2. **Figura 2, página 11.** Abra funcional.js e demo.js lado a lado. Mostre totalEmCentavos e os testes que começam em const itens.
3. **Figura 3, página 12.** Execute index.html. Capture a saída no navegador com as duas confirmações, a venda recusada, a receita e os resultados dos testes.
4. **Figura 4, página 12.** Execute as quatro consultas Prolog e capture as perguntas com as respostas no terminal.

Abra Relatorio-editavel.html no navegador. Cole o link do repositório na página 2, escolha as imagens nas caixas das páginas 11 e 12 e use **Salvar em PDF** no topo antes de fechar a aba.
