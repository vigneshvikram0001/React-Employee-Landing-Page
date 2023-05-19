import React from "react";
import { Card, CardHeader, CardBody, Flex, Avatar, Box, Text, Heading } from "@chakra-ui/react";
import avatar from "../assets/man-portrait1x1.jpg";
import "./Style.css";

function Team() {
  return (
    <div id="team">
      <h2 className="head">Our Team</h2>
      <div className="cards">
      <Card maxW="md" className="team-card">
        <CardHeader>
          <Flex spacing="4">
            <Flex
              flex="1"
              gap="4"
              alignItems="center"
            //   justifyContent="center"
              flexWrap="wrap"
            >
              <Avatar name="Segun Adebayo" className="avatar" src={avatar} />
              <Box className="team-card-box">
                <Heading size="sm" className="team-card-head">Segun Adebayo</Heading>
                <Text className="team-card-text">Creator, Chakra UI</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text className="card-body-text">
            "With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen."
          </Text>
        </CardBody>
      </Card>
      <Card maxW="md" className="team-card">
        <CardHeader>
          <Flex spacing="4">
            <Flex
              flex="1"
              gap="4"
              alignItems="center"
            //   justifyContent="center"
              flexWrap="wrap"
            >
              <Avatar name="Segun Adebayo" className="avatar" src={avatar} />
              <Box className="team-card-box">
                <Heading size="sm" className="team-card-head">Segun Adebayo</Heading>
                <Text className="team-card-text">Creator, Chakra UI</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text className="card-body-text">
            "With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen."
          </Text>
        </CardBody>
      </Card>
      <Card maxW="md" className="team-card">
        <CardHeader>
          <Flex spacing="4">
            <Flex
              flex="1"
              gap="4"
              alignItems="center"
            //   justifyContent="center"
              flexWrap="wrap"
            >
              <Avatar name="Segun Adebayo" className="avatar" src={avatar} />
              <Box className="team-card-box">
                <Heading size="sm" className="team-card-head">Segun Adebayo</Heading>
                <Text className="team-card-text">Creator, Chakra UI</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text className="card-body-text">
            "With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen."
          </Text>
        </CardBody>
      </Card>
      </div>
    </div>
  );
}

export default Team;
