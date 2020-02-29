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
       
     
        ${entry.getIn(["data", "events"], []).map(evt => html`
           <div class="col-md-6 mb-5 mb-lg-0 col-lg-4 ">
      
            <div class="blog_entry">
         
              <!-- <img src="${getAsset(evt.get("image1"))}" alt="Image" class="img-fluid"> -->
              <div class="p-4 bg-white">
                <h3 class="date">${evt.get("date")}</h3>
               <h5> ${evt.get("location")}</h5>
                <h5> ${evt.get("title")}</h5>
            

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