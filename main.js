import 'virtual:windi.css';
// load this middleware
import 'pinecone-router-middleware-views'
// load pinecone router
import PineconeRouter from 'pinecone-router';
// then load alpine.js
import Alpine from 'alpinejs';
// add the router as a plugin
Alpine.plugin(PineconeRouter)
// start alpine
Alpine.start()