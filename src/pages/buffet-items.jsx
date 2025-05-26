import React from "react";
import { useState } from "react";
import { Tabs, TabPanel } from "react-tabs";
import Layout from "../components/layout/Layout";
import PageBanner from "../components/PageBanner";
import Image from "next/image";

const BuffetItems = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const menus = [
    {
      items: [
        {
          image: "/assets/images/demo/menu1.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu2.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu3.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu4.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu5.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu6.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu7.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu8.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu1.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu2.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu3.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu1.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu2.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu3.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu1.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu2.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu3.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu1.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu2.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu3.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu1.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu2.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu3.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu4.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu5.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu6.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu7.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu8.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu1.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu2.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu3.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu1.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu2.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu3.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu1.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu2.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu3.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu1.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu2.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
        {
          image: "/assets/images/demo/menu3.webp",
          price: 32,
          name: "Delicious Sweets",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Duis aute irure dolor in reprehenderit.",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="rac_main_wrapper">
        <PageBanner
          pageTitle={`Buffet-Items`}
          parents={{
            title: "Home",
            link: "/",
          }}
        />
        <div className="rac_section rac_menu_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="rac_section_heading">
                  <h5>Buffet Items</h5>
                  <h3>Most Popular Food In The World</h3>
                </div>
              </div>

              <Tabs
                className="col-12"
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                {menus.map((category, index) => (
                  <TabPanel className="mt-4" key={index}>
                    <div className="row">
                      {category.items.map((product, i) => (
                        <div className="col-sm-6" key={i}>
                          <div className="rac_menu_box">
                            <div className="h-42 w-52">
                              <Image
                                height={1000}
                                width={1000}
                                alt=""
                                src={product.image}
                                className="img-fluid"
                              />
                            </div>
                            <div className="rac_menu_text">
                              <div className="rac_menu_title">
                                <h4>{product.name}</h4>
                                <h2>Tk. {product.price}</h2>
                              </div>
                              <p>{product.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuffetItems;
