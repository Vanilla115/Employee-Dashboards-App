import React from 'react';
import { Link } from 'react-router-dom';
import './mainStyle.css'; // путь к твоему CSS-файлу, может потребоваться корректировка

const LandingPage = () => {
  return (
    <>
      {/* Навигационное меню (блок 1) */}
      <nav className="navbar">
        <div className="container nav-menu">
          <div className="logo">EmployeeApp</div>
          <ul className="nav-links">
            <li><a href="#home">Главная</a></li>
            <li><a href="#features">Возможности</a></li>
            <li><a href="#stats">Статистика</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </div>
      </nav>

      {/* Секция с баннером (блок 2) */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <h1>Учёт сотрудников компании N</h1>
          <p>Простой и удобный инструмент для управления персоналом</p>
          {/* Кнопка перехода на рабочую форму через React Router */}
          <Link to="/app" className="btn-primary">Приступить к работе →</Link>
        </div>
      </section>

      {/* Секция с контентом 1 (блок 3) */}
      <section className="container" id="features">
        <h2 className="section-title">Возможности приложения</h2>
        <div className="cards">
          <article className="card">
            <h3>Учёт сотрудников</h3>
            <p>Добавляйте, редактируйте и удаляйте данные о сотрудниках в удобной таблице.</p>
          </article>
          <article className="card">
            <h3>Фильтрация</h3>
            <p>Быстрый поиск по имени, фильтр по зарплате и статусу "на повышение".</p>
          </article>
          <article className="card">
            <h3>Статистика</h3>
            <p>Общее число сотрудников и количество претендентов на повышение всегда перед глазами.</p>
          </article>
        </div>
      </section>

      {/* Секция с контентом 2 (блок 4) */}
      <section className="container" id="stats">
        <h2 className="section-title">Нам доверяют</h2>
        <div className="stats">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">компаний</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10k+</div>
            <div className="stat-label">сотрудников</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">довольных клиентов</div>
          </div>
        </div>
      </section>

      {/* Секция с формой (блок 5) */}
      <section className="container" id="contact">
        <div className="form-section">
          <h2 className="section-title">Остались вопросы?</h2>
          <form className="contact-form" action="#" method="post">
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input type="text" id="name" name="name" placeholder="Иван Иванов" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="ivan@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <input type="text" id="message" name="message" placeholder="Ваш вопрос..." />
            </div>
            <button type="submit" className="btn-submit">Отправить</button>
          </form>
        </div>
      </section>

      {/* Подвал (блок 6) */}
      <footer>
        <div className="container">
          <div className="footer-links">
            <a href="#">О проекте</a>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Контакты</a>
          </div>
          <p>© 2025 EmployeeApp. Все права защищены.</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>Курсовая работа по дисциплине "Веб-разработка"</p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;