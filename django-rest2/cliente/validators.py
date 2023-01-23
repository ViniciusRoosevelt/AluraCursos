import re

from validate_docbr import CPF

def validate_cpf(cpf):
    cpf_validate = CPF()
    return cpf_validate.validate(cpf)


def validate_rg(rg):
    return len(rg) == 9


def validate_celular(celular):
    "Verifica se está no formato de (11 91234-1234)"
    modelo = '[0-9]{2} [0-9]{5}-[0-9]{4}'
    responsta = re.findall(modelo,celular)
    return responsta


def validate_email(email):
    return re.search(r"^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$", email)


def validate_nome(nome):
    return nome.isalpha()
