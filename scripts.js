
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('transaction-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const product = document.getElementById('product').value;
            const invoiceDetails = document.getElementById('invoice-details');
            if (invoiceDetails) {
                invoiceDetails.innerHTML = `
                    <h2>Invoice</h2>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Product: ${product}</p>
                `;
                window.location.href = 'invoice.html';
            }
        });
    }
});
