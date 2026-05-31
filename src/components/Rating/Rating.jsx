import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rating.css';

// Импорты фоновых схем и логотипа
import leftSchematic from '../../ComponentL.png';
import rightSchematic from '../../ComponentR.png';
import logo from '../../logo.png';

// Импорты иконок
import homeIcon from '../../home.png';  
import cabinetIcon from '../../lk.png'; 
import personalIcon from '../../lr.png'; 
import teamIcon from '../../kr.png';  
import mentorIcon from '../../nr.png'; 

function Rating() {
  const navigate = useNavigate();
  const [selectedSemester, setSelectedSemester] = useState('1');

  // Определение текущей даты
  const currentDate = new Date();
  const months = [
    'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
    'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
  ];
  const currentMonthName = months[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  return (
    <div className="rating-page-wrapper">
      <img src={leftSchematic} alt="" className="schematic-img-left" />
      <img src={rightSchematic} alt="" className="schematic-img-right" />

      <div className="rating-container">
        {/* ХЕДЕР */}
        <header className="rating-header">
          <div className="logo-wrapper">
            <img 
              src={logo} 
              alt="Лидерборд" 
              className="logo-img" 
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
          </div>

          <div className="header-navigation">
            <button className="nav-btn active">
              <img src={homeIcon} alt="" className="nav-icon-img" />
              Главная
            </button>
            <button className="nav-btn outline">
              <img src={cabinetIcon} alt="" className="nav-icon-img" />
              Личный кабинет
            </button>
          </div>
        </header>

        {/* НАВИГАЦИОННЫЕ ТАБЫ */}
        <section className="tabs-wrapper">
          <div className="tabs-container">
            
            <div className="tab-card active">
              <div className="tab-icon-container">
                <img src={personalIcon} alt="" className="tab-icon-img" />
              </div>
              <div className="tab-text-block">
                <div className="tab-title">Личный рейтинг</div>
                <div className="tab-subtitle">Ваши индивидуальные достижения</div>
              </div>
            </div>            <div className="tab-card inactive">
              <div className="tab-icon-container">
                <img src={teamIcon} alt="" className="tab-icon-img" />
              </div>
              <div className="tab-text-block">
                <div className="tab-title">Командный рейтинг</div>
                <div className="tab-subtitle">Рейтинг команд</div>
              </div>
            </div>
            
            <div className="tab-card inactive">
              <div className="tab-icon-container">
                <img src={mentorIcon} alt="" className="tab-icon-img" />
              </div>
              <div className="tab-text-block">
                <div className="tab-title">Наставнический рейтинг</div>
                <div className="tab-subtitle">Рейтинг наставников</div>
              </div>
            </div>

          </div>
        </section>

        {/* ПЕРИОДЫ */}
        <section className="period-selector">
          <button className="period-btn active">
            Месяц &lt; {currentMonthName} {currentYear} &gt;
          </button>
          
          <div className="semester-select-wrapper">
            <select 
              value={selectedSemester} 
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="semester-select-btn"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>Семестр {num}</option>
              ))}
            </select>
          </div>

          <button className="period-btn flat">Год</button>
        </section>

        {/* СТАТИСТИКА */}
        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">Ваша позиция</span>
            <div className="stat-value highlight"></div>
          </div>
          <div className="stat-card">
            <span className="stat-label">Ваше количество часов</span>
            <div className="stat-value highlight-secondary"></div>
            <span className="stat-sublabel">за текущий период</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Ваш средний балл</span>
            <div className="stat-value highlight-secondary"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Rating;