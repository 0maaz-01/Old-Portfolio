import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  max-w:1800px;
  justify-content: center;
  align-items: flex-start;
  width: 90vw;
  padding:20px;
  box-sizing: border-box;
  max-width:1500px;
  gap:40px;
  margin-left:40px;
  margin-right:40px;


  @media (max-width: 640px) {
      gap: clamp(10px, 20vw, 40px);
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }


  @media (min-width: 1024px) {
    flex-direction: row;
  }



`;

const Card1 = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgb(187, 0, 255);
    filter: brightness(1.1);
  }

  @media (max-width: 640px) {
    width: clamp(300px, 80vw, 600px);
    height: clamp(200px, 40vh, 400px);

    transform: translateY(-10px);
    box-shadow: 0 0 10px 4px rgb(187, 0, 255);
    filter: brightness(1.1);
  }

  @media (min-width: 641px) and (max-width: 1023px) {
    width: clamp(600px, 80vw, 900px);
    height: clamp(400px, 70vh, 700px);

    transform: translateY(-10px);
    box-shadow: 0 0 10px 4px rgb(187, 0, 255);
    filter: brightness(1.1);
  }

  @media (min-width: 1024px) {
    width: clamp(600px, 60vw, 1200px);
    height: clamp(700px, 80vh, 1000px);

    transform: translateY(-10px);
    box-shadow: 0 0 10px 4px rgb(87, 86, 87);
    filter: brightness(1.1);
  }
`;

const Card2 = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  transition: all 0.5s ease-in-out;
  overflow:auto;



  @media (max-width: 640px) {
    width: clamp(300px, 80vw, 600px);
    height: clamp(150px, 30vw, 400px);

    transform: translateY(-10px);
    box-shadow: 0 0 10px 4px rgb(87, 86, 87);
    filter: brightness(1.1);

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 10px 4px rgb(187, 0, 255);
        filter: brightness(1.1);
    }
  }

  @media (min-width: 641px) and (max-width: 1023px) {
    width: clamp(600px, 80vw, 900px);
    height: clamp(300px, 40vh, 500px);

    transform: translateY(-10px);
    box-shadow: 0 0 10px 4px rgb(87, 86, 87);
    filter: brightness(1.1);

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 10px 4px rgb(187, 0, 255);
      filter: brightness(1.1);
    }
  }

  @media (min-width: 1023px) {
    width: clamp(600px, 40vw, 1200px);
    height: clamp(700px, 80vh, 1000px);

    min-width:400px;

    transform: translateY(-10px);
    box-shadow: 0 0 10px 4px rgb(87, 86, 87);
    filter: brightness(1.1);


    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 10px 4px rgb(187, 0, 255);
      filter: brightness(1.1);
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    gap: clamp(20px, 5vh, 60px);
  }
`;

const Title = styled.h2`
  @media (max-width: 640px) {
     font-size: clamp(16px, 5vw, 24px);
  }
  @media (min-width: 641px) and (max-width: 1023px) {
     font-size: clamp(24px, 5vw, 48px);
  }
  @media (min-width: 1024px) {
     font-size: clamp(24px, 5vw, 36px);
     display:flex;
     flex-direction: column;
  }
  color: #fff;

`;

const Description = styled.p`
  @media (max-width: 640px) {
     font-size: clamp(12px, 1vw, 20px);
  }
  @media (min-width: 641px) and (max-width: 1023px)  {
     font-size: clamp(20px, 3vw, 36px);
  }
  @media (min-width: 1023px)  {
     font-size: clamp(16px, 3vw, 25px);
     margin-top:40px;
  }
  overflow:auto;
  color: #ddd;
  margin: 0;
  flex-grow: 1;
`;

const Button = styled.a`
  background:rgb(156, 6, 211);
  color: #ffffff;
  border-radius : 8px;
  padding: 4px 8px;
  margin-right:8px;
  border-radius:20px;

  @media (max-width: 640px) {
     font-size: clamp(6px, 3vw, 16px);
     right:0;
     top:0;
  }

  @media (min-width: 641px) and (max-width: 1023px) {
     font-size: clamp(20px, 3vw, 50px);
     right:0;
     top:0;
  }

  @media (min-width: 1023px) {
     font-size: clamp(10px, 2vw, 24px);
     border-radius:40px;
     padding:10px 20px;
     margin-top:clamp(60px, 5vh, 100px);
  }

  font-weight: 600;
  text-decoration: none;
  align-self: flex-start;
  margin-top: 20px;
  position:absolute;

`;


const ProjectCard = ({ project }) => {
  return (
    <CardContainer>
      <a href={project.webapp}>
        <Card1>
          <img
            src={project.image}
            alt="Project Preview"
            style={{ width: "100%", height: "100%", borderRadius: "10px", objectFit: "cover" }}
          />
        </Card1>
      </a>

      <Card2>
        <Details>
          <Title>{project.title}</Title>
              <Button href={project.github} target="_blank" rel="noreferrer">
                  View Code
              </Button>
              <Description>{project.description}</Description>
          {/*<Center>
              <Button2 href={project.github} target="_blank" rel="noreferrer">
                      View Code
              </Button2>
          </Center>*/}

        </Details>
      </Card2>
    </CardContainer>
  );
};
export default ProjectCard;