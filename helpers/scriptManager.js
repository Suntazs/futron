// ScriptManager.js

import { useEffect } from "react";
import { useConsent } from "../context/consentContext";
import {
  GOOGLE_ANALYTICS_ID,
  FACEBOOK_PIXEL_ID,
  GOOGLE_ADS_ID,
} from "../constants";

const ScriptManager = () => {
  const { consent } = useConsent();

  useEffect(() => {
    if (consent.analytics) {
      console.log("Loading Google Analytics script...");
      // Load Google Analytics script
      window[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = false;
      // initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GOOGLE_ANALYTICS_ID);
    } else {
      console.log("Unloading Google Analytics script...");
      // Unload Google Analytics script
      window[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = true;
      console.log("Google Analytics script disabled");
    }

    if (consent.marketing) {
      console.log("Loading Facebook Pixel script...");
      // Load Facebook Pixel script
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", FACEBOOK_PIXEL_ID);
      fbq("track", "PageView");

      // Load Google Ads script
      !(function (c, h, i, m, p) {
        (m = c.createElement(h)),
          (p = c.getElementsByTagName(h)[0]),
          (m.async = 1),
          (m.src = i),
          p.parentNode.insertBefore(m, p);
      })(
        document,
        "script",
        "https://www.googletagmanager.com/gtag/js?id=" + GOOGLE_ADS_ID
      );
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GOOGLE_ADS_ID);
    } else {
      // Unload Facebook Pixel script
      console.log("Facebook Pixel script disabled");

      // Unload Google Ads script
      console.log("Google Ads script disabled");
    }
  }, [consent]);

  return null;
};

export default ScriptManager;
