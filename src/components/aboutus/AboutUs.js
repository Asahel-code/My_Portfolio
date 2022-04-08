import './AboutUs.css'
import img_3 from '../../assets/images/img_5.png'


export const AboutUs = () => {
    const align_center ="mx-auto";
    return(
        <section className="about container-fluid">
            <div className="about_content row d-flex align-items-center justify-content-around p-4">
                <div className="about_message col-md-6 d-flex justify-content-start">
                    <div className={`pb-2 ${align_center}`}>
                    <h2 className="text-uppercase  h2 ">About me</h2>
                    <div className={`about_underline mx-auto ${align_center}`}></div>
                    </div>
                    
                    <p className="text-white">
                    I am an Enthusiastic developer eager to contribute to a 
                    team success through hard work, attention to details and 
                    excellent organizational skills. Clear understanding of 
                    programming skills and motivated to learn  more and excel 
                    in the tech world. 
                    </p>   
                </div>
                <div className="about_image col-md-6 justify-content-end">
                    <img className="w-100 "src={img_3} alt=""/>
                </div>
            </div>
        </section>
    );
}