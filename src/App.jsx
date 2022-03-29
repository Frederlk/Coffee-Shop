import { Header, Footer } from './_containers';
import { BeansSeparator, About } from './_components';

import { images, data } from './constants';
import Card from './_components/Card';

const App = () => {
    return (
        <>
            <Header />
            <main className='page'>
                <section className="home-screen">
                    <div className="home-screen__content">
                        <div className="home-screen__container">
                            <h1 className="home-screen__title title">
                                Everything You Love About Coffee
                            </h1>
                            <BeansSeparator classnames="home-screen__separator white" />
                            <div className="home-screen__subtitile subtitle">
                                <p>We makes every day full of energy and taste</p>
                                <p>Want to try our beans?</p>
                            </div>
                            <a href="#" type="submit" className="home-screen__button">More</a>
                        </div>
                    </div>
                    <div className="home-screen__background-ibg">
                        <img src={images.mainBG} alt="Background" />
                    </div>
                </section>
                <About title='About Us' classnames='about_home' >
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>

                    <p>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </About>
                <section className="best">
                    <div className="best__container">
                        <h2 className="best__subtitle subtitle">Our best</h2>
                        <div className="best__body">
                            {data.coffee.filter(item => item.best).map(({ title, price, image }, i) => (
                                <Card classnames='best__card' key={title + i} best title={title} price={price} image={image} />
                            ))}
                        </div>
                    </div>
                    <div className="best__bg-ibg">
                        <img src={images.maskBG} alt="Marble background" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App