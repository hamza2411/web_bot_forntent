import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Input,
  Modal,
  Row,
  Text,
} from "@nextui-org/react";

import Image from "next/image";
import { Mail } from "./component/mail";
import { Password } from "./component/password";
import React from "react";

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const features = [
    {
      name: "Competitive exchange rates",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GlobeAltIcon,
    },
    {
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ScaleIcon,
    },
    {
      name: "Transfers are instant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: LightningBoltIcon,
    },
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: AnnotationIcon,
    },
  ];
  return (
    <div className="z-10 ">
      <div className=" md:flex md:flex-row bg-header bg-cover bg-fixed ">
        <div className="justify-center flex pt-24 flex-col items-center  md:flex-row-reverse w-full ">
          <div className="md:pt-10 md:w-1/2 items-center flex w-4/5 ">
            <div>
              <Image src="/2 1.png" width={911} height={625} className=" " />
            </div>
          </div>

          <div className=" md:w-1/2 items-center flex flex-col md:pt-16 pb-16 pt-5 w-4/5 ">
            <Text
              className=" text-3xl xl:text-6xl lg:text-4xl md:text-3xl pb-2"
              h1
              css={{
                textGradient: "45deg, $purple600 10%, $pink600 100%",
              }}
              weight="bold"
            >
              Logo example
              <br />
              Lorem ipsum dolor sit 
              
              
            </Text>

            <div className="md:pt-16 pt-10">
              <Button
                auto
                color="gradient"
                shadow
                onClick={handler}
                size="lg"
                className="z-0"
              >
                Sing in
              </Button>
              <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
                <Modal.Header>
                  <Text id="modal-title" size={20}>
                    Welcome to
                    <Text b size={18}>
                      Logo
                    </Text>
                  </Text>
                </Modal.Header>
                <Modal.Body>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email"
                    contentLeft={<Mail fill="currentColor" />}
                  />
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Password"
                    contentLeft={<Password fill="currentColor" />}
                  />
                  <Row justify="space-between">
                    <Checkbox>
                      <Text size={14}>Remember me</Text>
                    </Checkbox>
                    <Text size={14}>Forgot password?</Text>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button auto flat color="error" onClick={closeHandler}>
                    Close
                  </Button>
                  <Button auto onClick={closeHandler}>
                    Sign in
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-10 ">
            <div className="space-y-10 md:space-y-0 md:flex md:flex-row md:gap-x-8 md:gap-y-10  flex-col flex items-center   ">
              {features.map((feature) => (
                // <div key={feature.name} className="relative  ">
                //   <Card
                //     isHoverable
                //     variant="bordered"
                //     css={{ p: "$5", mw: "400px", h: "$90" ,background: "$gray50"}}
                //   >
                //     <Card.Body>
                //       <Text>
                //         {" "}
                //         {feature.name}
                //         <br />
                //         {feature.description}
                //       </Text>
                //     </Card.Body>
                //   </Card>
                // </div>

                
                <div className="w-full">
                  <Card isHoverable css={{ w: "100%", h: "400px" }}>
                    <Card.Header
                      css={{ position: "absolute", zIndex: 1, top: 5 }}
                    >
                      <Col>
                        <Text
                          color="white"
                          size={28}
                          weight="bold"
                          transform="uppercase"
                        >
                          New
                        </Text>
                        <Text>Acme camera</Text>
                      </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0,w: "100%" }} className="bg-card w-96 bg-cover bg-center">
                      {/* <Card.Image
                        src="https://nextui.org/images/card-example-6.jpeg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Card example background"
                      /> */}
                      
                  
                    </Card.Body>
                    <Card.Footer
                      isBlurred
                      css={{
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop:
                          "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                      }}
                    >
                      <Row>
                        <Col>
                          <Text color="white" size={12}>
                            Lorem ipsum dolor sit amet consect adipisicing elit.
                            Possimus magnam voluptatum cupiditate veritatis in
                            accusamus quisquam.
                          </Text>
                          <Text color="white" size={12}>
                            Get notified.
                          </Text>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex-row md:flex flex flex-col bg-pattern bg-cover bg-center h-full pb-20 pt-10">
        <div className="text-white w-full flex flex-col justify-center items-center pt-10 ">
          <div className="text-6xl ">Title</div>
          <div className="text-2xl pt-4">
            Lorem ipsum dolor <br /> sit amet consect adipisicing elit.
          </div>
        </div>
        <div className="justify-center flex flex-col w-full lg:pl-32 items-center">
          <div className="md:z-10 md:pt-10 h-20 md:pl-10 pt-10 mx-5">
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", p: "10px", h: "180px", bgBlur: "#fffff66" }}
              className=""
            >
              <Card.Body>
                <Text>
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </Text>
              </Card.Body>
            </Card>
          </div>
          <div className="md:z-20 md:pt-24 pt-44 mx-5 md:pr-20 ">
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", p: "10px", h: "180px" }}
              className=""
            >
              <Card.Body>
                <Text>
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis
                  <br />A hoverable card.
                </Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
