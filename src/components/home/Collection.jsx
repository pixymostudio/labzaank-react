export default function TodayCollection() {
  return (
    <section className="today-collection">
      {/* title */}
      <div className="col-title">
        <h2>Today’s Collection</h2>
      </div>

      {/* description */}
      <p>
        A curated selection of poetry and literature chosen for today.
      </p>

      {/* cards + arrows */}
      <div className="col-cards-col">
        <div className="col-arrow">
          <i className="ri-arrow-left-s-line"></i>
        </div>

        <div className="col-cards">
          <div className="col-card">
            <div className="col-card-img"></div>
            <div className="col-card-content">Romantic Poetry</div>
          </div>

          <div className="col-card">
            <div className="col-card-img"></div>
            <div className="col-card-content">Classical Ghazals</div>
          </div>

          <div className="col-card">
            <div className="col-card-img"></div>
            <div className="col-card-content">Modern Verse</div>
          </div>
        </div>

        <div className="col-arrow">
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>

      {/* view all */}
      <a className="see-full-collection">
        See full collection
      </a>
    </section>
  );
}
