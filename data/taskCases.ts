
// Data-driven test scenarios used by quote.spec.ts
// Each object represents one acceptance criteria scenario
// The test loop reads this data and runs the same test logic against each case

export const quoteCases = [ 
    {
    testName: "Blinds quote for kitchen window",
    customer: {
        name: 'John Smith',
        sidemark: '2" Blinds', 
        address: '123 Beach rd.',
        phoneNumber: '850-776-7985'
    },
    quote: { 
        category: 'Blinds',
        product: '2" Faux Wood Blinds',
        color: 'Alabaster',
        width: '45',
        height: '45',
        mountingPosition: 'Inside Mount',
        windowLocation: 'Kitchen'
    },
},
];