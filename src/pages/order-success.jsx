// /pages/order-success.jsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const OrderSuccess = () => {
  const router = useRouter();
  const { tran_id } = router.query;

  useEffect(() => {
    if (tran_id) {
      // fetch transaction/order details if needed
    }
  }, [tran_id]);

  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold">✅ Payment Successful!</h1>
      <p>Transaction ID: {tran_id}</p>
    </div>
  );
};

export default OrderSuccess;
