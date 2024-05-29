import { useContext, useRef } from 'react';

import CartModal from './CartModal.jsx';
import { CartContext } from '../store/shopping-cart-context.jsx';

export default function Header() {
  const { items } = useContext(CartContext);
  const modal = useRef();

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>ปิด</button>
        <button>ชำระเงิน</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        
        title="สินค้าที่คุณเลือกสรรค์"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>เสี่ยค้าเสื้อ</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>ตะกร้าสินค้า ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
