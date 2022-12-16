import styles from "./AboutUs.module.scss";

const AboutUs: React.FC = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.centerContent}`}>
        <p>Why should you purchase from us?</p>
        <p>
          The benefit of purchasing from us is that you will save both time and
          money. We concentrate on preparing for the year's events two to three
          months in advance, with the idea following the trend of the market.
          All you have to do is look for the product in the search or
          suggestions section and purchase it to help you with your work.
        </p>
        <p className={`${styles.leftAlign}`}>
          - Customers may purchase at any moment using the easy and completely
          secure payment method.
        </p>
        <p className={`${styles.leftAlign}`}>
          - The policy to protect our customers' interests has been strictly
          enforced:
        </p>
        <p className={`${styles.leftAlign}`}>
          &bull; The customer will receive the item exactly as described.
        </p>
        <p className={`${styles.leftAlign}`}>
          &bull; Complete user information confidentiality.
        </p>
        <p className={`${styles.leftAlign}`}>
          &bull; Quickly address issues that arise throughout the purchase or
          compensation processes until both parties reach an agreement.
        </p>
      </div>
      <div className={`${styles.sideContainer}`}>
        <div className={`${styles.centerContent} ${styles.whiteBorder}`}>
          <p>Welcome to Freelance Design BT !</p>
          <p>
            Freelance Design BT is a team that works in the field of
            multi-product visual design. We have been designing products for
            sellers on AMAZON, ETSY, EBAY platforms, ZAZZLE, and other platforms
            for over 5 years, and you can see our products in the shop category.
            This is our only official website. Initially, our team members only
            worked as individuals, but after we all met and worked together, we
            realized that it was necessary to gather as a team to support each
            other in the design implementation, ideation, style prediction, and
            future design direction.
          </p>
        </div>
        <div className={`${styles.subContainer}`}>
          <div className={`${styles.centerContent}`}>
            <p>Product development</p>
            <p>
              We wouldn't limit ourselves to the fixed products we offer; in the
              "Costum" area, you can make your own decisions to customize the
              desired product. We still focus on creating a variety of styles
              based on customer preferences, and we offer everything you
              require.
            </p>
            <p>
              We really do not limit the fixed products we offer. In contrast,
              in the "custom" section, you can make your own choices to
              personalize the desired product. Furthermore, our development
              strategy remains to create numerous designs based on customer
              preferences, and we have everything you need.
            </p>
          </div>
          <div className={`${styles.centerContent} ${styles.whiteBorder}`}>
            <p>Product quality commitment</p>
            <p>We base our products on the following criteria:</p>
            <p className={`${styles.leftAlign}`}>
              &bull; No images of poor quality.
            </p>
            <p className={`${styles.leftAlign}`}>
              &bull; No plagiarizing other store's images.
            </p>
            <p className={`${styles.leftAlign}`}>
              &bull; No images that violate societal norms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
