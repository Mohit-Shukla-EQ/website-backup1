import React from "react";

class Dropdown extends React.Component {
  render() {
    return (
      <div class="dropdown">
        <a
          class="nav-link dropdown-toggle  dropdown-toggle"
          href="" 
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {this.props.options.label}
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {this.props.options.dropdownItems.map((item) => (
            <li>
              <a class="dropdown-item" href="#">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
