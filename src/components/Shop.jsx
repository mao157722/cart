


export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>เสื้อผ้าดีเยี่ยมที่คุณคู่ควร</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
