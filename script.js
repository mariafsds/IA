const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {  "enunciado": "Você, um aventureiro sem grana, recebe uma proposta irrecusável de um caçador de tumbas: desvendar os segredos dos perigosos túmulos do Deserto de Badain Jaran, na China. A recompensa? Mais de um milhão! Qual é sua primeira reação?",
        "alternativas": [
            {
                "texto": "Você hesita, mas a grana fala mais alto.",
                "afirmacao": "Você aceita! O caçador te equipa com tudo e te dá dicas valiosas para a jornada."
            },
            {
                "texto": "Você recusa na hora, mas o destino tem outros planos para você.",
                "afirmacao": "Você tenta ir embora, mas é sequestrado pelo caçador. Sob ameaça, você não tem escolha a não ser aceitar."
            }
        ]
    },
    {
        "enunciado": "Com a missão aceita, o caçador de tumbas te entrega um mapa antigo. As coordenadas, porém, estão em uma língua desconhecida. Como você vai decifrar o caminho para os túmulos?",
        "alternativas": [
            {
                "texto": "Você saca seu tradutor online! Por sorte, ele tem um banco de dados de línguas antigas e consegue traduzir as coordenadas.",
                "afirmacao": "Tradução feita! Você traça uma rota segura, desviando das dunas mais traiçoeiras do deserto."
            },
            {
                "texto": "Você mergulha nos seus livros de história e arqueologia. Com seu conhecimento, estuda os símbolos, encontra padrões e decifra as coordenadas por conta própria.",
                "afirmacao": "Sua dedicação recompensa! A tradução é precisa, e você se sente mais confiante em seu próprio conhecimento."
            }
        ]
    },
    {
        "enunciado": "No caminho para o túmulo, vocês encontram um acampamento abandonado. Uma equipe de arqueólogos sumiu, deixando para trás um diário. A última entrada fala sobre uma terrível maldição que protege o túmulo e um mapa para um tesouro ainda maior! Como você reage a isso?",
        "alternativas": [
            {
                "texto": "Você ignora a lenda da maldição! Acredita que o mapa pode levar a uma descoberta incrível, que beneficiaria toda a humanidade.",
                "afirmacao": "Sua paixão pela ciência contagia a equipe! Vocês seguem o mapa e encontram um novo túmulo, com um tesouro ainda mais valioso!"
            },
            {
                "texto": "Você se preocupa com o sumiço dos arqueólogos. Defende que é preciso voltar e pedir ajuda, pois uma maldição é séria demais para ser ignorada.",
                "afirmacao": "Sua preocupação salva o dia! Você alerta o resgate local, a equipe é salva, mas a recompensa é menor, e o caçador de tumbas não fica nada feliz."
            }
        ]
    },
    {
        "enunciado": "Chegando à entrada do túmulo, um hieróglifo estranho impede o caminho. Ninguém da equipe sabe o que ele significa, mas a fortuna está logo atrás dele. O que você faz?",
        "alternativas": [
            {
                "texto": "Você desenha o hieróglifo, tira uma foto e envia para um especialista. Ele te responde na hora com o significado!",
                "afirmacao": "A mensagem do especialista é clara! A equipe decifra o hieróglifo, e a porta se abre para a recompensa. Você até se oferece para ajudar outros aventureiros no futuro!"
            },
            {
                "texto": "Você se dedica a entender o hieróglifo, tentando conectá-lo à cultura e história local.",
                "afirmacao": "Sua insistência em compreender a cultura do túmulo compensa! Você encontra a passagem secreta para a câmara do tesouro, onde a recompensa te espera."
            }
        ]
    },
    {
        "enunciado": "Finalmente, você e sua equipe alcançam o tesouro: um baú transbordando de moedas e artefatos. Mas o caçador de tumbas tenta roubar tudo! Qual será sua ação?",
        "alternativas": [
            {
                "texto": "Você parte para a briga! Luta contra o caçador de tumbas, o vence e fica com todo o tesouro para você e sua equipe.",
                "afirmacao": "Você e sua equipe escapam do deserto com o tesouro, mas a polícia está no seu encalço. O caçador de tumbas foge antes de ser preso e jura vingança. Sua vida, agora, está em risco!"
            },
            {
                "texto": "Você tenta negociar! Oferece uma parte do tesouro ao caçador para que ele vá embora e deixe o restante para sua equipe.",
                "afirmacao": "O caçador aceita o acordo, mas antes de partir, avisa que o baú é amaldiçoado. Vocês saem do deserto, mas a maldição traz má sorte para todos os envolvidos em suas vidas."
            }
        ]
    }


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
