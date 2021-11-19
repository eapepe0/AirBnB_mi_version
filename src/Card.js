export default function Card() {
  return (
    <div className="card--container">
      <div className="card">
        {" "}
        {/* TARJETA 1 */}
        <div className="foto--container">
          <img
            className="card--foto"
            src="./images/katie-zaferes.png"
            alt="Cliente Katie Zaferes"
            srcset=""
          />
          <button className="status"> VENDIDO</button>
        </div>
        <div className="card--info">
          <div className="rating">
            <img
              className="star--img"
              src="./images/star.png"
              alt="star-ratings"
              srcset=""
            />
            <span className="rating--text">&nbsp;5.0 •</span>
            <span className="rating--cantidad"> &nbsp;(6) • USA</span>
          </div>
          <p className="card--text">Life Lessons with Katie Zaferes</p>
          <p className="cost">
            <strong>From $135</strong> / person
          </p>
        </div>
      </div>

      {/* ####################################### */}

      <div className="card">
        {" "}
        {/* TARJETA 2 */}
        <div className="foto--container">
          <img
            className="card--foto"
            src="https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=176&q=80"
            alt="Cliente Katie Zaferes"
            srcset=""
          />
          <button className="status"> ONLINE</button>
        </div>
        <div className="card--info">
          <div className="rating">
            <img
              className="star--img"
              src="./images/star.png"
              alt="star-ratings"
              srcset=""
            />
            <div className="rating--text">&nbsp;5.0</div>{" "}
            <div className="rating--cantidad"> &nbsp; (30) • USA</div>
          </div>
          <p className="card--text">Learn wedding photography</p>
          <p className="cost">
            <strong>From $125</strong> / person
          </p>
        </div>
      </div>
      {/* ####################################### */}
      <div className="card">
        {/* TARJETA 3 */}
        <div className="foto--container">
          <img
            className="card--foto"
            src="https://images.unsplash.com/photo-1511202090067-ebdd4642552b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=175&q=80"
            alt="Cliente Katie Zaferes"
            srcset=""
          />
          <button className="status"> VENDIDO</button>
        </div>
        <div className="card--info">
          <div className="rating">
            <img
              className="star--img"
              src="./images/star.png"
              alt="star-ratings"
              srcset=""
            />
            <div className="rating--text">&nbsp;4.8</div>
            <div className="rating--cantidad"> &nbsp;(6) • USA</div>
          </div>
          <p className="card--text">Group Mountain Biking</p>
          <p className="cost">
            <strong>From $50</strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}
