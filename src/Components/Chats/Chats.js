import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#4e504f",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#fff",
  botFontColor: "#000000",
  userBubbleColor: "#8c8c8c",
  userFontColor: "#fff",
};

export default class Chats extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: "1",
              message:
                "Hi there! I’m Echo, your virtual assistant. 😊  What's your name? ",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              validator: (value) => {
                if (/[a-z]{2,15}$/.test(value)) {
                  return true;
                } else {
                  return "Please enter a valid name.";
                }
              },
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you! 👋",
              trigger: "4",
            },
            {
              id: "4",
              message: " How can I help you today??",
              trigger: "seleccion",
            },

            {
              id: "link3",

              component: (
                <a href="https://sphechohelp.freshdesk.com/support/tickets/new">
                  click here to report issue
                </a>
              ),
              end: true,
            },

            {
              id: "link4",

              component: (
                <a href="https://sphechohelp.freshdesk.com/support/tickets/new">
                  Call us
                </a>
              ),
              end: true,
            },
            {
              id: "6a",
              message: "Great! Tell me what are you looking for...🧐",
              trigger: "seleccion",
            },
            {
              id: "6b",
              message: " See you later, Have a nice day!😇",
              end: true,
            },
            {
              id: "seleccion",
              options: [
                {
                  value: "Sphecho Service",
                  label: "Sphecho Service",
                  trigger: "7a",
                },
                {
                  value: "Sphecho Learn",
                  label: "Sphecho Learn",
                  trigger: "seleccionLearn",
                },
                {
                  value: "Sphecho Shop",
                  label: "Sphecho Shop",
                  trigger: "seleccionShop",
                },
                {
                  value: "Sphecho Scholar",
                  label: "Sphecho Scholar",
                  trigger: "seleccionScholar",
                },
                {
                  value: "Report an issue",
                  label: "Report an issue ",
                  trigger: "link3",
                },
                {
                  value: "Talk to an expert",
                  label: "Talk to an expert",
                  trigger: "link4",
                },
              ],
            },

            {
              id: "7a",
              message:
                "SPHECHO offers a wide range of services, including ST, PT, PT SE, B&P Therapy, and Hearing Consultation. ! Which of these Clinical Services would you like to know more about?",
              trigger: "seleccionService",
            },

            {
              id: "seleccionService",
              options: [
                {
                  value: "Speech Therapy",
                  label: "Speech Therapy",
                  trigger: "9",
                },
                {
                  value: "Occupational therapy",
                  label: "Occupational therapy",
                  trigger: "10",
                },
                {
                  value: "Educational Consultation",
                  label: "Educational Consultation",
                  trigger: "11",
                },

                {
                  value: "Physiotherapy",
                  label: "Physiotherapy",
                  trigger: "12",
                },
                {
                  value: "Counselling ",
                  label: "Counselling ",
                  trigger: "13",
                },
                { value: "Audiology", label: "Audiology ", trigger: "14" },
                {
                  value: "Behavioral and Psychological Therapy",
                  label: "Behavioral and Psychological Therapy",
                  trigger: "15",
                },
              ],
            },
            {
              id: "9",
              message:
                "Our certified SLPs who are specialized in assessment and intervention of communication and feeding disorders provide therapy for both pediatric and adult population groups.  Click the below link to schedule an appointment ",
              trigger: "link1",
            },
            {
              id: "link1",

              component: (
                <a href="https://qish.metahos.com/clientLogin?newClient=yes">
                  click here
                </a>
              ),
              end: true,
            },

            {
              id: "10",
              message:
                "Our Occupational therapists can aid in enhancing handwriting, daily living activities, visual- motor integration, postural control, sensory processing, and gross and fine motor skills. Click the below link to make an appointment",
              trigger: "link1",
            },

            {
              id: "11",
              message:
                "Our highly experienced and certified special educators create and implement individual educational therapy plans utilizing various approaches and techniques specific to the learning goals pertaining to each client. Click the below link to make an appointment.",
              trigger: "link1",
            },
            {
              id: "12",
              message:
                "Our Physical therapists evaluate and provide intervention for children and adults, aged birth through adolescence and beyond, who are experiencing developmental delays or functional Limitations as a result of a disorder, trauma, injury, or other disease process. Click the below link to make an appointment ",
              trigger: "link1",
            },

            {
              id: "13",
              message:
                "We provide specialized services primarily clinical psychology, psycho educational and neuro-psych rehabilitation – psychological assessment, psychotherapies, diagnosis of mental health problems and their management. Click the below link to make an appointment",
              trigger: "link1",
            },

            {
              id: "14",
              message:
                "Our Audiologists conduct consultation and evaluation using test battery to arrive at a clinical diagnosis.  Click the below link to make an appointment",
              trigger: "link1",
            },
            {
              id: "15",
              message:
                "We provide specialized services primarily clinical psychology, psycho educational and neuro-psych rehabilitation – psychological assessment, psychotherapies, diagnosis of mental health problems and their management. Click the below link to make an appointment ",
              trigger: "link1",
            },

            {
              id: "seleccionLearn",
              message:
                " Our training and certification platform has a comprehensive learning management system for all professionals and individuals who work alongside people of determination.",
              trigger: "learnoption",
            },
            {
              id: "learnoption",
              options: [
                {
                  value: "Courses",
                  label: "Courses",
                  trigger: "Courses",
                },
                {
                  value: "Webinar",
                  label: "Webinar",
                  trigger: "Webinar",
                },
              ],
            },
            {
              id: "Courses",
              message:
                "We provide a wide range of courses , training, and certifications for professionals to enhance their opportunities in the virtual education and clinical discipline.",
              trigger: "preguntaVuelta",
            },
            {
              id: "Webinar",
              message:
                "Online webinars provide educational training and strategies for experts with participation opportunities in lectures, workshops, and discussions.",
              trigger: "preguntaVuelta",
            },

            {
              id: "seleccionShop",
              options: [
                {
                  value: "Store",
                  label: "Store",
                  trigger: "Store",
                },
                {
                  value: "Resource Hub",
                  label: "Resource Hub",
                  trigger: "Resourcehub",
                },
                {
                  value: "Sell",
                  label: "Sell",
                  trigger: "Sell",
                },
              ],
            },
            {
              id: "link2",

              component: (
                <a href="https://sphecho-shop.metahos.com/">click here</a>
              ),
              end: true,
            },
            {
              id: "Store",
              options: [
                {
                  value: "Therapy materials",
                  label: "Therapy materials",
                  trigger: "link2",
                },
                {
                  value: "Play and development",
                  label: "Play and development",
                  trigger: "link2",
                },
                {
                  value: "Hearing aids and accessories",
                  label: "Hearing aids and accessories",
                  trigger: "link2",
                },
                {
                  value: "Starter kit",
                  label: "Starter kit",
                  trigger: "link2",
                },
                {
                  value: "Essentials",
                  label: "Essentials",
                  trigger: "link2",
                },
              ],
            },
            {
              id: "Resourcehub",
              options: [
                {
                  value: "Therapy materials",
                  label: "Therapy materials",
                  trigger: "link2",
                },
                {
                  value: "Play and development",
                  label: "Play and development",
                  trigger: "link2",
                },
                {
                  value: "Hearing aids and accessories",
                  label: "Hearing aids and accessories",
                  trigger: "link2",
                },
                {
                  value: "Starter kit",
                  label: "Starter kit",
                  trigger: "link2",
                },
                {
                  value: "Essentials",
                  label: "Essentials",
                  trigger: "link2",
                },
              ],
            },

            {
              id: "Sell",
              message:
                "Please write a description about your request and one of our Sphecho support agents will get back to you within 24hrs.",

              trigger: "link6",
            },
            {
              id: "link6",
              component: (
                <a
                  href="mailto: shop@sphecho.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Email
                </a>
              ),

              trigger: "preguntaVuelta",
            },

            {
              id: "seleccionScholar",
              message:
                "The Scholar section is under construction .Its Coming soon, ",
              trigger: "preguntaVuelta",
            },

            {
              id: "preguntaVuelta",
              message: "Do you need to know anything else?🧐",
              trigger: "respuestaVuelta",
            },
            {
              id: "respuestaVuelta",
              options: [
                { value: "y", label: "Yes👍", trigger: "6a" },
                { value: "n", label: "No👎", trigger: "6b" },
              ],
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}
