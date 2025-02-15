import './style.css'
import { Logotype, Heart, Cart, User, Search } from "../../icons/iconsHeader"
import constants from '../../constants/constants'

export default function header(){
    return (
      <>
        <header>
          <div className="container_header_content">
            <div className="Logo">
              <picture>
                <Logotype />
              </picture>
            </div>

            <div className="input_search_element_container">
              <div className="logo_search">
                <Search />
              </div>
              <div className="input_container_element">
                <input type="text" placeholder="Search" />
              </div>
            </div>

            <nav className="navbar_text ">
              <ul>
                <li>
                  <a href="#">{constants.NAV_TEXT_HEADER}</a>
                </li>
                <li>
                  <a href="#">{constants.NAV_TEXT_HEADER_2}</a>
                </li>
                <li>
                  <a href="#">{constants.NAV_TEXT_HEADER_3}</a>
                </li>
                <li>
                  <a href="#">{constants.NAV_TEXT_HEADER_4}</a>
                </li>
              </ul>
            </nav>

            <nav className="navbar">
              <ul>
                <li>
                  <Heart />
                </li>
                <li>
                  <Cart />
                </li>
                <li>
                  <User />
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
}

