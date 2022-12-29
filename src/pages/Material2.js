import React from "react";
import "../styles/Material.css";
import { Fragment } from "react";
import ScrollButton from "../components/ScrollButton";
import Modal from "../components/Modal";
const Material2 = () => {
  return (
    <Fragment>
      <h1 className="title">Материаловедение </h1>
      <main>
        <div className="question-container">
          <h1>Билет 1</h1>
          <h2 className="question">
            Материалы, применяемые при постройке и ремонте судов.
          </h2>
          <p className="answer">
            <span>Сталь, </span> в основном углеродистая, низколегированные
            стали.
          </p>
          <p className="answer">
            <span>Алюминий. Чугун. </span> В судостроении из него отливают
            кнехты, кипы, клюзы, дейдвудные трубы, арматуру, станины машин,
            маховики.
          </p>
          <p className="answer">
            Основными конструкционными материалами в судостроении являются
            высококачественные углеродистые, низколегирован­ные и стали с
            особыми свойствами (нержавеющая, высокопроч­ная, износоустойчивая,
            жаропрочная).
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 2</h1>
          <h2 className="question">На какие группы разделяют металлы.</h2>
          <p className="answer">
            Металлы разделяют на{" "}
            <span>
              три группы: черные металлы, цвет­ные металлы и сплавы цветных
              металлов.
            </span>
          </p>
          <p className="answer">
            <span>Черные металлы - </span> это железо и сплавы на его основе:
            сталь, чугун, ферросплавы.
          </p>
          <p className="answer">
            <span>К цветным относят: </span> большинство прочих металлов и их
            соединений. Наиболее востребованные – медь, алюминий, цинк, никель,
            олово, латунь, титан.
          </p>
        </div>

        <div className="question-container">
          <h1>Билет 3</h1>
          <h2 className="question">Какие металлы относятся к черным.</h2>
          <p className="answer">
            <span>Чёрными сплавами </span>
            или чёрными металлами условно называют железо и его сплавы - чугуны,
            стали, иногда и ферросплавы. Остальные металлы и сплавы, в отличие
            от чёрных металлов и сплавов, называют цветными.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 4</h1>
          <h2 className="question">Химический состав чугуна.</h2>
          <p className="answer">
            Чугуном называют сплав, состоящий из{" "}
            <span>железа и углерода(не менее 2.14%).</span>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 5</h1>
          <h2 className="question">Виды чугунов</h2>
          <p className="answer">
            <span>Белый </span>чугун (хрупкий, содержит ледебурит и не содержит
            графит)
          </p>
          <p className="answer">
            <span>Серый чугун </span> (графит в форме пластин)
          </p>
          <p className="answer">
            <span>Ковкий чугун </span>(графит в хлопьях)
          </p>
          <p className="answer">Высокопрочный чугун </p> (графит в форме
          сфероидов)
          <p className="answer">
            <span>Половинчатый чугун </span>(содержит и графит, и ледебурит)
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 6</h1>
          <h2 className="question">Как используется белый чугун.</h2>
          <p className="answer">
            Свое основное применение сплав нашел только в виде отливки массивных
            деталей. Также белый чугун используют для получения ковкого чугуна.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 7</h1>
          <h2 className="question">
            Какое самое положительное качество серого чугуна.
          </h2>
          <p className="answer"></p>
        </div>
        <div className="question-container">
          <h1>Билет 8</h1>
          <h2 className="question">
            Природа получения модифицированного чугуна.
          </h2>
          <p className="answer">
            <span>Модифицированный чугун - </span> чугун, в который в жидком
            состоянии при определённых условиях введены модификаторы.
            Модификация чугуна графитизирующими, стабилизирующими и комплексными
            модификаторами осуществляется для улучшения его структуры и свойств.
          </p>
          <p className="answer">
            <span>Модифицирование — </span> означает управление структурой и
            свойствами литейного чугуна за счет минимизации переохлаждения и
            увеличения количества центров кристаллизации графита во время
            охлаждения отливки.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 9</h1>
          <h2 className="question">Химический состав стали</h2>
          <p className="answer">
            <span>В состав стали входят: </span>железо, углерод а также другие
            элементы, такие как марганец, фосфор, сера, никель, хром
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 10</h1>
          <h2 className="question">
            Отличие стали от чугуна по химическому составу.
          </h2>
          <p className="answer">
            Основное отличие чугуна от стали заключается в составе металлов
          </p>
          <p className="answer">
            <span>Сталь </span> представляет собой сплав{" "}
            <span>железа (45%) </span> с <span>углеродом (не более 2%)</span> и
            легирующими примесями. В состав чугуна также входит железо с
            углеродом, но последнего должно быть <span>от 2% и больше.</span>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 11</h1>
          <h2 className="question">
            Углеродистая сталь, химический состав, свойства.
          </h2>
          <p className="answer">
            <span>Углеродистая сталь - </span> это сталь с большим содержанием
            углерода. Углеродистая сталь подразделяется на:{" "}
            <span>
              низкоуглеродистую (до 0,25% углерода), среднеуглеродистую (от 0,25
              до 0,6% углерода) и высокоуглеродистую (до 2% углерода).
            </span>
          </p>
          <p className="answer">
            От обычных сталей углеродистую сталь отличает{" "}
            <span>меньшее содержание примесей,</span>
            небольшое содержание кремния, магния и марганца. Углеродистая сталь
            отличается <span>повышенной прочностью и высокой твердостью.</span>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 12</h1>
          <h2 className="question">
            Легированная сталь, химический состав, свойства.
          </h2>
          <p className="answer">
            <span>Леги́рованная сталь — </span> сталь, содержащая кроме железа и
            углерода (углеродистая сталь) другие специально вводимые в её состав
            элементы.
          </p>
          <p className="answer">
            Целью введения добавок может быть увеличение механических свойств,
            химическая или тепловая стойкость, улучшение магнитных качеств,
            устойчивость.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 13</h1>
          <h2 className="question">Виды легированных сталей.</h2>
          <p className="answer">
            <span>По степени легирования стали разделяют на: </span>
            <ul>
              <li>низколегированную (легирующих элементов до 2,5 %)</li>
              <li>среднелегированную (от 2,5 до 10 %)</li>
              <li>высоколегированную (от 10 до 50 %)</li>
            </ul>
          </p>
          <p className="answer">
            <span>По назначению стали подразделяются на:</span>
            <ul>
              <li>конструкционные</li>
              <li>инструментальные</li>
              <li>стали с особыми свойствами</li>
            </ul>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 14</h1>
          <h2 className="question">
            Характерные отличия углеродистых сталей от легированных.
          </h2>
          <p className="answer">
            Сталь, сплав железа с углеродом, а углеродистая сталь, более
            насыщена утлеродом. Она твёрже обычной. А легированя сталь, сталь с
            добавлением легирующих металлов. Таких распространённых как хром,
            ванадий, литий и другие.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 15</h1>
          <h2 className="question">
            Нержавеющая сталь, область ее применения.
          </h2>
          <p className="answer">
            <span>Нержавеющая сталь — </span> это легированная сталь,
            отличающаяся качеством высокой стойкости к коррозии.
          </p>
          <p className="answer">
            Нержавеющую сталь широко используют во всех сферах жизни человека,
            начиная от строительства и машиностроения, заканчивая производством
            бытовой техники и электроники.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 16</h1>
          <h2 className="question">
            Жаростойкая, жаропрочная и теплоустойчивая стали, характеристика,
            область применения
          </h2>
          <p className="answer">
            <span>Жаропрочные сплавы и стали - </span> материалы, работающие при
            высоких температурах в течение заданного периода времени в условиях
            сложно-напряженного состояния и обладающие достаточным
            сопротивлением к коррозии в газовых средах.
          </p>
          <p className="answer">
            <span>Жаропрочностью </span> называется способность сталей и сплавов
            выдерживать механические нагрузки при высоких температурах в течение
            определенного времени.
          </p>
          <p className="answer">
            При температурах до 600°С обычно применяют термин{" "}
            <span>теплоустойчивость. </span>
          </p>
          <p className="answer">
            <span>Жаростойкость </span> характеризует сопротивление металлов и
            сплавов газовой коррозии при высоких температурах.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 17</h1>
          <h2 className="question">
            Цветные металлы, определение, маркировка.
          </h2>
          <p className="answer">
            <span>К цветным относят </span> все металлы и сплавы, которые не
            содержат железа в своем составе.
          </p>
          <p className="answer">
            Цветные металлы – это медь, алюминий, цинк, олово, свинец, никель,
            хром, серебро и т.
          </p>
          <img
            src="https://sun9-88.userapi.com/impg/Ti2yF10ds0nOxecCFqU7T6Ii_42m951UmG5Meg/ClMcpaDvAFk.jpg?size=727x265&quality=96&sign=f7e1e7c6dcef361bae6fa5a13d5648f4&type=album"
            alt=""
            className="answer-img"
          />
        </div>
        <div className="question-container">
          <h1>Билет 18</h1>
          <h2 className="question">Медь, марки, область применения</h2>
          <p className="answer">
            Медь (Cu) – мягкий и пластичный металл золотисто-розового цвета.
            Медь бывает разных марок: М00, М0, М1, М2 и М3. Марки меди
            определяются чистотой её содержания.
          </p>
          <p className="answer">
            Ее используют в различных промышленных отраслях, в качестве основы
            для изготовления элементов и деталей электроприборов.{" "}
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 19</h1>
          <h2 className="question">Алюминий, марки, область применения.</h2>
          <p className="answer">
            <span>Алюминий — </span> легкий и пластичный белый металл.
          </p>
          <p className="answer">
            <span>Существуют марки алюминия: </span> А, АЕ, АО, А5, А6, А7, А8,
            А85, А95, А97, А99, А999 и А995. Марки от А до А85 содержат не более
            2 % примесей и называются алюминием технической чистоты.
          </p>
          <p className="answer">
            Этот <span>лёгкий и устойчивый к коррозии металл</span> широко
            используется для получения сплавов, которые находят применение в
            авиационной и космической технике, речных судах и катерах,
            автомобилях, а также в промышленности для изготовления посуды,
            бытовой техники и др.
          </p>
          <p className="answer">
            Алюминий и алюминиевые сплавы отличаются высокой коррозионной
            стойкостью в атмосферных условиях благодаря образованию пассивной
            пленки оксида алюминия (Al2O3), которая защищает поверхность металла
            от коррозии.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 20</h1>
          <h2 className="question">
            Свинец, характерные свойства, область применения.
          </h2>
          <p className="answer">
            <span>Свинец — </span> ковкий, сравнительно легкоплавкий тяжёлый
            металл, широко применяется для производства различных сплавов, в том
            числе антифрикционных сплавов (баббитов), свинцовых бронз,
            свинцовооловянных припоев, легкоплавких свинцовокадмиевооловянных
            сплавов, типографских сплавов, для производства фольги.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 21</h1>
          <h2 className="question">
            Олово, характерные свойства, область применения.
          </h2>
          <p className="answer">
            Главные промышленные применения олова – в белой жести (луженое
            железо) для изготовления тары, в припоях для электроники, в домовых
            трубопроводах, в подшипниковых сплавах и в покрытиях из олова и его
            сплавов. Олово образует различные соединения, многие из которых
            находят промышленное применение.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 22</h1>
          <h2 className="question">
            Цинк, характерные свойства, область применения.
          </h2>
          <p className="answer">
            Температура плавления цинка 420°С, температура кипения 906°С,
            плотность 7,13 г/см3.
          </p>
          <p className="answer">
            Цинк вводится в состав многих твёрдых припоев для снижения их
            температуры плавления. Окись цинка широко используется в медицине
            как антисептическое и противовоспалительное средство. Также окись
            цинка используется для производства краски — цинковых белил. Цинк —
            важный компонент латуни.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 23</h1>
          <h2 className="question">
            Понятие о сплаве, характер взаимодействия компонентов в сплавах.
          </h2>
          <p className="answer">
            <span>Под сплавом понимают </span> вещество, полученное сплавлением
            двух или более элементов.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 24</h1>
          <h2 className="question">Цветные сплавы, определение марки.</h2>
          <p className="answer">
            <span>Цветные сплавы - </span> это это сплавы на основе любых
            металлов, кроме железа. К цветным металлам относят алюминий, медь,
            цинк, никель, олово, свинец, хром.
          </p>
          <p className="answer">
            Эти сплавы маркируются буквами "АЛ" с последующим порядковым
            номером: АЛ2, АЛ9, АЛ13, АЛ22, АЛЗО. Иногда маркируют по составу:
            АК7М2; АК21М2, 5Н2,5; АК4МЦ6. В этом случае "М" обозначает медь. "К"
            - кремний, "Ц" - цинк, "Н" - никель; цифра - среднее % содержание
            элемента.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 25</h1>
          <h2 className="question">Физические свойства материалов.</h2>
          <p className="answer">
            <span> К физическим свойствам материалов относится: </span>{" "}
            плотность, температура плавления, электропроводность,
            теплопроводность, магнитные свойства, коэффициент температурного
            расширения и др.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 26</h1>
          <h2 className="question">Химические свойства материалов.</h2>
          <p className="answer">
            Основные химические свойства материалов:{" "}
            <span>
              способность вступать в реакцию с летучими веществами и кислородом;
              кислотостойкость; щелочестойкость.
            </span>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 27</h1>
          <h2 className="question">Технологические свойства материалов.</h2>
          <p className="answer">
            Технологические свойства определяют пригодность материала для
            изготовления из него детали тем или иным способом. К числу этих
            свойств относятся:{" "}
            <span>
              обрабатываемость резанием, ковкость, свариваемость,
              жидкотекучесть, усадка, склонность к ликвации и др.
            </span>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 28</h1>
          <h2 className="question">Механические свойства материалов.</h2>
          <p className="answer">
            К механическим свойствам относятся :{" "}
            <span>
              {" "}
              прочность материала (кратковременная и длительная), твердость,
              упругость, пластичность, вязкость, ползучесть, усталость,
              трещиностойкость, жаропрочность и др.
            </span>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 29</h1>
          <h2 className="question">
            Основные свойства конструкционных и эксплуатационных материалов.
          </h2>
          <p className="answer">
            К основным механическим свойствам конструкционных материалов и
            сплавов, определяющим работоспособность и область их применения,
            относят:{" "}
            <span>
              твердость, прочность, упругость, пластичность, вязкость,
              выносливость.
            </span>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 30</h1>
          <h2 className="question">Инструментальные стали и сплавы</h2>
          <p className="answer">
            <span>Инструментальная сталь - </span> это твердое легированное или
            углеродистое изделие, которое используется в качестве основного
            материала производства режущих и измерительных предметов, штампов,
            точных инструментов, деталей и механизмов (шестеренки, подшипники и
            пружины).
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 31</h1>
          <h2 className="question">Процессы обработки металлов и сплавов.</h2>
          <p className="answer">
            <span>К основным методам металлообработки можно отнести: </span>
            <ul>
              <li>Термическая обработка</li>
              <li>Обработка давлением</li>
              <li>Сварка</li>
              <li>Электрическая обработка</li>
            </ul>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 32</h1>
          <h2 className="question">Методы испытания материалов.</h2>
          <p className="answer">
            <span>
              Виды испытаний можно классифицировать следующим образом:{" "}
            </span>
            <span>По характеру воздействия: </span>
            <ul>
              <li>кратковременные испытания</li>
              <li>длительные испытания</li>
            </ul>
            <span>По виду напряженного состояния:</span>
            <ul>
              <li>испытания на растяжение, сжатие, изгиб, кручение, срез</li>
              <li>испытания в условиях сложного напряженного состояния.</li>
            </ul>
            <span>Технологические испытания: </span>
            <ul>
              <li>испытания для контроля пластичности</li>
              <li>измерение твердости</li>
              <li>испытание на вытяжку</li>
            </ul>
            <span>Испытание переменной нагрузкой:</span>
            <ul>
              <li>испытание на выносливость</li>
              <li>испытание на малоцикловую усталость</li>
            </ul>
            <span>Испытание ударом</span>
            <ul>
              <li>испытание на ударное растяжение</li>
              <li>испытание изгибом на ударную вязкость</li>
              <li>испытание поворотным ударом</li>
            </ul>
            <span>Натурные испытания: </span>
            <ul>
              <li>испытание на стендах</li>
              <li>испытание готовых изделий.</li>
            </ul>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 33</h1>
          <h2 className="question">
            Виды термообработки, их отличительные особенности.
          </h2>
          <p className="answer">
            Основными видами термической обработки являются:{" "}
            <span>
              Отжиг; Закалка; Нормализация; Отпуск; Криогенная обработка.
            </span>
          </p>
          <p className="answer">
            <ol>
              <li>
                <span>Закалка - </span> представляет собой вид термической
                обработки, состоящий в нагреве их выше критической температуры с
                быстрым последующим охлаждением.
              </li>
              <li>
                <span>Отпуск - </span>представляющая собой процесс нагрева
                изделий до определенной температуры с последующим охлаждением.
                Ее основное назначение – ликвидация внутренних напряжений,
                отрицательно влияющих на технические параметры металлоизделий.
                Для этого изделие подвергается нагреву в печи до температуры от
                150—260 °C до 370—650 °C с последующим медленным остыванием.
              </li>
              <li>
                <span>Нормализация - </span> изделие нагревается и охлаждается
                на спокойном воздухе. В результате нормализации снижаются
                внутренние напряжения, выполняется перекристаллизация стали. В
                сравнении с отжигом, нормализация – процесс более короткий и
                более производительный.
              </li>
              <li>
                <span>Отжиг - </span> термическая обработка металла, при которой
                производится нагревание металла, а затем медленное охлаждение.
                <p className="answer">
                  <span>Различие нормализации и отжига </span>
                  состоит в том, что при нормализации сталь охлаждается на
                  воздухе(при отжиге - в печи)
                </p>
              </li>
            </ol>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 34</h1>
          <h2 className="question">Титановые сплавы и баббиты, применения.</h2>
          <p className="answer">
            <span>Титан </span> сочетая коррозионную стойкость и прочность с
            низкой плотностью обладает целым рядом конструктивных преимуществ
            перед такими материалами, как например, сталь или алюминий.
          </p>
          <p className="answer">
            <span>Бабби́т — </span> антифрикционный литейный сплав на основе
            олова, с добавлением меди, свинца, сурьмы и других легирующих
            компонентов. Применяются при производстве моторно-осевых подшипников
            работающих при больших скоростях и средних нагрузках.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 35</h1>
          <h2 className="question">Способы получения стали</h2>
          <p className="answer">
            <span>
              В настоящее время существуют следующие способы производства стали:{" "}
            </span>
            <ul>
              <li>Кислородно-конвертерный </li>
              <li>Мартеновский способ</li>
              <li>Дуговая электропечь </li>
              <li>Вакуумные печи</li>
            </ul>
          </p>
          <img
            src="https://studfile.net/html/2706/311/html__pCzWp_6co.VYU3/img-NOR4Rs.png"
            alt=""
            className="answer-img"
          />
        </div>
        <div className="question-container">
          <h1>Билет 36</h1>
          <h2 className="question">
            Влияние пластической деформации на структуру и свойства материалов
          </h2>
          <p className="answer">
            С ростом степени холодной пластической деформации усиливаются
            прочностные свойства металла (увеличиваются пределы прочности и
            текучести, твердость), а пластические свойства ослабевают
            (уменьшаются относительное удлинение и сужение, ударная вязкость)
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 37</h1>
          <h2 className="question">Отжиг стали, закалка стали, отпуск стали</h2>
          <p className="answer">
            <ol>
              <li>
                <span>Закалка - </span> представляет собой вид термической
                обработки, состоящий в нагреве их выше критической температуры с
                быстрым последующим охлаждением.
              </li>
              <li>
                <span>Отпуск - </span>представляющая собой процесс нагрева
                изделий до определенной температуры с последующим охлаждением.
                Ее основное назначение – ликвидация внутренних напряжений,
                отрицательно влияющих на технические параметры металлоизделий.
                Для этого изделие подвергается нагреву в печи до температуры от
                150—260 °C до 370—650 °C с последующим медленным остыванием.
              </li>

              <li>
                <span>Отжиг - </span> термическая обработка металла, при которой
                производится нагревание металла, а затем медленное охлаждение.
                <p className="answer">
                  <span>Различие нормализации и отжига </span>
                  состоит в том, что при нормализации сталь охлаждается на
                  воздухе(при отжиге - в печи)
                </p>
              </li>
            </ol>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 38</h1>
          <h2 className="question">
            Неметаллические материалы, применение их на судах.
          </h2>
          <p className="answer">
            <span>
              Лесоматериалы, бетоны, пластики, смолы, изоляционные
              материалы(экспанзит, пеностекло, стекловойлок и др), покрасочные
              материалы, антикороззийные материалы
            </span>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 39</h1>
          <h2 className="question">
            Термопластичные пластмассы, их отличительные особенности
          </h2>
          <p className="answer">
            Обладает высокой химической стойкостью: по стойкости к агрессивным
            средам превосходит золото и платину. Обладает большой текучестью на
            холоде и невысокой твердостью. Используется как электроизоляционный
            материал в технике высоких и ультравысоких частот для изготовления
            химически стойких деталей.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 40</h1>
          <h2 className="question">
            Термореактивные пластмассы, их отличительные особенности
          </h2>
          <p className="answer">
            <span>К группе термореактивных пластмасс относятся: </span>{" "}
            пресспорошки, волокниты и слоистые пластики. Они выгодно отличаются
            от термопластичных пластмасс отсутствием хладотекучести под
            нагрузкой, более высокой теплостойкостью, малым изменением свойств в
            процессе эксплуатации.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 41</h1>
          <h2 className="question">
            Полимерные материалы, пластмассы, резиновые материалы
          </h2>
          <p className="answer">
            <span>Полимеры – </span> органические или неорганические вещества,
            состоящие из отдельных звеньев-мономеров, соединенных в длинные
            цепи-макромолекулы химическими или координационным связями.
          </p>
          <p className="answer">
            <span>Пластма́ссы — </span> материалы, основой которых являются
            синтетические или природные высокомолекулярные соединения
            (полимеры).
          </p>
          <p className="answer">
            <span>Резиновыми </span> называются продукты вулканизации смеси
            каучука и серы с различными добавками.
          </p>
        </div>
      </main>
      <ScrollButton />
    </Fragment>
  );
};

export default Material2;