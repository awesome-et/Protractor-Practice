exports.config = {

  directConnect: true,
    // seleniumAddress: 'http://localhost:4444/wd/hub',
  
    capabilities: {
      browserName: 'chrome'
    },
  

    // specs:['registractionForm.js'],
    specs:['Calc.js'],
   
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };