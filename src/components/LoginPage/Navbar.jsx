import React from "react";
import "./LoginPage.css";

const Navbar = (props) => {
    return (
        <nav class="navbar">
            <div class="navbar-container">
                <ul class="navbar-nav">
                    <li class="nav-item"><a className="nav-link" href="#"><i class="fab fa-twitter icon-loginPage"></i>Home</a></li>
                    <li class="nav-item"><a className="nav-link" href="#">About</a></li>
                </ul>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="language">Language: </span><span className="current-language">English</span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div class="triangle"></div>
                        <div className="dropdown-container">
                            <div class="language-container">
                                <div className="language-section">
                                    <a class="dropdown-item" href="#">Bahasa Indonesia</a>
                                    <a class="dropdown-item" href="#">Català</a>
                                    <a class="dropdown-item" href="#">Dansk</a>
                                    <a class="dropdown-item" href="#">English UK</a>
                                    <a class="dropdown-item" href="#">Filipino</a>
                                    <a class="dropdown-item" href="#">Hrvatski</a>
                                    <a class="dropdown-item" href="#">Magyar</a>
                                    <a class="dropdown-item" href="#">Norsk</a>
                                    <a class="dropdown-item" href="#">Português</a>
                                    <a class="dropdown-item" href="#">Slovenčina</a>
                                    <a class="dropdown-item" href="#">Svenska</a>
                                    <a class="dropdown-item" href="#">Türkçe</a>
                                    <a class="dropdown-item" href="#">Български език</a>
                                    <a class="dropdown-item" href="#">Српски</a>
                                    <a class="dropdown-item" href="#">עִבְרִית</a>
                                    <a class="dropdown-item" href="#">فارسی</a>
                                    <a class="dropdown-item" href="#">हिन्दी</a>
                                    <a class="dropdown-item" href="#">ગુજરાતી</a>
                                    <a class="dropdown-item" href="#">ಕನ್ನಡ</a>
                                    <a class="dropdown-item" href="#">한국어</a>
                                    <a class="dropdown-item" href="#">简体中文</a>
                                </div>
                                <div className="language-section">
                                    <a class="dropdown-item" href="#">Bahasa Melayu</a>
                                    <a class="dropdown-item" href="#">Čeština</a>
                                    <a class="dropdown-item" href="#">Deutsch</a>
                                    <a class="dropdown-item" href="#">Español</a>
                                    <a class="dropdown-item" href="#">Français</a>
                                    <a class="dropdown-item" href="#">Italiano</a>
                                    <a class="dropdown-item" href="#">Nederlands</a>
                                    <a class="dropdown-item" href="#">Polski</a>
                                    <a class="dropdown-item" href="#">Română</a>
                                    <a class="dropdown-item" href="#">Suomi</a>
                                    <a class="dropdown-item" href="#">Tiếng Việt</a>
                                    <a class="dropdown-item" href="#">Ελληνικά</a>
                                    <a class="dropdown-item" href="#">Русский</a>
                                    <a class="dropdown-item" href="#">Українська мова</a>
                                    <a class="dropdown-item" href="#">العربية</a>
                                    <a class="dropdown-item" href="#">मराठी</a>
                                    <a class="dropdown-item" href="#">বাংলা</a>
                                    <a class="dropdown-item" href="#">தமிழ்</a>
                                    <a class="dropdown-item" href="#">ภาษาไทย</a>
                                    <a class="dropdown-item" href="#">日本語</a>
                                    <a class="dropdown-item" href="#">繁體中文</a>
                                </div>
                            </div>
                        </div>
                    </div>
               </li>
            </div>
        </nav>
    )
}

export default Navbar;