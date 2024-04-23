// const express = require('express');
// let morgan = require ('morgan') 
// const app = express()

// app.set('views','./view')
// app.set('view engine', 'ejs')

// app.use(morgan('dev'))

// console.log('heo=')
// //public folder mhr thwar find
// app.use(express.static('public'))

// app.get('/',(req,res)=>{

//        let blogs= [
//         { title : 'Blog title update', intro: 'this is blog intro 1'},
//         { title : 'Blog title 2', intro: 'this is blog intro 2'},
//         { title : 'Blog title 3', intro: 'this is blog intro 3'},
       
//     ];

//     res.render('home',{
//         blogs,
//         title :"Home"
//     })
    

// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title : "About"
//     });
// });




// app.get('/contact',(req,res)=>{
//     res.render('contact',{
//         title : "Contact"
//     });
// });


// app.use((req,res)=>{
//     res.status(404).render('404',{
//         title : " 404 Not found"
//     });
// })

// app.listen(3000, ()=>{
//     console.log('app is running on port 3000');
// }); 


// mongodb 
// db url


// const express = require('express');
// let morgan = require ('morgan') ;

// const mongoose = require('mongoose');
// const Blog =require('./models/Blog');
// const app = express();

// let mongoUrl = "mongodb+srv://yuki:test123@cluster0.w74klag.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoUrl).then(()=>{
//     console.log('connected to db')
//     app.listen(3000, ()=>{
//         console.log('app is running on port 3000');
//     }); 
// }).catch(e =>{
//     console.log(e)
// })

// app.set('views','./view')
// app.set('view engine', 'ejs')

// app.use(morgan('dev'))
// //public folder mhr thwar find
// app.use(express.static('public'))

// app.get('/add-blog',async(req,res)=>{
//     let blog = new Blog({
//         title : "blog title 2",
//         intro : "blog intro 2",
//         body : "blog body 2"
//     });
//     await blog.save();
//     res.send('blog saved');
    
// })

// app.get('/',(req,res)=>{

//        let blogs= [
//         { title : 'Blog title update', intro: 'this is blog intro 1'},
//         { title : 'Blog title 2', intro: 'this is blog intro 2'},
//         { title : 'Blog title 3', intro: 'this is blog intro 3'},
       
//     ];

//     res.render('home',{
//         blogs,
//         title :"Home"
//     })
    

// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title : "About"
//     });
// });




// app.get('/contact',(req,res)=>{
//     res.render('contact',{
//         title : "Contact"
//     });
// });


// app.use((req,res)=>{
//     res.status(404).render('404',{
//         title : " 404 Not found"
//     });
// })


// const express = require('express');
// let morgan = require ('morgan') ;

// const mongoose = require('mongoose');
// const Blog =require('./models/Blog');
// const app = express();

// let mongoUrl = "mongodb+srv://yuki:test123@cluster0.w74klag.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoUrl).then(()=>{
//     console.log('connected to db')
//     app.listen(3000, ()=>{
//         console.log('app is running on port 3000');
//     }); 
// }).catch(e =>{
//     console.log(e)
// })

// app.set('views','./view')
// app.set('view engine', 'ejs')

// app.use(morgan('dev'))
// //public folder mhr thwar find
// app.use(express.static('public'))

// app.get('/add-blog',async(req,res)=>{
//     let blog = new Blog({
//         title : "blog title 3",
//         intro : "blog intro 3",
//         body : "blog body 3"
//     });
//     await blog.save();
//     res.send('blog saved');
    
// })

// app.get('/',async(req,res)=>{

//     //    let blogs= [
//     //     { title : 'Blog title update', intro: 'this is blog intro 1'},
//     //     { title : 'Blog title 2', intro: 'this is blog intro 2'},
//     //     { title : 'Blog title 3', intro: 'this is blog intro 3'},
       
//     // ];
//     let blogs = await Blog.find().sort({createdAt:-1});
//     console.log(blogs); 

//     res.render('home',{
//         blogs,

//         title :"Home"
//     })
    

// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title : "About"
//     });
// });




// app.get('/contact',(req,res)=>{
//     res.render('contact',{
//         title : "Contact"
//     });
// });


// app.use((req,res)=>{
//     res.status(404).render('404',{
//         title : " 404 Not found"
//     });
// })




// blog 1 ku pl find chin yin
// const express = require('express');
// let morgan = require ('morgan') ;
// const mongoose = require('mongoose');
// const expressLayouts = require('express-ejs-layouts');

// const Blog =require('./models/Blog');
// const expressEjsLayouts = require('express-ejs-layouts');
// const app = express();

