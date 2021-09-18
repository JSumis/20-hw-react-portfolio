export default function Portfolio() {
    return (

        <div>
            <h1>Portfolio</h1>

            <div className="portfolio-imgs">
                <img
                    src={require('../images/password-generator.jpg').default} height={500} width={500}
                    
                />
                <img
                src={require('../images/workday-scheduler.jpg').default} height={500} width={500}
                   
                    alt="new"
                />
                <img
                src={require('../images/Calendae-weekview.png').default} height={500} width={500}
                   
                    alt="new"
                />
                <img
                src={require('../images/Bootcamp-Box-Screencap.jpg').default} height={500} width={500}
                   
                    alt="new"
                />

            </div>
        </div>

    )
}