const LIST = [
    {
        id: 1,
        name: 'InuYasha',
        avatar: 'img/inuyasha.png',
        bio: 'InuYasha é um hanyou, por ser filho de um youkai e de uma humana. Desta forma, os youkais possuem poderes diferenciados. Kagome Higurashi é uma garota japonesa dos tempos atuais e ainda estudante colegial.',
        link: 'https://www.youtube.com/watch?v=hdktsQor1ZQ&ab_channel=Opening%27sBR',
        published: 'Publicado em 13 de Novembro de 1996'
    },
    {
        id: 2,
        name: 'Bleach',
        avatar: 'img/bleach.png',
        bio: 'Bleach conta a história do Ichigo Kurosaki. Num dia ele encontra a Rukia e, a partir daí, descobre que sua vida mudou para sempre.',
        link: 'https://www.youtube.com/watch?v=fuwPuimFQkY&t=30s&ab_channel=BleachBrasil',
        published: 'Publicado em 20 de Agosto de 2001'
    },
    {
        id: 3,
        name: 'Death Note',
        avatar: 'img/deathNote.png',
        bio: 'Um estudante japonês encontra um caderno misterioso e descobre ter poderes para matar todas as pessoas cujos nomes forem escritos no caderno.',
        link: 'https://www.youtube.com/watch?v=OcvYRCYm2OE&ab_channel=wellcross27',
        published: 'Publicado em 1 de Janeiro de 2003'
    },
    {
        id: 4,
        name: 'Chainsaw Man',
        avatar: 'img/chainsawMan.png',
        bio: 'Chainsaw Man segue a história de Denji , um jovem empobrecido que faz um contrato que funde seu corpo com o de um demônio parecido com um cachorro chamado Pochita, concedendo a ele a habilidade de transformar partes de seu corpo em motosserras.',
        link: 'https://www.youtube.com/watch?v=Cb9F59uvA_0&ab_channel=CrunchyrollBrasil',
        published: 'Publicado em 3 de dezembro de 2018'
    },
    {
        id: 5,
        name: 'Hellsing',
        avatar: 'img/hellsing.png',
        bio: 'A agência Hellsing é um grupo dos guerreiros que proteje a Inglaterra e a igreja Anglicana de vampiros. Guiados por Integra Hellsing, a líder da lendária família Hellsing , a agência combate vampiros junto com Alucard, um vampiro renegado que luta pela humanidade.',
        link: 'https://www.youtube.com/watch?v=MUkZPS915X4&ab_channel=Rocketseat',
        published: 'Publicado em 10 de Outubro de 2001'
    },
    {
        id: 6,
        name: 'Fullmetal Alchemist',
        avatar: 'img/fullmetal.png',
        bio: 'Edward e Alphonse Elric são dois irmãos alquimistas procurando o catalisador lendário chamado pedra filosofal, um objeto poderoso que lhes permite restaurar seus corpos (que foram perdidos numa tentativa de trazer sua mãe de volta à vida pelo uso da alquimia).',
        link: 'https://www.youtube.com/watch?v=MUkZPS915X4&ab_channel=Rocketseat',
        published: 'Publicado em 10 de Outubro de 2001'
    },
    {
        id: 7,
        name: 'Tokyo Ghoul',
        avatar: 'img/tokyoGhoul.png',
        bio: 'A história de Tokyo Ghoul gira em torno de Ken Kaneki, um estudante que mal sobrevive a um encontro mortal com Rize Kamishiro, uma mulher que se revela um ghoul; ghoul são criaturas semelhantes a humanos que caçam e devoram carne humana, com essa revelação Rize ataca Kaneki que é ferido gravemente, tentando fugir desesperadamente Rize o encurrala até que vários canos de metal caem em Rize aparentemente a matando, logo após isso Kaneki desmaia devido aos ferimentos e é levado para o hospital em estado critico.',
        link: 'https://www.youtube.com/watch?v=qM8wxM_mcRw&ab_channel=CrunchyrollDubs',
        published: 'Publicado em 8 de Setembro de 2011'
    },
    {
        id: 8,
        name: 'Solo Leveling',
        avatar: 'img/soloLeveling.png',
        bio: 'Há mais de uma década, surgiu uma misteriosa passagem chamada "portal", que conecta este mundo a uma dimensão diferente, o que fez com que pessoas despertassem poderes únicos… e essas pessoas são chamadas de "caçadores". Os caçadores usam seus poderes sobre-humanos para conquistar masmorras dentro dos portais e assim ganhar a vida. Sung Jinwoo, um caçador de nível baixo, é considerado o caçador mais fraco de toda a humanidade. Certo dia, ele se depara com uma "masmorra dupla", que tem uma masmorra de nível alto escondida dentro de uma masmorra de nível baixo. Diante de um Jinwoo gravemente ferido, surge uma misteriosa missão! À beira da morte, Jinwoo decide aceitar essa missão, tornando-se assim a única pessoa capaz de subir de nível!',
        link: 'https://youtu.be/UHsJnbpbf48?si=DIRqLCLqFl1FrZ2z',
        published: 'Publicado em Janeiro de 2024'
    }

]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Meus animes preferidos',
        userName: 'Kira Oliveira',
        characters: LIST
    }
})