// let mongoUrl = "mongodb+srv://yuki:test123@cluster0.w74klag.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoUrl).then(()=>{
//     console.log('connected to db')
//     app.listen(3000, ()=>{
//         console.log('app is running on port 3000');
//     }); 
// }).catch(e =>{
//     console.log(e)
// })

// app.set('views','./view')
// app.set('view engine', 'ejs')
// app.use(expressEjsLayouts);
// app.set('layout','layouts/default');

// app.use(morgan('dev'))
// //public folder mhr thwar find
// app.use(express.static('public'))

// app.get('/add-blog',async(req,res)=>{
//     let blog = new Blog({
//         title : "blog title 3",
//         intro : "blog intro 3",
//         body : "blog body 3"
//     });
//     await blog.save();
//     res.send('blog saved');
    
// })

// app.get('/single-blog',async(req,res)=>{
//   let blog = await Blog.findById('65d44c625a086a3474fd3459');
//   res.json(blog);
    
// })

// app.get('/',async(req,res)=>{

//     let blogs = await Blog.find().sort({createdAt:-1});
//     console.log(blogs); 

//     res.render('home',{
//         blogs,

//         title :"Home"
//     })
    

// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title : "About"
//     });
// });




// app.get('/contact',(req,res)=>{
//     res.render('contact',{
//         title : "Contact"
//     });
// });

// app.get('/blogs/create',(req,res)=>{
//     res.render('blogs/create',{
//         title:'blog create'
//     })
// })


// app.use((req,res)=>{
//     res.status(404).render('404',{
//         title : " 404 Not found"
//     });
// })




//// Blog create page

// const express = require('express');
// let morgan = require ('morgan') ;
// const mongoose = require('mongoose');
// const expressLayouts = require('express-ejs-layouts');

// const Blog =require('./models/Blog');
// const expressEjsLayouts = require('express-ejs-layouts');
// const app = express();

// app.use(express.urlencoded({extended:true}));

// let mongoUrl = "mongodb+srv://yuki:test123@cluster0.w74klag.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoUrl).then(()=>{
//     console.log('connected to db')
//     app.listen(3000, ()=>{
//         console.log('app is running on port 3000');
//     }); 
// }).catch(e =>{
//     console.log(e)
// })

// app.set('views','./view')
// app.set('view engine', 'ejs')
// app.use(expressEjsLayouts);
// app.set('layout','layouts/default');

// app.use(morgan('dev'))
// //public folder mhr thwar find
// app.use(express.static('public'))

// app.get('/add-blog',async(req,res)=>{
//     let blog = new Blog({
//         title : "blog title 3",
//         intro : "blog intro 3",
//         body : "blog body 3"
//     });
//     await blog.save();
//     res.send('blog saved');
    
// })

// app.get('/single-blog',async(req,res)=>{
//   let blog = await Blog.findById('65d44c625a086a3474fd3459');
//   res.json(blog);
    
// })

// app.get('/',async(req,res)=>{

//     let blogs = await Blog.find().sort({createdAt:-1});
//     console.log(blogs); 

//     res.render('home',{
//         blogs,

//         title :"Home"
//     })
    

// });

// app.post('/blogs',async(req,res)=>{

//     // console.log(req.body);
//     let {  title,intro,body } = req.body;

//     let blog = new Blog({
//         title,
//         intro,
//         body
//     });
//     await blog.save();

//     res.redirect('/');


// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title : "About"
//     });
// });




// app.get('/contact',(req,res)=>{
//     res.render('contact',{
//         title : "Contact"
//     });
// });

// app.get('/blogs/create',(req,res)=>{
//     res.render('blogs/create',{
//         title:'blog create'
//     })
// })


// app.use((req,res)=>{
//     res.status(404).render('404',{
//         title : " 404 Not found"
//     });
// })



//// Dynamite blog show page witrh route params 

// const express = require('express');
// let morgan = require ('morgan') ;
// const mongoose = require('mongoose');
// const expressLayouts = require('express-ejs-layouts');

// const Blog =require('./models/Blog');
// const expressEjsLayouts = require('express-ejs-layouts');
// const app = express();

// app.use(express.urlencoded({extended:true}));

// let mongoUrl = "mongodb+srv://yuki:test123@cluster0.w74klag.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoUrl).then(()=>{
//     console.log('connected to db')
//     app.listen(3000, ()=>{
//         console.log('app is running on port 3000');
//     }); 
// }).catch(e =>{
//     console.log(e)
// })

// app.set('views','./view')
// app.set('view engine', 'ejs')
// app.use(expressEjsLayouts);
// app.set('layout','layouts/default');

// app.use(morgan('dev'))
// //public folder mhr thwar find
// app.use(express.static('public'))

