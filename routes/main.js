const router = require("express").Router();
const Expenses = require('../models/Expenses.model');
const Received = require('../models/Received.model');
const fileUploader = require('../config/cloudinary.config');
const User = require('../models/User.model');

//MAIN APP VIEW
router.get("/main", async (req, res, next) => {
  const expenses = await Expenses.find();
  const received = await Received.find();
  const user = await User.find();
  


  let sumOfExpenses = 0;
  if (expenses.length > 0 ){
    sumOfExpenses = expenses.map(exp=> exp.value).reduce((a,b)=> a + b);
  }


  let sumOfReceived = 0;
  if(received.length > 0) {
    sumOfReceived = received.map(rec=> rec.value).reduce((a,b)=> a + b);
  }

  const total = sumOfReceived - sumOfExpenses;

//Expenses
  //Home sum
  sumOfHome = 0;
    if(expenses.length > 0) {
  filterOfHome = expenses.filter(exp=> exp.category === 'Home') 
    if (filterOfHome > 0) {
  sumOfHome = filterOfHome.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }

  //Education sum
  sumOfEducation = 0;
    if(expenses.length > 0) {
  filterOfEducation = expenses.filter(exp=> exp.category === 'Education') 
    if (filterOfEducation > 0) {
  sumOfEducation = filterOfEducation.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }

  //Entertainment sum
  sumOfEntertainment = 0;
    if(expenses.length > 0) {
  filterOfEntertainment = expenses.filter(exp=> exp.category === 'Entertainment') 
    if (filterOfEntertainment > 0) {
  sumOfEntertainment = filterOfEntertainment.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }
  
  //Restaurant sum
  sumOfRestaurant = 0;
    if(expenses.length > 0) {
  filterOfRestaurant = expenses.filter(exp=> exp.category === 'Restaurant') 
    if (filterOfRestaurant > 0) {
  sumOfRestaurant = filterOfRestaurant.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }


  //Health sum
  sumOfHealth = 0;
    if(expenses.length > 0) {
  filterOfHealth = expenses.filter(exp=> exp.category === 'Health') 
    if (filterOfHealth > 0) {
  sumOfHealth = filterOfHealth.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }

  //Pets sum
  sumOfPets = 0;
    if(expenses.length > 0) {
  filterOfPets = expenses.filter(exp=> exp.category === 'Pets') 
    if (filterOfPets > 0) {
  sumOfPets = filterOfPets.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }
  
  //Groceries sum
  sumOfGroceries = 0;
    if(expenses.length > 0) {
  filterOfGroceries = expenses.filter(exp=> exp.category === 'Groceries') 
    if (filterOfGroceries > 0) {
  sumOfGroceries = filterOfGroceries.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }
  
  //Shopping sum
  sumOfShopping = 0;
    if(expenses.length > 0) {
  filterOfShopping = expenses.filter(exp=> exp.category === 'Shopping') 
    if (filterOfShopping > 0) {
  sumOfShopping = filterOfShopping.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }

  //Subcriptions sum
  sumOfSubcriptions = 0;
    if(expenses.length > 0) {
  filterOfSubcriptions = expenses.filter(exp=> exp.category === 'Subcriptions') 
    if (filterOfSubcriptions > 0) {
  sumOfSubcriptions = filterOfSubcriptions.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }

  //Transportation sum
  sumOfTransportation = 0;
    if(expenses.length > 0) {
  filterOfTransportation = expenses.filter(exp=> exp.category === 'Transportation') 
    if (filterOfTransportation > 0) {
  sumOfTransportation = filterOfTransportation.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }

  //Travel sum
  sumOfTravel = 0;
    if(expenses.length > 0) {
  filterOfTravel = expenses.filter(exp=> exp.category === 'Travel') 
    if (filterOfTravel > 0) {
  sumOfTravel = filterOfTravel.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }

  //Others sum
  sumOfOthers = 0;
    if(expenses.length > 0) {
  filterOfOthers = expenses.filter(exp=> exp.category === 'Others') 
    if (filterOfOthers > 0) {
  sumOfOthers = filterOfOthers.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }

  //Earnings

    //Subcriptions sum
  sumOfSubcriptions = 0;
    if(received.length > 0) {
  filterOfSubcriptions = received.filter(exp=> exp.category === 'Subcriptions') 
    if (filterOfSubcriptions > 0) {
  sumOfSubcriptions = filterOfSubcriptions.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }
  
    //Loans sum
  sumOfLoans = 0;
    if(received.length > 0) {
  filterOfLoans = received.filter(exp=> exp.category === 'Loans') 
    if (filterOfLoans > 0) {
  sumOfLoans = filterOfLoans.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }

    //Salary sum
  sumOfSalary = 0;
    if(received.length > 0) {
  filterOfSalary = received.filter(exp=> exp.category === 'Salary') 
    if (filterOfSalary > 0) {
  sumOfSalary = filterOfSalary.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }

    //Others  sum
  sumOfOthers = 0;
    if(received.length > 0) {
  filterOfOthers = received.filter(exp=> exp.category === 'Others') 
    if (filterOfOthers > 0) {
  sumOfOthers = filterOfOthers.map(exp=> exp.value).reduce((a,b)=> a+b);
  }
    }



  
  
    const formatedReceived = received.map(el =>{
      return {...el._doc, newdate : el.date.toLocaleDateString("pt-PT")}
      })
    
    
    console.log("rec", formatedReceived)

    
  
 

  res.render("main/main-app", { expenses, formatedReceived, sumOfExpenses , sumOfReceived, total, user })
})

//NEW EXPENSES
router.get("/newexpense", (req, res) => {
    res.render("main/new-expense")
    })

router.post("/newexpense", fileUploader.single('receipt-img'), (req, res) => {
    const { description, value, date, category } = req.body;
     let fileUrl = "";
     if(req.file){
       fileUrl = req.file.path;
     } else {
       fileUrl = "/images/whiteBackground.jpg"
     }
    Expenses.create({ description, value, date, category, imageUrl: fileUrl })
      .then((createdExpense) => {
        console.log("createdExpense", createdExpense)
        res.redirect(`/main`);
      })
      .catch( (err) => console.log(err));
  
  });

//EDITING EXPENSES
router.get('/expenses/:expenseId/edit', (req, res) => {
    const expenseId = req.params.expenseId;
  
    Expenses.findById(expenseId)
      .then((expense) => {
        res.render('main/expenses-edit-view', { expense: expense } );
      })
      .catch( (err) => console.log(err));
  })
  
  
router.post('/expenses/:expenseId/edit', (req, res) => {
    const expenseId = req.params.expenseId;
    const { description, value, date, category } = req.body;
  
    Expenses.findByIdAndUpdate(expenseId, { description, value, date, category }, { new: true })
      .then((updatedExpense) => {
        res.redirect(`/main`);
      })
      .catch( (err) => console.log(err));
  })

//DETAILS EXPENSE
router.get('/expenses/:expenseId/details', (req, res) => {
  const expenseId = req.params.expenseId;

  Expenses.findById(expenseId)
    .then((expense) => {
      
   
      console.log("newDate ", newDate)
      console.log("expenseDate" , expense.date);
      res.render('main/expenses-details-view', { expense } );
    })
    .catch( (err) => console.log(err));
})

//DELETING EXPENSES
router.post('/expenses/:expenseId/delete', (req, res) => {
    const expenseId = req.params.expenseId;
  
    Expenses.findByIdAndRemove(expenseId)
      .then((status) => {
        res.redirect('/main')
      })
      .catch((err) => console.log(err));
  })
  

//NEW EARNINGS
router.get("/newearning", (req, res, next) => {
    res.render("main/new-earnings")
    })

router.post("/newearning", fileUploader.single('receipt-img'), (req, res) => {
    const { description, value, date, category } = req.body;
    let fileUrl = "";
    if(req.file){
      fileUrl = req.file.path;
    } else {
      fileUrl = "/images/whiteBackground.jpg"
    }
    Received.create({ description, value, date, category, imageUrl: fileUrl })
      .then((createdEarning) => {
        console.log('createdEarning :>> ', createdEarning);
        res.redirect(`/main`);
      })
      .catch( (err) => console.log(err));
  
  });


//EDITING EARNINGS
router.get('/earnings/:earningsId/edit', (req, res) => {
  const earningsId = req.params.earningsId;

  Received.findById(earningsId)
    .then((earnings) => {
      res.render('main/earnings-edit-view', { earnings: earnings } );
    })
    .catch( (err) => console.log(err));
})


router.post('/earnings/:earningsId/edit', (req, res) => {
  const earningsId = req.params.earningsId;
  const { description, value, date, category } = req.body;

  Received.findByIdAndUpdate(earningsId, { description, value, date, category }, { new: true })
    .then((updatedEarning) => {
      res.redirect(`/main`);
    })
    .catch( (err) => console.log(err));
})

//DETAILS EARNINGS
router.get('/earnings/:earningsId/details', (req, res) => {
const earningsId = req.params.earningsId;

Received.findById(earningsId)
  .then((earnings) => {
    res.render('main/earnings-details-view', { earnings: earnings } );
  })
  .catch( (err) => console.log(err));
})

//DELETING EARNINGS
router.post('/earnings/:earningsId/delete', (req, res) => {
  const earningsId = req.params.earningsId;

  Received.findByIdAndRemove(earningsId)
    .then((status) => {
      res.redirect('/main')
    })
    .catch((err) => console.log(err));
})


module.exports = router;