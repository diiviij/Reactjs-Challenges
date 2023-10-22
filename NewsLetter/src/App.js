import "./styles.css";

export default function App() {
  return (
    <>
      <section class="form__container">
        <div>
          <h1>Stay updated!</h1>
          <div class="content">
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
          </div>

          <form action="" onsubmit="handleSubmit(event)">
            <div>
              <label for="email">Email address</label>
              <span id="errorEmail">Valid email required</span>
            </div>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email@company.com"
            />
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div></div>
      </section>
    </>
  );
}
