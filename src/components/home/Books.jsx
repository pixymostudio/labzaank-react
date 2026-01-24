export default function BookCollection() {
  return (
    <section className="book-col">

      {/* TITLE */}
      <div className="book-col-title">
        <h2>Book Collection</h2>
      </div>

 

      {/* CARDS + ARROWS */}
      <div className="book-col-cards">

        {/* LEFT ARROW */}
        <div className="col-arrow book-arrow left">
          <i className="ri-arrow-left-s-line"></i>
        </div>

        {/* CARD 1 */}
        <div className="book-col-card">
          <div className="book-col-card-img">
            <img src="/images/book1.webp" alt="Book" />
          </div>
          <div className="book-col-card-content">
            <h4>Selected Ghazals</h4>
            <p>Faiz Ahmed Faiz</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="book-col-card">
          <div className="book-col-card-img">
            <img src="/images/book1.webp" alt="Book" />
          </div>
          <div className="book-col-card-content">
            <h4>Modern Urdu Poetry</h4>
            <p>Ahmad Faraz</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="book-col-card">
          <div className="book-col-card-img">
            <img src="/images/book1.webp" alt="Book" />
          </div>
          <div className="book-col-card-content">
            <h4>Classic Nazms</h4>
            <p>Jaun Elia</p>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <div className="col-arrow book-arrow right">
          <i className="ri-arrow-right-s-line"></i>
        </div>

      </div>

           {/* DESCRIPTION (HTML JAISE) */}
      <p>
        Our curated collection of classical and modern books, carefully selected
        to preserve literary heritage and inspire new readers.
      </p>

      {/* SEE ALL BUTTON (HTML JAISE) */}
      <a className="see-full-collection">
        See all book collection
      </a>

    </section>
  );
}
