import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import MyInput from "../components/MyInput";
import QuestionThermo from "../components/QuestionThermo";
import "../styles/Thermo.css";
const About = () => {
  // const [data, setData] = useState(dataThermo);
  // const [value, setValue] = useState("");
  const [modalActive, setModalActive] = useState(false);

  // useEffect(() => {
  //   const newData = dataThermo.filter((obj) =>
  //     value != "" ? obj.id == value : obj.id
  //   );
  //   setData(newData);
  // }, [value]);
  return (
    <div className="holder">
      <h1 className="title">Термодинамика</h1>
      {/* <Modal active={modalActive} setActive={setModalActive}>
        <h1>Цикл Отто</h1>
        <div className="columnDiv">
          <img
            src="https://dic.academic.ru/pictures/wiki/files/84/T_cycle_otto.png"
            alt="ottoCycle"
          />
          <span>
            <p> 1—2 адиабатное сжатие рабочего тела;</p>
            <p>2—3 изохорный подвод теплоты к рабочему телу;</p>
            <p> 3—4 адиабатное расширение рабочего тела;</p>
            <p>4—1 изохорное охлаждение рабочего тела.</p>
          </span>
        </div>

        <h1>Цикл Дизеля</h1>
        <div className="columnDiv">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/T_cycle_diesel.png/1024px-T_cycle_diesel.png"
            alt="dieselCycle"
          />
          <span>
            <p>1—2 адиабатное сжатие рабочего тела;</p>
            <p>2—3 изобарный подвод теплоты к рабочему телу;</p>
            <p>3—4 адиабатное расширение рабочего тела;</p>
            <p>4—1 изохорное охлаждение рабочего тела.</p>
          </span>
        </div>

        <h3>Цикл Тринклера</h3>
        <div className="columnDiv">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/T_cycle_Seiliger.png/1024px-T_cycle_Seiliger.png"
            alt="TrinklerCycle"
          />
          <span>
            <p>
              1—2 В рабочем цилиндре воздух адиабатически сжимается за счет
              инерции маховика, сидящего на валу двигателя, нагреваясь при этом
              до температуры, обеспечивающей воспламенение топливно-воздушной
              смеси.
            </p>
            <p>
              2—3 Сгорание части топлива в небольшом объеме форкамеры (V=const).
            </p>
            <p>
              3—4 Догорание оставшегося топлива в рабочем цилиндре (P=const).
            </p>
            <p> 4—5 Адиабатическое расширение продуктов сгорания.</p>
            <p> 5—1 Удаление выхлопных газов (V=const).</p>
          </span>
        </div>

        <h1>Цикл Карно</h1>
        <div className="columnDivAnother">
          <div className="bright-div">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Carnot-cycle-p-V-diagram.svg/1024px-Carnot-cycle-p-V-diagram.svg.png"
              alt="carnoCycle"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Thermodynamic_cycle_carnot_lat.png"
              alt="carnoCycle"
              className="second-img"
            />
          </div>

          <p>
            1. Изотермическое расширение (на рис. 1 — процесс A→B). В начале
            процесса рабочее тело имеет температуру , то есть температуру
            нагревателя. При расширении рабочего тела его температура не падает
            за счет передачи от нагревателя количества теплоты , то есть
            расширение происходит изотермически (при постоянной температуре) .
            При этом объём рабочего тела увеличивается, оно совершает
            механическую работу, а его энтропия возрастает.
          </p>
          <p>
            2. Адиабатическое расширение (на рис. 1 — процесс B→C). Рабочее тело
            отсоединяется от нагревателя и продолжает расширяться без
            теплообмена с окружающей средой. При этом температура тела
            уменьшается до температуры холодильника , тело совершает
            механическую работу, а энтропия остаётся постоянной.
          </p>
          <p>
            3. Изотермическое сжатие (на рис. 1 — процесс C→D). Рабочее тело,
            имеющее температуру , приводится в контакт с холодильником и
            начинает изотермически сжиматься под действием внешней силы, отдавая
            холодильнику количество теплоты . Над телом совершается работа, его
            энтропия уменьшается.
          </p>
          <p>
            4. Адиабатическое сжатие (на рис. 1 — процесс D→A). Рабочее тело
            отсоединяется от холодильника и сжимается под действием внешней силы
            без теплообмена с окружающей средой. При этом его температура
            увеличивается до температуры нагревателя, над телом совершается
            работа, его энтропия остаётся постоянной.
          </p>
        </div>

        <h1>Теплоемкость</h1>
        <p>
          Удельная теплоемкость вещества –это количество теплоты, необходимое
          для нагревания единицы массы вещества на 1 К: (Дж/кг·К).
        </p>
      </Modal> */}
      {/* <button
        className={modalActive ? "btn-sos active" : "btn-sos"}
        onClick={() => setModalActive(true)}
      >
        SOS
      </button> */}
      {/* ОСНОВА */}
      {/* <MyInput value={value} setValue={setValue} placeholder={"по номеру"} />

      <main>
        {data.map((obj) => {
          return <QuestionThermo obj={obj} key={obj.id} />;
        })}
      </main> */}
      <main>
        <div className="question-container">
          <h1>Билет 1</h1>
          <h2 className="question">1. Уравнения состояния идеального газа. </h2>
          <img
            className="answer-img"
            src="https://avatars.mds.yandex.net/get-images-cbir/4055527/8tAY5UivIU6Y-4_3OUX1Ag6922/ocr"
            alt=""
          />
          <h2 className="question">1. Общие сведения и классификация ДВС </h2>
          <p className="answer">
            <span>Двигатель внутреннего сгорания (ДВС) - </span> тепловая
            машина, преобразующая химическую энергию топлива в механическую
            работу. В поршневом ДВС процесс сгорания топлива проходит в
            замкнутом объёме (цилиндре), где расширение продуктов сгорания
            (газов) вызывает поступательное движение поршня, которое
            преобразуется во вращение коленчатого вала с помощью
            кривошипно-шатунного механизма.
          </p>
          <h2>Классификация ДВС</h2>
          <ol>
            <li>
              По топливу
              <ul>
                <li>Бензин, дизель, керосин</li>
                <li>Газ</li>
              </ul>
            </li>
            <li>
              Тактовый рабочий цикл.
              <ul>
                <li>Двухтактные ДВС</li>
                <li>Четырехтактные ДВС</li>
              </ul>
            </li>
            <li>
              По типу смесеобразования
              <ul>
                <li>
                  внешнее смесеобразование (карбюраторные или газовые
                  двигатели). Нужно обратить внимание на то, что карбюраторные
                  двигатели потребляют легкое жидкое топлив (бензин) и в камеру
                  сгорания поступает уже готовая смесь паров топлива с воздухом;
                </li>
                <li>
                  • внутреннее смесеобразование (бензиновые и дизельные с
                  непосредственным впрыском топлива) дизели работают на жидком
                  тяжелом топливе (дизельное). Оно поступает через форсунки в
                  камеру сгорания в тот момент, когда воздух максимально сжат
                  поршнем, находится в верхней мертвой точке (ВМТ), и
                  соответственно перегрет до высокой температуры, достаточной
                  для поджига смеси;
                </li>
              </ul>
            </li>
            <li>
              По способу воспламенения смеси.
              <ul>
                <li>
                  с непосредственным поджиганием смеси в цилиндре в нужный
                  момент, будь то карбюраторные или двигатели с впрыском
                  бензина.;
                </li>
                <li>с воспламенением от сжатия в цилиндре (дизель).</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="question-container">
          <h1>Билет 2</h1>
          <h2 className="question">
            Основные параметры газа. Закон Гей – Люссака.
          </h2>
          <p className="answer">
            К основным параметрам состояния газов относятся:
            <span> давление, абсолютная температура и удельный объем.</span>
          </p>
          <p className="answer">
            <span>Закон Гей Люссака - </span> при постоянном давлении объём
            постоянной массы газа пропорционален абсолютной температуре.
            V/T=const
          </p>
          <h2 className="question">
            Циклы поршневых двигателей внутреннего сгорания (цикл Отто).
          </h2>

          <img
            className="answer-img"
            src="https://dic.academic.ru/pictures/wiki/files/84/T_cycle_otto.png"
            alt="ottoCycle"
          />

          <p className="answer">
            <p>
              <span>1—2</span> адиабатное сжатие рабочего тела;
            </p>
            <p>
              <span>2—3</span> изохорный подвод теплоты к рабочему телу;
            </p>
            <p>
              {" "}
              <span>3—4</span> адиабатное расширение рабочего тела;
            </p>
            <p>
              <span>4—1</span> изохорное охлаждение рабочего тела.
            </p>
          </p>
        </div>

        <div className="question-container">
          <h1>Билет 3</h1>
          <h2 className="question">Теплоемкость и способы её определения.</h2>
          <p className="answer">
            <span>Теплоемкость – </span> количество теплоты, поглощаемое телом
            при нагревании на 1 градус.
          </p>
          <h2 className="question">
            Общие свойства водяных паров, p-V диаграмма.
          </h2>
          <p className="answer"></p>
          <img
            src="https://sun9-86.userapi.com/impg/LPr16jbqKKtSZ2O1PpkDjspByB7YwLfGI3HRvg/EsfjNj6rjv8.jpg?size=974x730&quality=96&sign=fd34eddc4f78619e952bb95a38c8932b&type=album"
            alt=""
            className="answer-img"
          />
          <img
            src="https://cf2.ppt-online.org/files2/slide/r/R58SlmQbpjvzaT4i9wJeu0ZnYNOM1oUh6C3FxyVfq/slide-9.jpg"
            alt=""
            className="answer-img"
          />
        </div>

        <div className="question-container">
          <h1>Билет 4</h1>
          <h2 className="question">Первый закон термодинамики.</h2>
          <p className="answer">
            Количество теплоты, сообщаемое термодинамической системе, равно
            сумме изменения ее внутренней энергии ΔU и работы A, совершаемой
            системой против внешних сил.
          </p>
          <span>Δ U = Q − A</span>
          <h2 className="question">
            Истечение и дросселирование водяных паров.
          </h2>
          <p className="answer">
            Истечением называется процесс прохождения пара через особую насадку
            — сопло, при котором увеличивается скорость движения пара, а
            следовательно, и его кинетическая энергия.
          </p>
          <p className="answer">
            <span>Дросселирование -</span>
            понижение давления газа или пара при протекании через сужение
            проходного канала трубопровода - дроссель, либо через пористую
            перегородку.
          </p>
          <p className="answer">
            <span>Истечение — </span>
            это процесс непрерывного движения газа или пара по каналу
            изменяющегося сечения. При истечении газа или пара меняются основные
            параметры его состояния.
          </p>
          <p className="answer">
            <span>Соплом </span>
            называется канал с таким профилем, при движении по которому пара или
            газа увеличивается скорость потока и уменьшается давление.
          </p>
        </div>

        <div className="question-container">
          <h1>Билет 5</h1>
          <h2 className="question">
            Состав воздуха, абсолютная и относительная влажность воздуха.
          </h2>
          <p className="answer">
            В состав воздуха входят азот, кислород, углекислый газ и некоторые
            другие газы.
          </p>
          <p className="answer">
            <span>Абсолютной влажностью влажного воздуха</span> называется масса
            влаги, содержащаяся в 1 м3 влажного воздуха.
          </p>
          <p className="answer">
            <span>Относительной влажностью влажного воздуха</span> называют
            отношение действительной абсолютной влажности ненасыщенного воздуха
            к максимально возможной абсолютной влажности воздуха при той же
            температуре.
          </p>
          <h2 className="question">
            Циклы поршневых двигателей внутреннего сгорания (цикл Дизеля).
          </h2>
          <h1>Цикл Дизеля</h1>
          <img
            className="answer-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/T_cycle_diesel.png/1024px-T_cycle_diesel.png"
            alt="dieselCycle"
          />
          <p className="answer">
            <p>
              <span>1—2</span> адиабатное сжатие рабочего тела;
            </p>
            <p>
              <span>2—3</span> изобарный подвод теплоты к рабочему телу;
            </p>
            <p>
              <span>3-4</span> адиабатное расширение рабочего тела;
            </p>
            <p>
              <span>4—1</span> изохорное охлаждение рабочего тела.
            </p>
          </p>
        </div>

        <div className="question-container">
          <h1>Билет 6</h1>
          <h2 className="question">Понятие о энтальпии и энтропии. </h2>
          <p className="answer">
            <span>Энтропия — </span> термодинамическая функция, характеризующая
            меру необратимой диссипации энергии в ней.
          </p>
          <p className="answer">
            <span>Энтальпия — </span>это свойство вещества, указывающее
            количество энергии, которую можно преобразовать в теплоту. Это
            термодинамическое свойство вещества, которое указывает уровень
            энергии, сохраненной в его молекулярной структуре.
          </p>
          <h2 className="question">Характеристики жидких топлив для ДВС. </h2>
          <p className="answer"></p>
        </div>

        {/* fasdfasdfasfasdfasd



















         */}

        <div className="question-container">
          <h1>Билет 2</h1>
          <h2 className="question"></h2>
          <p className="answer"></p>
          <h2 className="question"></h2>
          <p className="answer"></p>
        </div>
        <div className="question-container">
          <h1>Билет 2</h1>
          <h2 className="question"></h2>
          <p className="answer"></p>
          <h2 className="question"></h2>
          <p className="answer"></p>
        </div>
      </main>
    </div>
  );
};

export default About;
