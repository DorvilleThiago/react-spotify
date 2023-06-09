function isValidEmail(email: string | undefined) {
    if (email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    return false;
  }

function emailVal(mail:string|undefined) {
    if (isValidEmail(mail)) {
        return true;
    }
    return false;
}

function senhaVal(pass:string|undefined) {
    if (pass && pass.length > 5) {
        return true;
    }
    return false;
}

export default function validateCredentials(email:string|undefined, senha: string|undefined) {
    if (emailVal(email) && senhaVal(senha)) {
        return true;
    }
    return false;
}