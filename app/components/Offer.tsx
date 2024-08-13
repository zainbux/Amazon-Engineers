import React from 'react';

const Offer = () => {
  return (
    <div className='py-40 px-5 md:px-20 lg:px-36'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 text-white'>
        Timeline and Detailed Explanation for Amazon Agency Clients
      </h1>

      <div className='space-y-8'>
        <section>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>
            Amazon Seller Account Setup + Verification (1-2 days)
          </h2>
          <p className='text-base md:text-lg text-white'>
            <strong>What It Means:</strong>
          </p>
          <ul className='list-disc list-inside text-white'>
            <li>
              <strong>Creating the Account:</strong> We will create an Amazon Seller account for you, using the provided information.
            </li>
            <li>
              <strong>Verification:</strong> Amazon requires certain documents to verify your identity and business. This process includes submitting necessary documents such as ID proof, bank account details, and tax information.
            </li>
            <li>
              <strong>Outcome:</strong> Once verified, your seller account will be active, and you will be ready to list products.
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>
            Lead Searching + Getting Ungate Invoice (1-3 days)
          </h2>
          <p className='text-base md:text-lg text-white'>
            <strong>What It Means:</strong>
          </p>
          <ul className='list-disc list-inside text-white'>
            <li>
              <strong>Lead Searching:</strong> Our team will identify profitable products for your store. We use data-driven methods to find products with high demand and low competition.
            </li>
            <li>
              <strong>Getting Ungate Invoice:</strong> Certain categories and brands on Amazon require approval (ungating) to sell. We will purchase products from authorized wholesalers and obtain invoices to request ungating from Amazon.
            </li>
            <li>
              <strong>Outcome:</strong> Your store will have a list of profitable, high-demand products ready to be listed once ungating approval is received.
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>
            Ordering Products from Wholesaler (1-2 weeks)
          </h2>
          <p className='text-base md:text-lg text-white'>
            <strong>What It Means:</strong>
          </p>
          <ul className='list-disc list-inside text-white'>
            <li>
              <strong>Placing Orders:</strong> After selecting the products, we will place orders with reputable wholesalers. This step includes negotiating prices, confirming quantities, and arranging payments.
            </li>
            <li>
              <strong>Shipping and Handling:</strong> The wholesaler will then process the order, prepare the products, and ship them to our designated 3PL (Third-Party Logistics) partner.
            </li>
            <li>
              <strong>Outcome:</strong> The products will be on their way to the 3PL warehouse, ready for further processing.
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>
            Packing at 3PL + Sending to Amazon Warehouse (2-7 days)
          </h2>
          <p className='text-base md:text-lg text-white'>
            <strong>What It Means:</strong>
          </p>
          <ul className='list-disc list-inside text-white'>
            <li>
              <strong>Receiving at 3PL:</strong> Our 3PL partner receives the products, checks for accuracy and quality, and prepares them for Amazon’s requirements.
            </li>
            <li>
              <strong>Packing and Labeling:</strong> The 3PL will pack the products according to Amazon’s standards, generate labels, and prepare them for shipment.
            </li>
            <li>
              <strong>Sending to Amazon Warehouse:</strong> The prepared products are then shipped to Amazon’s fulfillment centers.
            </li>
            <li>
              <strong>Outcome:</strong> Your products are now ready to be stored and sold through Amazon’s platform.
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>
            Product Goes Live and Sells Out (TBD)
          </h2>
          <p className='text-base md:text-lg text-white'>
            <strong>What It Means:</strong>
          </p>
          <ul className='list-disc list-inside text-white'>
            <li>
              <strong>Listing Products:</strong> Once the products arrive at Amazon’s warehouse, we will list them on your Amazon store with optimized titles, descriptions, and keywords to attract buyers.
            </li>
            <li>
              <strong>Monitoring Sales:</strong> We continuously monitor the sales performance, adjust pricing, and manage inventory levels to ensure steady sales and stock replenishment.
            </li>
            <li>
              <strong>Outcome:</strong> The product is available for customers to purchase, and we aim to sell out the inventory quickly, ensuring a continuous cycle of restocking and selling.
            </li>
          </ul>
        </section>
      </div>

      <div className='mt-10'>
        <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
          Summary of the Process:
        </h2>
        <ul className='list-decimal list-inside text-white space-y-4'>
          <li>
            <strong>Amazon Seller Account Setup + Verification (1-2 days):</strong> Setting up your seller account and getting it verified by Amazon.
          </li>
          <li>
            <strong>Lead Searching + Getting Ungate Invoice (1-3 days):</strong> Identifying profitable products and obtaining necessary approvals to sell them.
          </li>
          <li>
            <strong>Ordering Products from Wholesaler (1-2 weeks):</strong> Ordering selected products from wholesalers and arranging for their shipment to our 3PL partner.
          </li>
          <li>
            <strong>Packing at 3PL + Sending to Amazon Warehouse (2-7 days):</strong> Receiving, packing, labeling, and shipping products to Amazon’s fulfillment centers.
          </li>
          <li>
            <strong>Product Goes Live and Sells Out (TBD):</strong> Listing products on Amazon, monitoring sales, and managing inventory to ensure continuous sales.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Offer;
