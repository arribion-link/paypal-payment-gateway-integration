**PayPal supports a wide range of payment methods and tools, each designed for different use cases such as personal transfers, business transactions, subscriptions, and online checkout.**

---

## 🔑 Core PayPal Payment Methods

- **PayPal Balance** – Use funds stored in your PayPal account directly for purchases or transfers.  
- **Bank Account** – Link your bank account to PayPal for direct payments or withdrawals.  
- **Debit/Credit Cards** – Pay using linked Visa, Mastercard, or other supported cards.  
- **PayPal Credit** – A line of credit offered by PayPal for eligible users, allowing deferred payments.  
- **Rewards Balance** – Some accounts can use accumulated rewards points as payment.  
- **E-checks** – Electronic checks where PayPal pays the recipient before receiving funds from your bank.  [Paypal](https://www.paypal.com/us/digital-wallet/ways-to-pay/about-payment-methods)  

---

## 🛒 Business & Merchant Payment Options

- **PayPal Checkout** – A seamless online checkout option for websites, allowing customers to pay with PayPal, cards, or other linked methods.  
- **PayPal Buttons** – Customizable “Buy Now,” “Donate,” or “Subscribe” buttons that merchants can embed on websites for quick transactions.  [Paypal](https://www.paypal.com/us/brc/payments/payment-methods)  
- **PayPal Invoicing** – Businesses can send professional invoices directly to customers, who can pay via PayPal.  [luxwisp.com](https://www.luxwisp.com/types-of-paypal-payments-explained/)  
- **Payment Links** – Shareable links that let customers pay without needing a website.  [Paypal](https://www.paypal.com/us/brc/payments/payment-methods)  
- **Point of Sale (POS)** – PayPal POS systems for in-person transactions, including Tap to Pay and QR code payments.  [Paypal](https://www.paypal.com/us/brc/payments/payment-methods)  

---

## 🔄 Subscription & Automatic Payments

- **Automatic Payments (Recurring Billing)** – Customers authorize merchants to charge their PayPal account regularly (e.g., monthly subscriptions for streaming services).  
- **Backup Payment Method** – If the primary method fails, PayPal automatically uses a backup (balance, bank, card, or e-check).  [Paypal](https://www.paypal.com/us/digital-wallet/ways-to-pay/about-payment-methods)  

---

## 📱 Mobile & International Payments

- **Mobile Payments** – Pay directly via the PayPal app, including Tap to Pay and QR code scanning.  [Paypal](https://www.paypal.com/us/brc/payments/payment-methods)  
- **Cross-Border Payments** – PayPal supports over 100 currencies, making it ideal for international trade and remittances.  [luxwisp.com](https://www.luxwisp.com/types-of-paypal-payments-explained/)  

---

## 📊 Comparison Table

| **Method**              | **Use Case**                          | **Key Feature**                          |
|--------------------------|---------------------------------------|------------------------------------------|
| PayPal Balance           | Everyday purchases, transfers         | Instant use of stored funds              |
| Bank Account             | Larger payments, withdrawals          | Direct debit from bank                   |
| Debit/Credit Card        | Online shopping, backup payments      | Widely accepted globally                 |
| PayPal Credit            | Financing purchases                   | Deferred payments option                 |
| PayPal Buttons           | Website integration                   | Quick “Buy Now/Donate/Subscribe” actions |
| PayPal Invoicing         | Business billing                      | Professional invoices with PayPal link   |
| Automatic Payments       | Subscriptions, memberships            | Recurring billing setup                  |
| Mobile Payments          | On-the-go transactions                | QR code & Tap to Pay                     |
| Cross-Border Payments    | International trade/remittances       | Supports 100+ currencies                 |

---

## For developers integrating PayPal into applications

**PayPal provides a wide set of APIs, SDKs, and payment methods that cover digital wallets, cards, bank redirects, and subscription billing. The most common developer-facing tools are PayPal Checkout, Subscriptions, Invoicing, and Payouts.**

---

## 🔑 Core Developer Integration Options

- **PayPal Checkout (REST API + JavaScript SDK)**  
  - Standard integration for web and mobile apps.  
  - Supports PayPal wallet, debit/credit cards, and alternative payment methods.  
  - Offers features like Smart Payment Buttons and contextual funding sources.  

- **Subscriptions API**  
  - Enables recurring billing for SaaS, memberships, or streaming services.  
  - Developers can create, manage, and cancel subscription plans programmatically.  

- **Invoicing API**  
  - Automates invoice creation and sending.  
  - Useful for freelancers and businesses needing structured billing.  

- **Payouts API**  
  - Send mass payments to contractors, freelancers, or sellers.  
  - Supports batch processing and global disbursements.  

---

## 🌍 Supported Payment Methods via PayPal Checkout

PayPal Checkout allows developers to integrate multiple funding sources depending on region:  

- **PayPal Digital Wallet** – Global support.  
- **Pay Later / PayPal Credit** – Deferred or revolving credit (US, UK, EU).  
- **Venmo** – US-only digital wallet.  
- **Cards** – Visa, Mastercard, American Express, Discover.  
- **Alternative Payment Methods (APMs):**  
  - **Apple Pay / Google Pay** – US support.  
  - **Bancontact** – Belgium.  
  - **BLIK** – Poland.  
  - **EPS** – Austria.  
  - **iDEAL** – Netherlands.  
  - **MyBank** – Italy.  
  - **Przelewy24 (P24)** – Poland.  
  - **Trustly** – Multiple EU countries.  
  - **Pay Upon Invoice** – Germany.  [PayPal Developer](https://developer.paypal.com/docs/checkout/payment-methods/)  

---

## 📊 Developer Tools & SDKs

- **REST APIs** – Modern integration for payments, subscriptions, invoicing, payouts.  
- **JavaScript SDK** – For embedding PayPal buttons and handling client-side checkout.  
- **In-App SDKs (iOS/Android)** – Native mobile integration.  
- **Braintree SDKs** – Advanced card and wallet processing with GraphQL support.  
- **Webhooks & IPN (Instant Payment Notification)** – Event-driven updates for transactions.  
- **Identity API** – Allows login with PayPal credentials.  [PayPal](https://www.paypalobjects.com/ppdevdocs/)  

---

## 📊 Comparison Table

| **Integration**     | **Use Case**                     | **Key Features** |
|----------------------|----------------------------------|------------------|
| PayPal Checkout      | Web/mobile payments              | Wallet, cards, APMs |
| Subscriptions API    | Recurring billing                | Plan creation, cancellation |
| Invoicing API        | Structured billing               | Automated invoices |
| Payouts API          | Mass disbursements               | Batch payments |
| JavaScript SDK       | Client-side checkout             | Smart buttons |
| In-App SDKs          | Mobile apps                      | Native iOS/Android |
| Braintree SDKs       | Advanced card/wallet integration | GraphQL, tokenization |

---
