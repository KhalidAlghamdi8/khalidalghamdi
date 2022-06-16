import './contact.scss'

import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({theme}) => ({
    padding: theme.spacing(4),
    textAlign: 'left',
    margin: theme.spacing(1),


}));


export default function Contact() {


    return (
        <div className='Experience' id='CV'>

            <Box className='box' sx={{flexGrow: 3}} mt={10} ml={20}  >

                <Grid container spacing={1} >
                    <Grid item xs={6} md={6} mr={4} xl={6}>
                        <Item style={{background: "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)"}}>
                            <h4 className="h3">ANALYST, REPORTING & DATA ANALYTICS, IT GLOBAL ERP - SABIC</h4>
                            <h3><small>APR 2022 – PRESENT</small></h3>
                            <br/>
                            <ul className="b">
                                <li>Building data quality reports, Filtering Data, and cleaning.</li>
                                <li>Building Dashboards with (SAP HANA, SAP SAC, and SAP Predicative
                                    Analysis).
                                </li>
                                <li>Reports for the management stating trends, patterns, and predictions
                                    using relevant data.
                                </li>
                                <li>Working with management to prioritize business and information
                                    needs.
                                </li>
                                <li>Locating and defining new process improvement opportunities</li>
                            </ul>


                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h1 className="h3">RAN PERFORMANCE ENGINEER & DATA ANALYST - HUAWEI</h1>
                            <h3><small>JUN 2021 – APR 2022</small></h3>
                            <br/>
                            <ul className="b">
                                <li>Contracted to Huawei for STC's TP, Quality assurance and Management
                                    Team.
                                </li>
                                <li>Responsible for sending all main Daily/Weekly/Monthly/Evaluation and
                                    major Event Reports.
                                </li>
                                <li>Preparing all required reports on a daily, weekly, and monthly
                                    basis. Preparing reports related to Major KPIs, Utilization and
                                    Traffic on cell/node/network level.
                                </li>
                                <li>Handle all special requests coming from STC governance team</li>
                            </ul>

                            <br/>
                            <h1 className="h3">SAP YOUNG PROFESSIONALS PROGRAM</h1>
                            <h3><small>OCT 2020 – DEC 2020</small></h3>
                            <br/>
                            <ul className="b">
                                <li>Empower 2.0.</li>
                                <li>Data Science Projects</li>
                                <li>Design Thinking Workshop</li>
                                <li>SAP Internal Sales Overview</li>
                                <li>Mindfulness In Action Workshop for Professional Speakers</li>
                            </ul>
                            <br/>
                            <h1 className="h3">GRADUATE RESEARCH IN COMPUTER VISION - California State University,
                                Dominguez Hills</h1>
                            <h3><small>JAN 2019 – MAY 2020</small></h3>
                            <br/>
                            <ul className="b">
                                <li>Working mainly in Python, TensorFlow, Keras. OpenCV. to maintain a
                                    set of Computer Vision
                                </li>
                                <li>Designing, Implementing, Deploying, and Maintaining a set of
                                    Computer Vision and ML
                                </li>
                                <li>Developing and implementing data science projects</li>
                                <li>Research topics: Facial Recognition & Facial expression</li>
                            </ul>
                            <br/>


                        </Item>
                    </Grid>


                    <Grid item xs={6} md={4} xl={5}>
                        <Item style={{background: "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)"}}>
                            <h1 className="title">EDUCATION</h1>

                            <br/>
                            <ol>
                                <h4 className="h3">California State University, Dominguez Hills | May
                                    2020</h4>
                                <li className="h3">Master’s Degree of Science: Computer Science &
                                    Software Engineering
                                </li>
                                <br/>
                                <ul className="b">
                                    <li>Specialization in AI & Computer Vision</li>
                                    <li>Graduated with GPA 3.3/4.0</li>
                                    <li>Dean’s List 2019</li>

                                </ul>
                                <br/>
                                <h4 className="h3">Morgan State University | Dec 2017 </h4>
                                <li className="h3">Bachelor of Science: Computer Science
                                    <ul className="b">
                                        <br/>
                                        <li>Graduate with Honor Cum Laude, GPA 3.6/4.0</li>
                                        <li>Dean’s List Spring 2016/2017, Full 2016/2017</li>

                                    </ul>
                                </li>


                            </ol>
                            <br/>
                            <h1 className="title">Certifications:</h1>
                            <br/>
                            <ul className="b">
                                <li>Google Data Analytics Professional Certificate</li>
                                <li>Google Data Analytics Certificate</li>
                                <li>Google Project Management Certificate</li>
                                <li>SAP Certified Application Associate - SAP Analytics Cloud</li>
                                <li>SAP Certified Application Associate – SAP Predictive Analytics</li>
                                <li>SAP Certified Associate - SAP Activate Project Manager</li>
                            </ul>
                            <br/>
                            <br/>
                            <br/>
                            <h1 className="title">Specialization & Apprenticeship:</h1>
                            <br/>
                            <ul className="b">
                                <li>Software Engineering & Quality</li>
                                <ul>
                                    <li>Digital apprenticeship Program (60 hours)</li>
                                </ul>
                                <br/>
                                <li>Deep Learning Specialization
                                    <ul>
                                        <li>Digital Specialization Program (160 hours)</li>
                                    </ul>
                                </li>
                                <br/>
                                <li>Java Full Stack
                                    <ul>
                                        <li>Digital apprenticeship Program (496 hours)</li>
                                    </ul>
                                </li>
                                <br/>
                                <li>Machine Learning Engineer
                                    <ul>
                                        <li>Digital apprenticeship Program (124 hours)</li>
                                    </ul>
                                </li>
                            </ul>
                        </Item>


                    </Grid>


                    <Grid item md={10}>
                        <Item style={{background: "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)"}}>
                            <h3 className="title">Technical Skills</h3>
                            <div className="grid-container">
                                <div className="title">Programing Languages:
                                    <ul className="b">
                                        <li>C++</li>
                                        <li>Python</li>
                                        <li>Java</li>
                                        <li>JS</li>
                                    </ul>
                                </div>
                                <div className="title">Visualization Tools:
                                    <ul className="b">
                                        <li>SAP SAC</li>
                                        <li>MS Excel</li>
                                        <li>Tableau</li>
                                    </ul>
                                </div>
                                <div className="title">Analysis Tools/libraries:
                                    <ul className="b">
                                        <li>Pandas</li>
                                        <li>NumPy</li>
                                        <li>Matplotlib</li>
                                    </ul>
                                </div>
                                <div className="title">Machine Learning libraries:
                                    <ul className="b">
                                        <li>Scikit-learn</li>
                                        <li>TensorFlow</li>
                                        <li>PyTorch</li>
                                    </ul>
                                </div>
                                <div className="title">Deep Learning:
                                    <ul className="b">
                                        <li>OpenCV</li>
                                        <li>Dlib</li>
                                    </ul>
                                </div>
                                <div className="title">Other Tools:
                                    <ul className="b">
                                        <li>Git & GitHub</li>
                                        <li>React js</li>
                                        <li>Jupyter Notebook & PyCharm</li>
                                    </ul>
                                </div>
                            </div>
                        </Item>
                    </Grid>


                </Grid>
            </Box>

        </div>
    );
}
