import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Sau.css";
import { dataSau } from "../dataSau";
import Question from "../components/Question";
import MyInput from "../components/MyInput";
import { Fragment } from "react";
import ScrollButton from "../components/ScrollButton";
import { Content, Heading } from "../components/Styles";
const Home = () => {
  // const [data, setData] = useState(dataSau);
  // const [value, setValue] = useState("");
  // const [valueNum, setValueNum] = useState("");
  // useEffect(() => {
  //   const newData = dataSau.filter((obj) =>
  //     obj.question.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setData(newData);
  // }, [value]);
  // useEffect(() => {
  //   const newData = dataSau.filter((obj) =>
  //     valueNum != "" ? obj.id == valueNum : obj.id
  //   );
  //   setData(newData);
  // }, [valueNum]);
  return (
    <Fragment>
      <h1 className="title">СЭУ</h1>
      <main>
        <div className="question-container">
          <h1>Билет 1</h1>
          <h2 className="question">Классификация и состав СЭУ</h2>
          <p className="answer">
            <ol>
              <ul>
                <span>По роду используемого топлива</span>
                <li>
                  Дизельные, паровые, газотурбинные, ядерные энергоустановки,
                  комбинрованные
                </li>
              </ul>
              <ul>
                <span>По способу передачи</span>
                <li>Механическая, Электрическая, Гидравлическая</li>
              </ul>
              <ul>
                <span>По степени автоматизации</span>
                <li>
                  <span>A1: </span> Полностью автоматизированная, не требует
                  вахты
                </li>
                <li>
                  <span>A2: </span> Частично автоматизированная, требуется вахта
                  в ГЦ
                </li>
                <li>
                  <span>A3: </span> С уменьшенным обьемом автосистем.
                </li>
              </ul>
            </ol>
          </p>
          <p className="answer">
            <span>СЭУ - </span> это комплекс технических средств (машин
            механизмов, систем и т.д.). предназначенных для обеспечения судна
            всеми видами энергии, необходимыми для его использования по
            назначению.
          </p>
          <p className="answer">
            {" "}
            <span>Состав СЭУ: </span>
            Главная энергоустановка (двиг, движетель и передачи) -
            Вспомогательная энергоустановка - Судовая электроэнергоустановка
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 2</h1>
          <h2 className="question">Классификация ДВС</h2>
          <p className="answer">
            <ol>
              <span>По способу осуществления рабочего цикла:</span>

              <ul>
                <li>4х-тактные</li>
                <li>2х-тактные</li>
              </ul>
              <span>По роду применяемого топлива: </span>

              <ul>
                <li>Дизельные</li>
                <li>Бензиновые</li>
                <li>Газовые</li>
              </ul>
              <span>По способу наполениня илиндра воздухом: </span>

              <ul>
                <li>С наддувом</li>
                <li>Без наддува</li>
              </ul>
              <span>По способу воспламинения: </span>

              <ul>
                <li>От сжатия(Дизели)</li>
                <li>Искровое зажигание</li>
              </ul>
              <span>По конструктивному исполнению: </span>

              <ul>
                <li>Тронковые(обычные)</li>
                <li>Крейцкопфные</li>
              </ul>

              <span>По расположению рабочих цилиндров: </span>

              <ul>
                <li>Вертикальное</li>
                <li>Горизонтальное</li>
                <li>V-образное</li>
                <li>Звездообразное</li>
              </ul>

              <span>По возможности осуществления реверса: </span>

              <ul>
                <li>Реверсивные</li>
                <li>Нереверсивные</li>
              </ul>

              <span>По назначению: </span>

              <ul>
                <li>Главные</li>
                <li>Вспомогательные</li>
              </ul>

              <span>По оборотам: </span>

              <ul>
                <li>Малооборотные(от 100 до 350 об/мин)</li>
                <li>Среднеоборотные(от 350 до 750 об/мин)</li>
                <li>Высокооборотные(от 750 до 3000 об/мин)</li>
              </ul>
            </ol>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 3</h1>
          <h2 className="question">Назначение и состав остова ДВС.</h2>
          <p className="answer">
            <span>Остов двигателя </span> есть неподвижная его часть, являющаяся
            основой, на которой укрепляются все подвижные детали двигателя. Он
            воспринимает все усилия возникающие при работе двигателя. Остов -
            неподвижная основа двигателя.
          </p>
          <p className="answer">
            <span>В состав остова входят: </span>фундаментная рама, картер,
            цилиндры и их крышки. Все эти детали соединяются в жесткую, прочную,
            единую конструкцию с помощью анкерных связей
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 4</h1>
          <h2 className="question">
            Теоретически циклы работы 4 тактного ДВС. Рабочие процессы в
            цилиндре ДВС.
          </h2>
          <img
            src="https://mirmarine.net/images/Statyi/DVS/Main/655-printsip-dejstviya-dizelnykh-dvigatelej/ris18.jpg"
            alt=""
            className="answer-img"
          />
        </div>
        <div className="question-container">
          <h1>Билет 5</h1>
          <h2 className="question">
            Назначение и состав механизмов движения ДВС
          </h2>
          <p className="answer">
            <span>ДВС состоит из: </span>
            кривошипно-шатунного механизма, механизма газораспределения и пяти
            систем: питання, зажигания, смазки, охлаждения и пуска.
            Кривошипно-шатунный механизм предназначен для восприятия давления
            газов и преобразования возвратно-поступательного движения поршня во
            вращательное движение коленчатого вала.
          </p>
          <p className="answer">
            <span>Поршень: </span>служит для восприятия усилий, возникающий ри
            сгорании топлива и передачи их через поршневой палец и шатун на
            коленчатый вал.
          </p>
          <p className="answer">
            <span>Шатун: </span>служит для передачи усилий с поршня на
            коленчатый вал, преобразования возвратно-поступательного движения
            поршня во вращательное движение на коленчатом вале.
          </p>
          <p className="answer">
            <span>Коленчатый вал: </span>служит для преобразовния
            возвратно-поступательных движений поршня во вращательные движения.
          </p>
          <p className="answer">
            <span>Маховик: </span>служит для равномерного вращения коленчатого
            вала.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 6</h1>
          <h2 className="question">
            Теоретические циклы работы 2 тактных ДВС. Рабочие процессы в
            цилиндре ДВС
          </h2>
          <img
            src="https://mirmarine.net/images/Statyi/DVS/Main/655-printsip-dejstviya-dizelnykh-dvigatelej/ris21.jpg"
            alt=""
            className="answer-img"
          />
        </div>
        <div className="question-container">
          <h1>Билет 7</h1>
          <h2 className="question">
            Механизм газораспределения ДВС 4-х и 2х тактных ДВС. Регулировки и
            тех обслуживание
          </h2>
          <p className="answer">
            <span>Газораспределительный механизм (сокр. ГРМ) - </span> один из
            механизмов ДВС, ответственный за впуск атмосферного воздуха и выпуск
            отработанных газов из цилиндров. Обычно состоит из одного, реже
            нескольких распредвалов, а также толкателей и клапанов, закрывающий
            выпускные и впускные отверстия камер сгорания.
          </p>
          <p className="answer">
            <span>Передачи в газораспределительном механизме: </span> ременная,
            цепная и зубчатая.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 8</h1>
          <h2 className="question">
            Топливная система ДВС назначение и состав
          </h2>
          <p className="answer">
            <span>Топливная система </span> предназначена для подачи, хранения и
            подготовки топлива.
          </p>
          <p className="answer">
            <span>Состоит из: </span> система топливоподготовки,
            топливохранения, топливоподачи и топливной аппаратуры.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 9</h1>
          <h2 className="question">
            Система охлаждения ДВС назначение и состав.
          </h2>
          <p className="answer">
            <span>Система охлаждения ДВС </span> предназначена для отвода тепла
            от детлей двигателся подвергающихся наибольшему нагреванию.
          </p>
          <p className="answer">
            <span>Система охлаждения бывает: </span> прямоточная(забортной воды)
            и замкнутая(2 контура)
          </p>
          <p className="answer">
            <span>Состоит из: </span> диароатор, насос забортной воды, масляной
            охладитель, фильтр забортной воды, водоочистительная установка.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 10</h1>
          <h2 className="question">Система смазки ДВС назначение и состав.</h2>
          <p className="answer">
            <span>Циркуляционная система смазки </span> предназначена для
            смазывания трущихся деталей механизмов движения, а также их
            охлаждения. Такой системой смазываются все подшипники.
          </p>
          <p className="answer">
            <span>Бывает двух типов: </span> с сухим картером и мокрым картером.
          </p>
          <p className="answer">
            <span>Лубрикаторная система смазки </span> используется для смазки
            ЦПГ(Цилиндро-Поршневая Группа) в двухтактных крейцкофных дизелях.
          </p>
          <p className="answer">
            <span>Состоит из: </span> сепараторов, насосов, цистерн,
            маслоохладителя, фильтров, НИПов
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 11</h1>
          <h2 className="question">
            Назначение устройство и конструктивные особенности систем
            парогенераторов
          </h2>
          <p className="answer">
            <span>Паровой котел — </span> теплообменный аппарат предназначенный
            для превращения воды в пар заданных параметров за счет тепловой
            энергии при сжигании топлива
          </p>
          <p className="answer">
            <span> По конструктивный особенностям делятся на: </span>{" "}
            водотрубные, огнетрубные, комбинированные
          </p>
          <p className="answer">
            <span>Водотрубные — </span> вода и паровая смесь внутри труб,
            горячие газы снаружи.
            <span> Огнетрубные — </span> горячие газы внутри труб, вода снаружи.
            <span> Комбинированные — </span> водотрубные + огнетрубные
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 12</h1>
          <h2 className="question">
            Назначение, устройство и принцип действия судовых газовых турбин
          </h2>
          <p className="answer">
            <span>Газотурбинным </span> называется такой{" "}
            <span>тепловой двигатель, </span> в котором потенциальная энергия
            рабочего тела превращается в механическую энергию в газовой турбине.
            Рабочим телом в газовой турбине служит любой газ (воздух, продукты
            сгорания, гелий, азот и др.) или их смеси.
          </p>
          <p className="answer">
            Газотурбинный двигатель с зубчатой передачей и навешенными или
            расположенными на общей с ним раме вспомогательными механизмами и
            устройствами называется <span> газотурбинным агрегатом. </span>
          </p>
          <p className="answer">
            Газотурбинный агрегат с обслуживающими его системами образует
            <span> газотурбинную установку (ГТУ). </span>
          </p>
          <p className="answer">
            <span>ГТУ </span> предназначены для эксплуатации в любых
            климатических условиях как основной или резервный источник
            электроэнергии и тепла для объектов производственного или бытового
            назначения.
          </p>
          <img
            src="https://operby.com/wp-content/uploads/2013/07/gtu2.jpg"
            alt=""
            className="answer-img"
          />
        </div>
        <div className="question-container">
          <h1>Билет 13</h1>
          <h2 className="question">
            Судовой валопровод и его элементы. Подшипники валопровода.
          </h2>
          <p className="answer">
            <span>Судовой валопровод - </span> комплекс устройств, механизмов и
            соединений, служащих для передачи крутящего момента от двигателя к
            движителю и передачи упорного давления от последнего к корпусу
            судна.
          </p>
          <p className="answer">
            <span>Валопровод состоит из </span> упорного, промежуточных и
            гребного валов, соединенных между собой фланцевыми соединениями.
          </p>
          <p className="answer">
            <span>Подшипник валопровода - </span> элемент судового валопровода,
            устанавливаемый на судовом фундаменте или встроенный в дейдвудное
            устройство и кронштейн, предназначенный для восприятия нагрузки,
            возникающей при монтаже и работе валопровода.
          </p>
          <p className="answer">
            Промежуточные валы опираются на <span>опорные подшипники.</span>
          </p>
          <p className="answer">
            <span>Опорный подшипник - </span> подшипник, предназначенный для
            восприятия поперечных нагрузок.
          </p>
          <p className="answer">
            <span>порный подшипник - </span> подшипник, предназначенный для
            передачи осевого усилия создаваемого движителем, корпусу судна.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 14</h1>
          <h2 className="question">
            Судовые движители их характеристики. Гребные винты фиксированного
            шага, крыльчатые движители. Винты регулируемого шага. Подруливающие
            устройства.
          </h2>
          <p className="answer">
            <span>Гребные винты</span>
            <ul>
              <li>Фиксированного шага</li>
              <li>Регулируемого шага</li>
            </ul>
            <span>Шаг винта - </span>
            расстояние, которое проходит каждая точка винта за один оборот
            <span> Крыльчатый движитель - </span> движительно - рулевое
            устройство с полностью погружённым в среду крыльчатым движителем.
          </p>
          <p className="answer">
            <span> Водометный движитель - </span> судовой двигатель, у которого
            сила, движущая судно, создаётся выталкиваемой из него струёй воды.
            <ul>
              <li>с выбросом водяной струи в воду</li>
              <li>с выбросом водяной струи в атмосферу</li>
              <li>с полуповодводным выбросом струи</li>
            </ul>
          </p>
          <p className="answer">
            <span>Подруливающее устройство - </span> предназначено для активного
            управления судном(повышеная маневренность). Устанавливают в носу или
            в нос и корме.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 15</h1>
          <h2 className="question">
            Воздушные компрессоры: назначение классификация устройство и принцип
            действия.
          </h2>
          <p className="answer">
            <span>Воздушные компрессоры - </span> предназначены для подачи
            воздуха в цилиндр и его продувания.
          </p>
          <p className="answer">
            <ol>
              <li>
                <span>По числу ступеней сжатия воздуха </span>
                <ul>
                  <li>одноступенчатые</li>
                  <li>многоступенчатые</li>
                  <li>без предварительного сжатия </li>
                </ul>
              </li>
              <li>
                <span>По числу компрессоров</span>
                <ul>
                  <li>без компрессоров</li>
                  <li>однокомпрессорне</li>
                  <li>многокомпрессорные </li>
                </ul>
              </li>
              <li>
                <span>По способу поддержания параметров воздуха</span>
                <ul>
                  <li>нерегулируемые</li>
                  <li>регулируемые</li>
                </ul>
              </li>
            </ol>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 16</h1>
          <h2 className="question">Подготовка ДВС к пуску</h2>
          <p className="answer">
            <ol>
              <li>
                <span>Произвести внешний осмотр.</span>(Отсутствие подтеков
                топлив и масла. Все навесные механизмы на месте. Трубопроводы
                подсоединены на свои места)
              </li>
              <li>
                <span>Подготовка топливной системы.</span>
                <ol>
                  <li>Проверка уровня топлива в расходной цистерне</li>
                  <li>Включить автономный топливоподкачивающий насос</li>
                  <li>
                    Установить арматуру в положение как указано в инструкции по
                    эксплуатации
                  </li>
                  <li>Провериьт чистоту фильтра(по монометрам вход-выход)</li>
                  <li>Пуск производится на легком топливе.</li>
                </ol>
              </li>
              <li>
                <span>Подготовка системы охлаждения(пресной и забортной)</span>
                <ol>
                  <li>Проверить уровень воды в расширительной цистерне</li>
                  <li>Установить арматуру как указано в инструкции</li>
                  <li>Включить в работу цикруляционный насос</li>
                  <li>Включить в работу водоподогреватель</li>
                  <li>Прокачать воду вокруг двигателя 15-20 минут</li>
                  <li>
                    Включить насос забортной воды(убедившись, что есть давление)
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <span>Подготовка системы смазки</span>
                <ol>
                  <li>
                    Убедиться в наличии масла в картере или в смежной
                    циркуляционнойцистерне
                  </li>
                  <li>Установить арматуру как в инструкции</li>
                  <li>Включить циркуляционный насос</li>
                  <li>Проверить масло в расходной цистерне</li>
                  <li>Проверить каждый лубрикатор вручную</li>
                  <li>
                    Провеить есть ли масло в циркуляционной цистерне и включить
                    циркуляционный насос
                  </li>
                  <li>
                    Проверить давление воздуха в пусковом балоне(должно быть 30
                    бар)
                  </li>
                  <li>Открыть индикаторные краны в цистерне</li>
                  <li>
                    Произвести проворачивание двигателя в ручную или
                    валоповоротным устройством
                  </li>
                  <li>Закрыть индикаторные краны</li>
                </ol>
              </li>
            </ol>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 17</h1>
          <h2 className="question">Параметры контролируемые при работы ДВС</h2>
          <p className="answer">
            <ol>
              <li>Температура и давление на входе в двигатель</li>
              <li>Вязкость топлива</li>
              <li>агрузка двигателя(по оборотам)</li>
              <li>Температура на входе и выходе из двигателя</li>
              <li>Температура и давление продуваемого воздуха</li>
              <li>Температура выпускных газов по цилиндрам</li>
              <li>Темепратура и давление в системе смазки</li>
              <li>Расход топлива по времени</li>
              <li>Температура цилиндрового масла </li>
              <li>Контроль за вспомогательными газами</li>
            </ol>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 18</h1>
          <h2 className="question">Системы пуска ДВС</h2>
          <p className="answer">
            <span>Виды пуска: </span>
            <ul>
              <li>Ручной</li>
              <li>Стартерный</li>
              <li>Воздушный</li>
            </ul>
          </p>
          <p className="answer">
            <span>Состоит из: </span> воздухораспределителя, управляющий
            воздух(трубопровод), главный пусковой клапан, пусковой воздух,
            баллон со сжатым воздухом
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 19</h1>
          <h2 className="question">Судовая техническая документация</h2>
          <p className="answer">
            <ul>
              <li>Вахтенный машинный журнал</li>
              <li>Технический отчет</li>
              <li>Ремонтные ведомости</li>
              <li>Месяччный машиный отчет</li>
            </ul>
          </p>
        </div>

        <div className="question-container">
          <h1>Билет 20</h1>
          <h2 className="question">
            Способы определения масляного зазора мотылевых подшипников
          </h2>
          <p className="answer"></p>
        </div>

        <div className="question-container">
          <h1>Билет 21</h1>
          <h2 className="question">
            Судовые вспомогательные механизмы. Состав и назначение
          </h2>
          <p className="answer">
            <span>По роду привода: </span>
            <ul>
              <li>Автономные</li>
              <li>Приводные</li>
            </ul>
            <span>По расположение: </span>
            <ul>
              <li>Палубные</li>
              <li>Внутрикорпусные</li>
            </ul>
            <span>По роду используемого топлива: </span>
            <ul>
              <li>Паровые</li>
              <li>Дизельные</li>
              <li>Гидравлические</li>
              <li>Пневматические</li>
              <li>Электрические</li>
            </ul>
            <span>По назначению</span>
            <ul>
              <li>Рулувые</li>
              <li>Грузовые</li>
              <li>Водоопреснительные</li>
            </ul>
          </p>
          <p className="answer">
            <span>Судовые вспомогательные механизмы </span> обеспечивают рабоу
            ГД, обслуживают ус-ва и системы, повышают производительность труда.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 22</h1>
          <h2 className="question">Способы наддува ДВС. Газотурбокомпрессор</h2>
          <p className="answer">
            <span>Турбокомпрессор </span> применяется для повышения мощности
            двигателя внутреннего сгорания без коренного вмешательства в его
            конструкцию. Данный агрегат повышает давление во впускном тракте
            двигателя, обеспечивая подачу в камеры сгорания увеличенного
            количества топливно-воздушной смеси.
          </p>
          <p className="answer">
            <span>Способы наддува: </span>
            <ul>
              <li>Механический</li>
              <li>Газотурбинный</li>
              <li>Комбинированный</li>
              <li>Электркомпрессор</li>
              <li>Двухступенчатый наддув</li>
            </ul>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 23</h1>
          <h2 className="question">
            Газотурбокомпрессор назначение состав и принцип действия
          </h2>
          <p className="answer">
            <span>Газотурбокомпрессор </span> предназначен для повышения
            мощности двигателя обеспечивая наддув.
          </p>
          <p className="answer">
            <span>Состоит из: </span> Копрессора, воздухоохладителя, турбины и
            вала.
          </p>
          <img
            src="https://sun9-66.userapi.com/impg/8RQsCNUWLE-xQmjR-zoeI_2tK9RrDIEWQzz_yw/CGttxD45ycs.jpg?size=732x330&quality=96&sign=bcbfdb92d6af25d318091288b0ebd854&type=album"
            alt=""
            className="answer-img"
          />
        </div>
        <div className="question-container">
          <h1>Билет 24</h1>
          <h2 className="question">
            Судовые котельные установки назначение и состав.
          </h2>
          <p className="answer">
            <span>Паровой котел - </span> теплообменный аппарат предназначенный
            для превращения воды в пар заданных параметров за счет тепловой
            энергии при сжигании топлива{" "}
          </p>
          <p className="answer">
            Может быть: <span>огнетрубный, водотрубный </span>
          </p>
          <p className="answer">
            <span>Водотрубные — </span> вода и паровая смесь внутри труб,
            горячие газы снаружи.
            <span> Огнетрубные — </span> горячие газы внутри труб, вода снаружи.
          </p>
          <p className="answer">
            <span>Огнетрубный состоит из: </span> дымогарных труб, топки,
            дымовой коробки, топливной форсунки, огневой камеры, жаровой трубы.
          </p>
          <p className="answer">
            <span>Водотрубный состоит из: </span> экономайзера, стопорных
            клапанов, верхнего коллектора пароперегревателя, нижнего
            воздухоподогревателя.
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 25</h1>
          <h2 className="question">Системы обслуживающие судовые установки</h2>
          <p className="answer">
            <ul>
              <li>Топливная система</li>
              <li>Система воздухоснабжения</li>
              <li>Питательная система</li>
            </ul>
          </p>
        </div>
        <div className="question-container">
          <h1>Билет 26</h1>
          <h2 className="question">Устройство и принцип действия котла.</h2>
          <img
            src="https://sun9-21.userapi.com/impg/OJdsqVSOoTY85V2iR4TpfcsM67Zgz0qWzcljgg/KKn0GjzEUv8.jpg?size=819x526&quality=96&sign=9d1718406fb4361cc58dcc882d4d962c&type=album"
            alt=""
            className="answer-img"
          />
        </div>

        <div className="question-container">
          <h1>Билет 27</h1>
          <h2 className="question">
            Регулировка ГРМ по диаграмме фаз газораспределения
          </h2>
          <p className="answer"></p>
        </div>
        <div className="question-container">
          <h1>Билет 28</h1>
          <h2 className="question">
            Электронная система топливоподачи фирмы МАН
          </h2>
          <p className="answer"></p>
        </div>
        <div className="question-container">
          <h1>Билет 29</h1>
          <h2 className="question">
            Электронная система топливоподачи фирмы Вяртсилла-Зульцер
          </h2>
          <p className="answer"></p>
        </div>

        <div className="question-container">
          <h1>Билет 31</h1>
          <h2 className="question">Правила очистки котлов</h2>
          <p className="answer">
            <span>Механический способ очистки котла: </span>
          </p>
          <p className="answer">
            Используют скребки, щетки. Для разрыхления плотной накипи
            проивзодится щелочение котла 1%ым раствором соды.
          </p>
          <p className="answer">
            Котел заливают водой выше верхнего уровня на 2см, проивзодят
            кипячение 20-30 часов, добавляют соду, после этого котел немедленно
            охлаждают до t=30-40C. позже спускают воду.
          </p>
          <p className="answer">
            Трубы очищаются от сажи, после промываются водой.
          </p>
          <p className="answer">
            <span>При химической очистке </span> применяются 4 технологических
            схема:
            <ol>
              <li>Заливают хим раствором без перемешивания</li>
              <li>
                Заливают хим раствором с интенсивным перемешиванием с помощью
                насоса с воздухом
              </li>
              <li>Растворение разложений с проточной циркуляцией</li>
              <li>
                Вытеснение растворенных разложений с замкнутой многократной че
                то там расворителя.
              </li>
            </ol>
            <span>В качестве кислот используют </span>
            <ul>
              <li>Соляная </li>
              <li>Серная</li>
              <li>Уксусная</li>
              <li>Лимонная</li>
              <li>Сульфаминовая</li>
            </ul>
          </p>
          <span>Щелочение котла</span>
          <p className="answer">
            Котел заполняется водой до рабочего значения, включаются форсунки,
            вода нагревается до 50-60C. Раствор также нагревается до 50-60гр,
            через насос емкость с кислотой присоединяют к котлу и заливают в
            котел. Проивзодится циркуляция. После окончания щелочения производят
            нейтрализацию, с помощью кальцинированной соды. После нейтролизации
            котел промывают горячей водой примерно 60гр.
          </p>
          <p className="answer">
            После окончания химической очистки котла, в первые 5 суток вводится
            щелочной режим работы и интенсивность продувания котла.
          </p>
        </div>

        {/* 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        asdfasdf */}
      </main>
      <ScrollButton />
    </Fragment>
  );
};

export default Home;
