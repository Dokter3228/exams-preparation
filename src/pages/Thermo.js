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
                  внутреннее смесеобразование (бензиновые и дизельные с
                  непосредственным впрыском топлива)
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default About;
