class ValidaCPF{
    constructor(cpf){
        Object.defineProperty(this, 'cpfClear', {
            writable: false,
            configurable: false,
            value : cpf.replace(/\D+/g, '')
        });
    }

    isSequence() {
        return this.cpfClear.charAt(0).repeat(11) === this.cpfClear;
    }

    generateNewCPF() {
        const cpf9Digits = this.cpfClear.slice(0, -2);
        const firstDigit = ValidaCPF.gerateDigit(cpf9Digits);
        const secondDigit = ValidaCPF.gerateDigit(cpf9Digits + firstDigit);
        this.newCPF = cpf9Digits + firstDigit + secondDigit;
    }

    static gerateDigit(cpf9Digits) {
        let total = 0;
        let reverse = cpf9Digits.length + 1;

        for (let stringOfCPF of cpf9Digits) {
            total += reverse * Number(stringOfCPF);
            reverse --;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    valida() {
        if (!this.cpfClear) return false;
        if (typeof this.cpfClear !== 'string') return false;
        if (this.cpfClear.length !== 11) return false;
        if (this.isSequence()) return false;
        this.generateNewCPF();
        
        return this.newCPF === this.cpfClear;
    }
}

let cpfValido = new ValidaCPF('020.298.590-36');
