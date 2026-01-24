export default function TodaySher() {
  return (
    <section className="today-sher">
      <p className="today-title">TODAY’S SHER</p>

      {/* Roman / English Sher ONLY */}
      <div className="hing">
        <p>
          Ye jo hum mein tum mein rabt tha  
          <br />
          Wo jo dil mein chhupa hua tha
        </p>
      </div>

      {/* Poet name */}
      <div className="poet-name">
        <a href="#">Faiz Ahmed Faiz</a>
      </div>

      {/* Actions */}
      <div className="fav-links">
        <div className="fav-items">
          <div className="fav-item">
            <i className="ri-heart-line"></i>
            <span>Like</span>
          </div>
          <div className="fav-item">
            <i className="ri-share-line"></i>
            <span>Share</span>
          </div>
          <div className="fav-item">
            <i className="ri-bookmark-line"></i>
            <span>Save</span>
          </div>
        </div>
      </div>
    </section>
  );
}