// app.get('/add-blog',async(req,res)=>{
//     let blog = new Blog({
//         title : "blog title 3",
//         intro : "blog intro 3",
//         body : "blog body 3"
//     });
//     await blog.save();
//     res.send('blog saved');
    
// })

// app.get('/blogs/:id',async(req,res)=>{
//     let id = req.params.id;
//   let blog = await Blog.findById(id);
//   res.render('blogs/show',{
//     blog,
//     title :"Blog Detail"
// })
    
// })

// app.get('/',async(req,res)=>{

//     let blogs = await Blog.find().sort({createdAt:-1});
//     console.log(blogs); 

//     res.render('home',{
//         blogs,

//         title :"Home"
//     })
    

// });

// app.post('/blogs',async(req,res)=>{

//     // console.log(req.body);
//     let {  title,intro,body } = req.body;

//     let blog = new Blog({
//         title,
//         intro,
//         body
//     });
//     await blog.save();

//     res.redirect('/');


// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title : "About"
//     });
// });




// app.get('/contact',(req,res)=>{
//     res.render('contact',{
//         title : "Contact"
//     });
// });

// app.get('/blogs/create',(req,res)=>{
//     res.render('blogs/create',{
//         title:'blog create'
//     })
// })


// app.use((req,res)=>{
//     res.status(404).render('404',{
//         title : " 404 Not found"
//     });
// })




//// error Handling

// const express = require('express');
// let morgan = require ('morgan') ;
// const mongoose = require('mongoose');
// const expressLayouts = require('express-ejs-layouts');

// const Blog =require('./models/Blog');
// const expressEjsLayouts = require('express-ejs-layouts');
// const app = express();

// app.use(express.urlencoded({extended:true}));

// let mongoUrl = "mongodb+srv://yuki:test123@cluster0.w74klag.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoUrl).then(()=>{
//     console.log('connected to db')
//     app.listen(3000, ()=>{
//         console.log('app is running on port 3000');
//     }); 
// }).catch(e =>{
//     console.log(e)
// })

// app.set('views','./view')
// app.set('view engine', 'ejs')
// app.use(expressEjsLayouts);
// app.set('layout','layouts/default');

// app.use(morgan('dev'))
// //public folder mhr thwar find
// app.use(express.static('public'))

// app.get('/add-blog',async(req,res)=>{
//     let blog = new Blog({
//         title : "blog title 3",
//         intro : "blog intro 3",
//         body : "blog body 3"
//     });
//     await blog.save();
//     res.send('blog saved');
    
// })



// app.get('/',async(req,res)=>{

//     let blogs = await Blog.find().sort({createdAt:-1});
//     console.log(blogs); 

//     res.render('home',{
//         blogs,

//         title :"Home"
//     })
    

// });

// app.post('/blogs',async(req,res)=>{

//     // console.log(req.body);
//     let {  title,intro,body } = req.body;

//     let blog = new Blog({
//         title,
//         intro,
//         body
//     });
//     await blog.save();

//     res.redirect('/');


// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title : "About"
//     });
// });




// app.get('/contact',(req,res)=>{
//     res.render('contact',{
//         title : "Contact"
//     });
// });

// app.get('/blogs/create',(req,res)=>{
//     res.render('blogs/create',{
//         title:'blog create'
//     })
// })

// app.get('/blogs/:id',async(req,res,next)=>{
//  try {
//     let id = req.params.id;
//   let blog = await Blog.findById(id);
//   res.render('blogs/show',{
//     blog,
//     title :"Blog Detail"
// })
//  }catch(e){
//     console.log(e);
//     next();

//  }
    
// })

// app.use((req,res)=>{
//     res.status(404).render('404',{
//         title : " 404 Not found"
//     });
// })




//// blog delete

// const express = require('express');
// let morgan = require ('morgan') ;
// const mongoose = require('mongoose');
// const expressLayouts = require('express-ejs-layouts');

// const Blog =require('./models/Blog');
// const expressEjsLayouts = require('express-ejs-layouts');
// const app = express();

// app.use(express.urlencoded({extended:true}));

// let mongoUrl = "mongodb+srv://yuki:test123@cluster0.w74klag.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoUrl).then(()=>{
//     console.log('connected to db')
//     app.listen(3000, ()=>{
//         console.log('app is running on port 3000');
//     }); 
// }).catch(e =>{
//     console.log(e)
// })

// app.set('views','./view')
// app.set('view engine', 'ejs')
// app.use(expressEjsLayouts);
// app.set('layout','layouts/default');

// app.use(morgan('dev'))
// //public folder mhr thwar find
// app.use(express.static('public'))

// app.get('/add-blog',async(req,res)=>{
//     let blog = new Blog({
//         title : "blog title 3",
//         intro : "blog intro 3",
//         body : "blog body 3"
//     });
//     await blog.save();
//     res.send('blog saved');
    
