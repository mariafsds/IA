const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você foi recrutado por um caçador de túmulos para desvendar os segredos dos túmulos do deserto de Badain Jaran na China, esse deserto é conhecido por ser perigoso e mortal, mas a recompensa é mais de um milhão e você está precisando do dinheiro. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Você ficou hesitante mas aceita.",
                afirmacao: "Como você aceitou ele te deu vários equipamentos e dicas. "
            },
            {
                texto: "Você recusa na hora, mas acontece algo com você que te faz aceitar",
                afirmacao: "Você foi embora, mas foi sequestrado pelo caçador e ele te ameaçou, você acaba aceitando."
            }
        ]
    },
    {
        enunciado: "Após aceitar a missão, o caçador de tumbas te deu um mapa antigo. No entanto, as coordenadas parecem estar escritas em uma linguagem desconhecida. Você tem que decifrá-las para encontrar o caminho para as tumbas. Qual atitude você toma?",                                                
        alternativas: [
            {
                texto: "Você utiliza uma ferramenta de tradução online para decifrar as coordenadas. A ferramenta, por sorte, tem um banco de dados de línguas antigas e consegue fazer a tradução.",
                afirmacao: "Você consegue traduzir as coordenadas e traçar uma rota segura para as tumbas, evitando as dunas mais perigosas."
            },
            {
                texto: "Você estuda os símbolos e os compara com livros de história e arqueologia que trouxe consigo, usando seu conhecimento para encontrar um padrão e decifrar as coordenadas.",
                afirmacao: "Você sente mais confiança em decifrar as coordenadas com base em seu próprio conhecimento e esforço, e a tradução se prova precisa."
            }
        ]
    },
    {
        enunciado: "No caminho para o túmulo, vocês encontram um acampamento abandonado. A equipe de arqueólogos que estava ali desapareceu, mas deixou para trás um diário. A última entrada fala sobre uma maldição que protegeria o túmulo e um mapa que levaria a uma recompensa ainda maior. Como você se posiciona?",
        alternativas: [
            {
                texto: "Você defende a ideia de que a maldição é apenas uma lenda e que o mapa pode levar a uma descoberta valiosa que pode ser usada para o bem da humanidade.",
                afirmacao: "Você inspira a equipe a continuar, usando a sua fé na ciência para seguir o mapa, e acaba descobrindo um novo túmulo que contém um tesouro ainda maior."
            },
            {
                texto: "Você se preocupa com o destino dos arqueólogos desaparecidos e defende a ideia de voltar e pedir ajuda, pois uma maldição é algo muito sério e pode ser perigoso demais para a equipe continuar.",
                afirmacao: "Sua preocupação com a segurança da equipe motiva você a alertar a equipe de resgate local. A equipe é salva, mas a recompensa menor e o caçador de tumbas não está muito feliz."
            }
        ]
    },
    {
        enunciado: "Ao chegar na entrada do túmulo, vocês notam um hieróglifo estranho, que ninguém da equipe sabe o que significa. A recompensa está logo atrás do hieróglifo. O que você faz?",
        alternativas: [
            {
                texto: "Você tenta desenhar o hieróglifo com os materiais que tem, depois tira uma foto e envia para um especialista, que em tempo real te diz o que significa.",
                afirmacao: "A mensagem do especialista foi clara e a equipe conseguiu decifrar o hieróglifo a tempo, abrindo a porta para a recompensa. Você também se ofereceu para ajudar outros aventureiros em situações similares."
            },
            {
                texto: "Você tenta entender o que o hieróglifo significa e como ele se encaixa na cultura local.",
                afirmacao: "A sua insistência em entender a cultura local e a história do túmulo te ajudam a encontrar a passagem secreta para a câmara do tesouro, onde a recompensa está guardada."
            }
        ]
    },
    {
        enunciado: "Você e a equipe conseguem chegar ao tesouro, que é um baú cheio de moedas e artefatos. No entanto, o caçador de tumbas tenta roubar tudo. O que você faz?",
        alternativas: [
            {
                texto: "Você luta contra o caçador de tumbas e o vence, pegando todo o tesouro para você e sua equipe.",
                afirmacao: "Você e sua equipe saem do deserto com o tesouro, mas com a polícia na cola. O caçador de tumbas, antes de ser preso, consegue escapar e jura vingança. Você, agora, está com a sua vida em risco."
            },
            {
                texto: "Você tenta negociar com o caçador de tumbas, oferecendo uma parte do tesouro para ele ir embora e deixar o restante para você e sua equipe.",
                afirmacao: "O caçador de tumbas aceita a oferta, mas antes de ir embora, avisa que o baú é amaldiçoado. Vocês conseguem sair do deserto, mas a maldição traz má sorte para a vida de todos os envolvidos. "
            }
        ]
    },
];


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
