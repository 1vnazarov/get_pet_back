window.onload = function() {
    const header = document.getElementsByTagName("header")[0];
    header.innerHTML = `
<nav class="navbar navbar-expand-sm bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><img src="../images/logo.png" alt="logo" class="w-25 rounded-3"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample03">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="../index.html" id="gotoMain">Главная</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">Личный кабинет</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="../html/profile.html">Личный кабинет</a></li>
                                <li><a class="dropdown-item" href="../html/auth.html">Войти</a></li>
                                <li><a class="dropdown-item" href="../html/register.html">Регистрация</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">Объявления</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="../html/add.html">Добавить объявление</a></li>
                                <li><a class="dropdown-item" href="../html/search.html">Поиск по объявлению</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <datalist id="pets">
                            <option value="Кошка"></option>
                            <option value="Собака"></option>
                            <option value="Корова"></option>
                            <option value="Крокодил"></option>
                            <option value="Сова"></option>
                        </datalist>
                        <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"
                            list="pets">
                        <button class="btn btn-outline-light" type="submit">Поиск</button>
                    </form>
                </div>
            </div>
        </nav>`;
    const page = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    if (page == "index.html") {
        document.getElementById("gotoMain").classList.add("active");
    }
    document.body.innerHTML += `<footer class="border-bottom bg-primary mt-3">
    <p class="text-white p-3">GET PET BACK © Copyright, 2022</p>
    <p class="text-white p-3">Все права защищены</p>
  </footer>`;
}