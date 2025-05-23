import './App.css'
import React from 'react';
import './index.css';

const heroesData = [
  {
    name: "Бетмен",
    universe: "DC Comics",
    alterego: "Брюс Уэйн",
    occupation: "борец с преступностью, филантроп, миллиардер",
    friends: "Робин, Бэтгерл",
    superpowers:
      "интеллект, обширные познания, знания боевых искусств, ловкость",
    url: "https://i.pinimg.com/736x/c3/c9/07/c3c907f6dd61b04d936e5da85c660cd7.jpg",
    info: "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций.",
  },
  {
    name: "Супермен",
    universe: "DC Comics",
    alterego: "Кларк Кент",
    occupation: "борец за справедливость",
    friends: "собака Крипто",
    superpowers:
      "непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм",
    url: "https://i.pinimg.com/474x/02/c7/2e/02c72e6c08fb319891b94ad12c3dc854.jpg",
    info: "Полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты.",
  }, 
  {
    name: "Чудо-женщина",
    universe: "DC Comics",
    alterego: "Диана Принс",
    occupation: "супергероиня, секретарь-референт",
    friends: "Лига Справедливости, Бэтмен, Супермен",
    superpowers: "сверхчеловеческая сила искорость, выносливость, полёт",
    url: "https://i.pinimg.com/474x/3c/c4/14/3cc414840439ee82b37ecfdd275dff06.jpg",
    info: "Пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :) Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Своё настоящее имя Диана она получила в честь древнегреческой богини охоты, а суперспособности от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром :)",
  },
  {
    name: "Спайдер-мен/Человек-паук",
    universe: "Marvel Comics",
    alterego: "Питер Паркер",
    occupation: "борец за справедливость, студент, фотограф",
    friends: "Мстители, Фантастическая четверка, Люди Икс",
    superpowers:
      "сверхчеловеческие рефлексы, «паучье чутьё», способность прилепляться к твердым поверхностям, производство паутины",
    url: "https://i.pinimg.com/474x/c8/29/79/c82979209bdc37f20a288cd4e66f1b7c.jpg",
    info: "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:) Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность». Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание.",
  },
  {
    name: "Капитан Америка",
    universe: "Marvel Comics",
    alterego: "Стивен Роджерс",
    occupation: "супер-солдат",
    friends: "Мстители",
    superpowers:
      "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    url: "https://i.pinimg.com/474x/c5/88/4c/c5884c68f9e082f16921ffd9fe5e4b77.jpg",
    info: "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали. По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:)",
  },
  {
    name: "Дэдпул",
    universe: "Marvel Comics",
    alterego: "Уэйд Уинстон Уилсон",
    occupation: "антигерой, наёмник",
    friends: "частично Мстители, Человек-паук, Росомаха",
    superpowers:
      "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    url: "https://i.pinimg.com/474x/04/52/c0/0452c00bbc97e219ad610e8f251ebb75.jpg",
    info: "Как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным. Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, чёрное чувство юмора: за него Дэдпула прозвали «Болтливым наёмником»",
  },
  {
    name: "Тор",
    universe: "Marvel Comics",
    alterego: "нет; полное имя — Тор Одинсон",
    occupation: "борец за справедливость, скандинавский бог",
    friends: "Мстители",
    superpowers: "всё, что может бог, плюс молот Мьелнир",
    url: "https://i.pinimg.com/474x/0c/4f/2d/0c4f2d6f9d2beabf81df82c4b66df2d5.jpg",
    info: "Персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии.",
  },
  {
    name: "Веном",
    universe: "Marvel Comics",
    alterego: "Эдди Брок",
    occupation: "суперзлодей, антигерой",
    friends: "Эдди Брок",
    superpowers:
      "способен поглощать энергию людей для поддержания собственной жизнедеятельности и превращать свои руки в длинные щупальца для захвата",
    url: "https://i.pinimg.com/474x/a7/dc/72/a7dc7229696457bc4409a654db7ee9f2.jpg",
    info: "В комиксах Веном — симбиот, прибывший на Землю с планеты Клинтар и впервые связанный с Человеком-пауком. После этого он прошёл через множество разных хостов, в первую очередь Эдди Брока. После того, как он был связан с Броком, он стал суперзлодеем и одним из величайших противников Классического Человека-паука. Первым известным владельцем симбиота был Питер Паркер, который в конечном итоге полностью отказался от пришельца, узнав о его истинных злых намерениях. Впоследствии симбиот объединялся с Эдди Броком, его вторым и самым известным носителем, ставшим первым Веномом и заклятым врагом Человека-паука. Согласно источникам Щ.И.Т.а, Веном является одной из величайших угроз человечеству, наряду с Магнето, Доктором Думом и Красным Черепом.",
  },
  {
    name: "Сорвиголова",
    universe: "Marvel Comics",
    alterego: "Мэттью Мэтт Мёрдок",
    occupation: "супергерой",
    friends: "Мстители",
    superpowers: "умелый боец, владение посохами,улучшенные чувства",
    url: "https://i.pinimg.com/474x/a2/54/41/a25441e06cb431246ef27a9765d67695.jpg",
    info: "Человек, который ослеп ещё ребёнком вследствие попадания в глаза реагентов, но получивший при этом обострённые чувства. После того, как его отец был убит бандитами, Мёрдок решил посвятить свою жизнь борьбе с несправедливостью в Нью-Йорке: днём как адвокат, ночью - как линчеватель, известный как Сорвиголова (англ. Daredevil). Его действия по борьбе с преступностью привели к конфликту с главой преступности Уилсоном Фиском. Мёрдок помог доказать все преступления Фиска и посадил его в тюрьму. Мэтт поистине ценит человеческую жизнь он справедлив и никогда не даст умереть ни кому , так как знает что даже в плохих людях есть частичка добра , он любит и уважает своих друзей и никому не даст их обидеть , он любит Нью-Йорк и готов за него жизнь отдать.",
  },
];

class HeroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0 };
  }

  handleStarClick = (newRating) => {
    this.setState({ rating: newRating });
  };

  renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= this.state.rating ? 'active' : ''}`}
          onClick={() => this.handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  render() {
    const { hero } = this.props;
    return (
      <div className="hero-card">
        <img src={hero.url} alt={hero.name} />
        <h2>{hero.name}</h2>
          <p><strong>Вселенная:</strong>{hero.universe}</p>
          <p><strong>Альтер эго:</strong>{hero.alterego}</p>
          <p><strong>Род занятий:</strong>{hero.occupation}</p>
          <p><strong>Друзья:</strong>{hero.friends}</p>
          <p><strong>Суперспособности:</strong>{hero.superpowers}</p>
        <p>{hero.info}</p>
        <div className="rating">
          {this.renderStars()}
        </div>
      </div>
    );
  }
}

class HeroesPage extends React.Component {
  render() {
    return (
      <div className="heroes-page">
        <h1>Галерея Героев</h1>
        <div id="gallery" className="gallery">
          {heroesData.map((hero, index) => (
            <HeroCard key={index} hero={hero} />
          ))}
        </div>
      </div>
    );
  }
}

export default HeroesPage;