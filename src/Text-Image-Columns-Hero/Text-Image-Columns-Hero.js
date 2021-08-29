import React from "react";

class TextImageColumnsHero extends React.Component {
  render() {
    return (
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={this.props.options.content.image.source}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={this.props.options.content.image.width}
              height={this.props.options.content.image.height}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
            {this.props.options.content.title}
            </h1>
            <p className="lead">{this.props.options.content.paragraph}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
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
      </div>
    );
  }
}

export default TextImageColumnsHero;
