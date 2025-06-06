export default function OrderPolicy() {
  return (
    <section className="bg-[#fdfbf6] min-h-screen py-20 px-6 md:px-20 text-[#5b3926] font-serif">
      <h2 className="text-6xl font-bold text-center mb-10 py-10">
        Order Policy
      </h2>
      <div className="space-y-6 text-[26px] text-[#7e6e61] px-[200px] justify-center">
        <p>
          Thank you for choosing Ruchi Art House. To ensure a smooth and
          efficient experience, we kindly request that all customers adhere to
          the following order policy:
        </p>

        <ol className="space-y-4 list-decimal list-inside">
          <li>
            Order Timeline
            <br />
            Orders must be placed at least 15 days prior to the desired delivery
            date. This allows adequate time for customization and quality
            assurance.
          </li>

          <li>
            Prepaid Orders Only
            <br />
            We operate on a 100% prepaid basis. Orders will be confirmed only
            after full payment is received. No cash-on-delivery (COD) or partial
            payment options are available.
          </li>

          <li>
            Price Variability
            <br />
            All prices are subject to change depending on the complexity of the
            design, size, detailing, material used, and current market rates. A
            final quotation will be provided before payment.
          </li>

          <li>
            Order Capacity
            <br />
            In case of high demand or bulk orders, we may temporarily pause
            taking new orders to maintain our quality standards. We appreciate
            your understanding during such situations.
          </li>

          <li>
            First-Come, First-Served
            <br />
            Orders will be processed strictly on a first-come, first-served
            basis. Early bookings are encouraged to secure your slot.
          </li>

          <li>
            <>Design Edits & Final Approval</>
            <br />
            We offer customized artwork and designs. Once a design is finalized,
            no major changes will be accepted. Minor customization might be
            accommodated based on feasibility.
          </li>

          <li>
            <>Cancellations & Refunds</>
            <br />
            As each creation is made-to-order, cancellations are not eligible
            for refunds once the process has begun. Please confirm your choices
            before placing an order.
          </li>

          <li>
            <>Communication</>
            <br />
            All order-related communication must be done through our official
            contact channels (e.g., email or WhatsApp). This ensures proper
            tracking and accountability.
          </li>
        </ol>
      </div>
    </section>
  );
}