// })



// app.get('/',async(req,res)=>{

//     let blogs = await Blog.find().sort({createdAt:-1});
//     console.log(blogs); 

//     res.render('home',{
//         blogs,

//         title :"Home"
//     })
    

// });

// app.post('/blogs',async(req,res)=>{

//     // console.log(req.body);
//     let {  title,intro,body } = req.body;

//     let blog = new Blog({
//         title,
//         intro,
//         body
//     });
//     await blog.save();

//     res.redirect('/');


// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title : "About"
//     });
// });




// app.get('/contact',(req,res)=>{
//     res.render('contact',{
//         title : "Contact"
//     });
// });

// app.get('/blogs/create',(req,res)=>{
//     res.render('blogs/create',{
//         title:'blog create'
//     })
// })

// app.post('/blogs/:id/delete',async(req,res,next)=>{
//  try {
//     let id = req.params.id;
//     await Blog.findByIdAndDelete(id);
//     res.redirect('/');
  

//  }catch(e){
//     console.log(e);
//     next();

//  }
    
// })

// app.get('/blogs/:id',async(req,res,next)=>{
//     try {
//        let id = req.params.id;
//      let blog = await Blog.findById(id);
//      res.render('blogs/show',{
//        blog,
//        title :"Blog Detail"
//    })
//     }catch(e){
//        console.log(e);
//        next();
   
//     }
       
//    })

// app.use((req,res)=>{
//     res.status(404).render('404',{
//         title : " 404 Not found"
//     });
// })



//// express route module / refracter 

//mvc = model , view , controller |create => routes / blogRoutes.js

// const express = require('express');
// let morgan = require ('morgan') ;
// const mongoose = require('mongoose');
// const expressLayouts = require('express-ejs-layouts');
// const blogRoutes = require('./routes/blogRoutes');

// const Blog =require('./models/Blog');
// const expressEjsLayouts = require('express-ejs-layouts');
// const app = express();

// app.use(express.urlencoded({extended:true}));

// let mongoUrl = "mongodb+srv://yuki:test123@cluster0.w74klag.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoUrl).then(()=>{
//     console.log('connected to db')
//     app.listen(3000, ()=>{
//         console.log('app is running on port 3000');
//     }); 
// }).catch(e =>{
//     console.log(e)
// })

// app.set('views','./view')
// app.set('view engine', 'ejs')
// app.use(expressEjsLayouts);
// app.set('layout','layouts/default');

// app.use(morgan('dev'))
// //public folder mhr thwar find
// app.use(express.static('public'))

// app.get('/add-blog',async(req,res)=>{
//     let blog = new Blog({
//         title : "blog title 3",
//         intro : "blog intro 3",
//         body : "blog body 3"
//     });
//     await blog.save();
//     res.send('blog saved');
    
// })

// app.get('/',async(req,res)=>{

//     res.redirect('/blogs');
// });



// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title : "About"
//     });
// });


// app.get('/contact',(req,res)=>{
//     res.render('contact',{
//         title : "Contact"
//     });
// });
// app.use('/blogs',blogRoutes);

// app.use((req,res)=>{
//     res.status(404).render('404',{
//         title : " 404 Not found"
//     });
// })



// Controller 

const express = require('express');
let morgan = require ('morgan') ;
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const blogRoutes = require('./routes/blogRoutes');

const Blog =require('./models/Blog');
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();

app.use(express.urlencoded({extended:true}));

let mongoUrl = "mongodb+srv://yuki:test123@cluster0.w74klag.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl).then(()=>{
    console.log('connected to db')
    app.listen(3000, ()=>{
        console.log('app is running on port 3000');
    }); 
}).catch(e =>{
    console.log(e)
})

app.set('views','./view')
app.set('view engine', 'ejs')
app.use(expressEjsLayouts);
app.set('layout','layouts/default');

app.use(morgan('dev'))
//public folder mhr thwar find
app.use(express.static('public'))

app.get('/add-blog',async(req,res)=>{
    let blog = new Blog({
        title : "blog title 3",
        intro : "blog intro 3",
        body : "blog body 3"
    });
    await blog.save();
    res.send('blog saved');
    
})

app.get('/',async(req,res)=>{

    res.redirect('/blogs');
});



app.get('/about',(req,res)=>{
    res.render('about',{
        title : "About"
    });
});


app.get('/contact',(req,res)=>{
    res.render('contact',{
        title : "Contact"
    });
});
app.use('/blogs',blogRoutes);

app.use((req,res)=>{
    res.status(404).render('404',{
        title : " 404 Not found"
    });
})