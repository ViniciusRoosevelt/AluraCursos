
import re


def validate_nome(nome):
    return nome.isalpha()


def validate_email(email):
    return re.search(r"^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$", email)
