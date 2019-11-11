import React, { Component } from 'react'
import { Container, Row, Col, Footer } from 'react-bootstrap'
import '../Footer/Footer.css'

class footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container bottom_border">
                    <div className="row">
                        <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">អំពីយើង</h5>
                            <p className="mb10">មជ្ឈមណ្ឌល​កូរ៉េ អេច​​ អ ​ឌី គឺ​ជា​មជ្ឈមណ្ឌល​សំរាប់​បណ្តុះបណ្តាល​អ្នកជំនាញ​ពត៌មានវិទ្យា​ក្រោម​ការសហការ​ជាមួយ​កម្មវិធី​ Global CSR Program របស់ KOICA (Korea International Cooperation Agency) ​និង ​Webcash នៅ​ខែ​មេសា​ឆ្នាំ​ ២០១៣។​ គោលដៅ​របស់​ពួកយើង​គឺ​បណ្តុះបណ្តាល​ឲ្យ​សិស្ស​ស្ទាត់ជំនាញ​ខាង​ផ្នែក​ពត៌មានវិទ្យា​ និង​ផ្តល់​ឱកាស​ការងារ​ដល់​ពួកគាត់​។</p>
                            <p><i className="fa fa-location-arrow"></i> (855)15 4 5555 2 (Khmer, English)</p>
                            <p><i className="fa fa-phone"></i> (855)77 77 12 36 (Khmer, English)</p>
                            <p><i className="fa fa fa-envelope"></i> info.kshrd@gmail.com <br/> phirum.gm@gmail.com </p>


                        </div>


                        <div className=" col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">ទំនាក់​​ទំនង</h5>
                            <ul className="footer_ul_amrc">
                                <li><a href="http://webenlance.com">អាស័យដ្ឋាន​: ​ផ្ទះលេខ​ ១២, ​ផ្លូវលេខ​ ៣២៣, ​សង្កាត់​បឹងកក់២, ​ខណ្ឌ​ទួលគោក, ​ភ្នំពេញ ​កម្ពុជា.</a></li>
                                
                            </ul>

                        </div>


                       


                        <div className=" col-sm-4 col-md  col-12 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">តាមដានទំព័រ FACEBOOK របស់យើង</h5>


                            <ul className="footer_ul2_amrc">
                                <li><a href="#"><i className="fa fa-facebook"></i> </a><p>Korea Software HRD<a href="https://www.facebook.com/pg/ksignhrd/posts/?ref=page_internal">https://www.facebook.com/pg/ksignhrd/posts/?ref=page_internal</a></p></li>
                                {/* <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                            </ul>

                        </div>
                    </div>
                </div>


                <div className="container">
                    <ul className="foote_bottom_ul_amrc">
                        <li><a href="http://webenlance.com">Home</a></li>
                        <li><a href="http://webenlance.com">About</a></li>
                        <li><a href="http://webenlance.com">Services</a></li>
                        <li><a href="http://webenlance.com">Pricing</a></li>
                        <li><a href="http://webenlance.com">Blog</a></li>
                        <li><a href="http://webenlance.com">Contact</a></li>
                    </ul>

                    <p className="text-center">Copyright @2017 | Designed With by <a href="#">Your Company Name</a></p>

                    <ul className="social_footer_ul">
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>

                </div>

            </footer>
        )
    }
}
export default footer;