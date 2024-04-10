describe('Automation Excercise Testing' , function() {
    
    let data, Selector;
    before('Fixture',() => {
        cy.fixture('selectors.json').then((selector) => {
        Selector =  selector;
    })
    });

    it('Test case 1 : verifying with incorrect Email', function(){
        cy.incorrectEmail(Selector)
    })

    it('Test case 2 : verifying with incorrect password', function(){
        cy.incorrectPW(Selector)
    })
    
    it('Test case 3 : verifying the invoice page', function(){
        cy.invoicePage(Selector)
    })

    it('Test case 4 : should correctly calculate invoice amounts', () => {
        cy.visit('https://nextjs14-simpleapp.vercel.app/login?callbackUrl=https%3A%2F%2Fnextjs14-simpleapp.vercel.app%2Flogin')
        cy.get("#email").type("user@nextmail.com")
        cy.get("#password").type("123456")
        cy.get("button[class='flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 w-full']").click()
        cy.get("h1[class='__className_712214 mb-4 text-xl md:text-2xl']").contains('Dashboard')
        cy.wait(5000)
        cy.InvoiceCalacuation(Selector)
    
    })
    
    it.only('Test case 5 : should correctly calculate invoice amounts', () => {
        cy.Login(Selector)
        cy.get("div[class='flex flex-row items-center justify-between py-4'] p[class='truncate text-sm font-semibold md:text-base']")
        .invoke('text').then((text) => {
            const invoiceName = text.trim();
            // Assert that the invoice name matches the expected value
            expect(invoiceName).to.equal('Amy Burns');
        })
    })







    //     let initialPendingAmount;
    //     cy.get("body > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)").invoke('text').then((text) => {
    //     initialPendingAmount = parseFloat(text.trim().replace('$', '').replace(',', ''));
    //     cy.log('Initial Pending Amount:', initialPendingAmount);
    //     if (isNaN(initialPendingAmount)) {
    //         console.error('Error parsing initial pending amount:', initialPendingAmountString);
    //         cy.wait(3000)
    //     }
    // });

    // // Create a new invoice with amount 500 and mark it as paid
    // cy.visit("https://nextjs14-simpleapp.vercel.app/dashboard/invoices");
    // cy.get("span[class='hidden md:block']").click();
    // cy.get("#customer").select('Emil Kowalski');
    // cy.get("#amount").type("500");
    // cy.get("#paid").check();
    // cy.get("button[type='submit']").click();

    // // Navigate back to the dashboard
    // cy.visit("h1[class='__className_712214 mb-4 text-xl md:text-2xl']");
    // cy.wait(4000)

    // // Capture the total amount of pending invoices again
    // let updatedPendingAmount;
    // cy.get("body > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)").invoke('text').then((text) => {
    //     updatedPendingAmount = parseFloat(text.trim().replace('$', '').replace(',', ''));
    //     cy.log('Updated Pending Amount:', updatedPendingAmount);
    //     cy.wait(4000)
    // });

    // // Verify that the total amount of pending invoices reflects the changes
    // const difference = updatedPendingAmount - initialPendingAmount;
    // cy.log('Difference:', difference);
    // expect(difference).to.equal(500);

})