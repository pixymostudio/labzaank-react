export default function TodayWord() {
  return (
    <section className="today-word">
      <div className="today-word-title">
        <h4>Today’s Word</h4>
      </div>

      <div className="today-word-content">
        {/* main word */}
        <div className="main-word">مَھِر</div>

        {/* roman / english */}
        <div className="urdu-eng-words">
          <div className="urdu-word">محبت</div>
          <div className="saprat">/</div>
          <div className="eng-word">Mohabbat</div>
        </div>

        {/* meaning */}
        <div className="word-meaning">
          <div className="meaning-title">Meaning</div>
          <div className="meaning-text">
            A deep feeling of affection, attachment, or love.
          </div>
        </div>

        {/* ===== EXACT HTML STYLE SHER ===== */}
        <div className="today-poetry">
          <p>
            محبت کے لیے دل کا ہونا شرط نہیں  
            <br />
            یہ وہ ہنر ہے جو ہر کسی کو نہیں آتا
          </p>
        </div>

        <div className="pname">
          <p>
            — <a href="#">Faiz Ahmed Faiz</a>
          </p>
        </div>
      </div>

      <div className="see-in-dic">
        <p>See in Dictionary</p>
      </div>
    </section>
  );
}
