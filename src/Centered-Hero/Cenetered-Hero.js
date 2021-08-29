import React from "react";


class CenteredHero extends React.Component {
  render() {
    console.log("props: " + JSON.stringify(this.props))
    return (
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={this.props.options.content.image.source}
          alt=""
          width={this.props.options.content.image.width}
          height={this.props.options.content.image.height}
        />
        <h1 className="display-5 fw-bold">{this.props.options.content.title}</h1>      
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{this.props.options.content.paragraph}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {this.props.options.buttons.map((button) => (
              <a
                href={button.href}
                className={"btn btn-lg px-4 gap-3 " + "btn-" + (button.bootstrap.outline? "" : "outline-") + button.bootstrap.buttonStyle  }
                role="button"
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CenteredHero;
