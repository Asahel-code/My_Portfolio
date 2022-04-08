import './Contact.css';

export const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="contact_title">Get in touch</div>
                        <div className="contact_subtitle header">any query?</div>
                    </div>
                </div>
                <div className="row contact_content">
                    <div className="col-lg-5">
                        <div className="contact_info">
                            <div className="contact_info_box">i</div>
                            <div className="contact_info_container">
                                <div className="contact_info_content">
                                    <ul>
                                        <li>Phone : +254 711 959117</li>
                                        <li>Email : kirwaasahel@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="contact_info_social">
                                    <ul>
                                        <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact_form_container">
                            <form action="#" id="contact_form" className="clearfix">
                                <input id="contact_input_name" className="contact_input contact_input_name" type="text" placeholder="Name" required="required" data-error="Name is required."/>
                                <input id="contact_input_email" className="contact_input contact_input_email" type="text" placeholder="E-mail" required="required" data-error="E-mail is required."/>
                                <input id="contact_input_subject" className="contact_input contact_input_subject" type="text" placeholder="Subject"/>
                                <textarea id="contact_input_message" className="contact_message_input contact_input_message" name="message" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                                <button id="contact_send_btn" type="submit" className="contact_send_btn trans_200" value="Submit">Send</button>
						    </form>
					    </div>
				    </div>
			    </div>
            </div>
        </div>    
    );
}

