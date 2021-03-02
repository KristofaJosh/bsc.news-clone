import React from 'react';
import './App.css';
import Header from './web/components/composite/header';
import Footer from './web/components/composite/footer';
import NewsSection from './web/components/composite/newsection';
import ArticleBlock from './web/components/composite/articleblock';
import CollectionSection from './web/components/composite/collectionsblock';
import MainArticleSection from './web/components/composite/mainarticlesection';

function App() {
    return (
        <div className="App">
            <Header />
            <div className={'site-contents container'}>
                <NewsSection />
                <MainArticleSection/>
                <ArticleBlock/>
                <CollectionSection/>
                <Footer />
            </div>
        </div>
    );
}

export default App;
