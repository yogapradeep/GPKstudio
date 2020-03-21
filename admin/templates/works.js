import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const works = createClass({

  render() {

    const pimg = {

      height: 350,
    };

    const entry = this.props.entry;
    const getAsset = this.props.getAsset;
    let timg = getAsset(entry.getIn(["data", "t-image"]));

    return html`
    <section class="site-section block__62272" id="portfolio-section">
      <div class="mx-2">
        <div class="row mb-5">
          <div class="col-12 position-relative">
            <h2 class="section-title text-center mb-5">Our Photography</h2>
          </div>   
      ${entry.getIn(["data", "images"], []).map((img, i) => html`
          <div class="col-md-4 col-lg-4 item mb-4">  
            <span class="icon-search2"></span>
              <img class="img-fluid" src="${getAsset(img.get("image"))}"  />
         </div>
         `)}
        </div>
      </div>
    </section>
    <section class="site-section bg-light" id="blog-section">
      <div class="container">
        <div class="row mb-5">

          <div class="col-12 mb-5 ">
            <h2   class="section-title text-center mb-5 ">Upcoming Events</h2>
          </div>
       
     
        ${entry.getIn(["data", "events"], []).map((evt, i) => html`
           <div class="col-md-6  col-lg-4 mb-4  " >
      
            <div class="event_entry"  >
         
              <div class="p-4 bg-white entry-cont d-flex flex-column justify-content-center ">
                <div class="d-flex align-items-center entrytext-cont">
                  <p class="icon-calendar event-icon"></p>
                  <h3 class="date"> ${evt.get("date")}</h3>
                </div>
                <div class="d-flex align-items-center entrytext-cont">
                  <p class="icon-location2 event-icon"></p>
                  <h5> ${evt.get("location")}</h5>
                </div>
                <div class="d-flex align-items-center entrytext-cont">
                  <p class="icon-event_note event-icon"></p>
                  <h5> ${evt.get("title")}</h5>
                </div>
              </div>
              
            </div>
          </div>
        `)} 
        </div>
      </div>
    </section>
 

    
      
     `;
  }
});
export default works;