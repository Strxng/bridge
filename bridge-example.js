// Implementação da abstração
class Chat {
  constructor(localizacao) {
    this.localizacao = localizacao;
  }

  enviarMensagem(mensagem) {
    const conteudoMensagem = this.formatarMensagem(mensagem);
    this.localizacao.enviarMensagemLocal(conteudoMensagem);
  }

  receberMensagem(mensagem) {
    console.log(`Mensagem recebida: ${mensagem}`);
  }

  formatarMensagem(mensagem) {
    return `[${this.localizacao.nome}] ${mensagem}`;
  }
}

// Implementação da implementação
class Localizacao {
  constructor(nome) {
    this.nome = nome;
  }

  enviarMensagemLocal(mensagem) {
    // Implementação específica da localização para enviar mensagem somente para usuários na mesma localização
    console.log(`Enviando mensagem local de ${this.nome}: ${mensagem}`);
  }
}

// Implementações concretas de localizações
class LocalizacaoUtf extends Localizacao {
  enviarMensagemLocal(mensagem) {
    console.log(`Enviando mensagem local na UTFPR: ${mensagem}`);
  }
}

class LocalizacaoBalada extends Localizacao {
  enviarMensagemLocal(mensagem) {
    console.log(`Enviando mensagem local na balada: ${mensagem}`);
  }
}

// Utilização do padrão Bridge
const chatUtf = new Chat(new LocalizacaoUtf("UTFPR"));
chatUtf.enviarMensagem("Salve galera, tem prova hoje?");

const chatBalada = new Chat(new LocalizacaoBalada("BALADA"));
chatBalada.enviarMensagem("Quanto ta o combo?");
