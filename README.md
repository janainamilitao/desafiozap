# Documentação Técnica

## Especificação

Transformar os critérios de aceite abaixo em User Stories e executar cada um dos
User Stories propostos:
A linguagem no back-end deve ser Python e o framework deve ser Django (qualquer
versão)
A linguagem no front-end deve ser Javascript o framework deve ser Angular (qualquer
versão)
O design não será avaliado (pode utilizar qualquer bootstrap/material UI da vida)

**Uma Company deve ter:**

* nome (string limite de 255 caracteres)
* data de criação (Datetime)
* data da última atualização (Datetime)
* fuso horário (String limite de 50 caracteres)
* linguagem (opções: pt, es ou en)
* usuários convidados
* usuário que criou
* documentos associados

O nome é obrigatório
A data de criação é obrigatória
O valor padrão para fuso horário é: “-03:00”
O valor padrão para linguagem é “pt”

**Um Doc deve ter:**

* nome (string limite de 255 caracteres)
* deletado (boolean)
* data de criação (Datetime)
* data da última atualização (Datetime)
* data limite para assinar (Datetime)
* assinado (boolean)
* company associada
* usuário que criou o documento

O nome é obrigatório
A campo deletado por padrão é falso
A data de criação é obrigatória
Toda vez que houver uma atualização em qualquer campo do Doc, o campo data da última
atualização deve ser atualizado tambémO campo assinado é falso por padrão
Na interface deve haver um botão escrito “assinar” que altera o status do campo para
verdadeiro
Caso o status do campo assinado seja verdadeiro o botão deve estar desativado
Após definido como verdadeiro, o campo assinado deve ser imutável.

**Um User tem:**

* email (string limite de 255 caracteres)
* data da última redefinição de senha (datetime)
* email verificado (boolean)
* senha (string limite de 255 caracteres)
* data de criação (datetime)
* data da última atualização (datetime)
* companhias associadas
* companhia original
* documentos associados

O email é obrigatório
O campo email verificado por padrão é false
O campo senha é obrigatório e deve ser maior ou igual a 6 caracteres
O campo data de criação é obrigatório
Toda vez que houver uma atualização em qualquer campo do usuário, o campo data da
última atualização deve ser atualizado também
Tudo deve ser escrito com testes automatizados

## Diagrama de classe
![Diagrama de classe](documentation/images/class_diagram.jpg)


## Instalação backend

### Django request workflow
https://nthb.github.io/django/

### Django resquest framework
https://www.django-rest-framework.org/tutorial/quickstart/ 

### Instalação Python
```sudo apt install python3.11 -y```

### Instalção ven: criação de ambientes virtuais 
```sudo apt install python3-venv -y```

### venv: criar

```python3 -m venv venv```

## #Djanjo
Pode ser instalado dentro do ambiente virtual.

### ativar máquina virtual
```source desafiozap/venv/bin/activate```

### instalar o django dentro da máquina virtual
```pip install django```

### criação dos arquivos do django
```django-admin startproject front .```

### banco de dados
Verificação da configuração do banco de dados no arquivo settings.py e criação da estrutura base do banco

```python manage.py migrate```

### criação de usuário admin para o django
```python manage.py createsuperuser```

Usuário: admin    Senha: admin

### inicialização do django 
Disponível em: http://127.0.0.1:8000/admin

```python manage.py runserver```

### criação de app ou modulos dentro da aplicação
Cada app é responsável por uma parte do sistema

```python manage.py startapp core```

## Instação frontend

### nvm
```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash```

```source .bashrc```

### node
```nvm install node```

### angular

https://angular.io/cli

```npm install -g @angular/cli```

```ng new frontend```

```cd frontend```

```ng server```

## Conceitos

### Django

Django é um framework web Python de alto nível que permite o rápido desenvolvimento de sites seguros e de fácil manutenção. Construido por desenvolvedores experientes, o Django cuida de grande parte do trabalho de desenvolvimento web, para que você possa se concentrar em escrever seu aplicativo sem precisar reinventar a roda. É gratuito e de código aberto, tem uma comunidade próspera e ativa, ótima documentação e muitas opções de suporte gratuito e pago.

**Apesar de ser uma liguagem fullstack quando trabalhamos com Django é interessante usar uma liguagem de front como Angular que além de mais especializada no frontend garante um desacoplamento entre back e front.**


### Angular
Angular é um popular framework de código aberto desenvolvido pelo Google para a criação de aplicativos da web dinâmicos e interativos.

Ele se baseia em TypeScript, uma linguagem superset do JavaScript, e utiliza uma abordagem orientada a componentes para a construção de interfaces. 

**Grande vantagem de usar o Angular é que gera Apps Sigle Page: para cada chamada ao servidor não precisa carregar a página inteira (apenas a primeira vez)**


