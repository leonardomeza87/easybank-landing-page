import { useState } from "react";

import IconOnline from "../images/icon-online.svg";
import IconBudgeting from "../images/icon-budgeting.svg";
import IconOnboarding from "../images/icon-onboarding.svg";
import IconAPI from "../images/icon-api.svg";

const Features = () => {
  const [visible, setVisible] = useState({});

  // Make images visible when finished loading
  const handleVisible = (index) => {
    setVisible({ ...visible, [index]: true });
  };

  return (
    <section className="features">
      <div className="container">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <ul>
          <li>
            <img
              src={IconOnline}
              alt="Online Banking"
              onLoad={() => {
                handleVisible(0);
              }}
              className={visible[0] ? "visible" : undefined}
            />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </li>
          <li>
            <img
              src={IconBudgeting}
              alt="Simple Budgeting"
              onLoad={() => {
                handleVisible(1);
              }}
              className={visible[1] ? "visible" : undefined}
            />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </li>
          <li>
            <img
              src={IconOnboarding}
              alt="Fast Onboarding"
              onLoad={() => {
                handleVisible(2);
              }}
              className={visible[2] ? "visible" : undefined}
            />
            <h3>Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </li>
          <li>
            <img
              src={IconAPI}
              alt="Open API"
              onLoad={() => {
                handleVisible(3);
              }}
              className={visible[3] ? "visible" : undefined}
            />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
