import re


def validate_cpf(cpf):
    return len(cpf) == 11 or cpf.isalpha()


def validate_rg(rg):
    return len(rg) == 9


def validate_celular(celular):
    return len(celular) <= 11 or celular.isalpha()


def validate_email(email):
    return re.search(r"^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$", email)


def validate_nome(nome):
    return nome.isalpha()
