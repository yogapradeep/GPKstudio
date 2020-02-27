import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const works = createClass({

  render() {
    const mystyle = {
      color: "green",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    const entry = this.props.entry;
    const getAsset = this.props.getAsset;

    return html`<section class="site-section bg-light" id="blog-section">
      <div class="container">
        <div class="row">

          <div class="col-12 mb-5 ">
            <h2   class="section-title text-center mb-5 ">Upcoming Events</h2>
          </div>
       
     
        ${this.props.widgetsFor("events").map(evt => html`
           <div class="col-md-6 mb-5 mb-lg-0 col-lg-4 ">
      
            <div class="blog_entry">
         
              <img src="${evt.getAsset(entry.getIn(['data', 'image1']))}" alt="Image" class="img-fluid">
              <div class="p-4 bg-white">
                <h3 class="date">${evt.getIn(['data', 'date'])}</h3>
               <h4> ${evt.getIn(['data', 'location'])}</h4>
                <h4> ${evt.getIn(['data', 'title'])}</h4>
            

              </div>
              </div>
          </div>
        `)} 

        </div>
      </div>
      <h3 className="test">${entry.getIn(["data", "test"], null)}</h3>
    </section>
     
      
     `;
  }
});
export default works;