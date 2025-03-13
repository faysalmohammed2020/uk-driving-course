import { Html } from "@react-email/components";
import { Heading } from "lucide-react";
import * as React from "react";

type CoursePurchaseSuccessProps = {
  name: string;
};

export default function CoursePurchaseSuccess({ name }: CoursePurchaseSuccessProps) {
  return (
    <Html>
      <div
        style={{
          backgroundColor: "#f4f7fa",
          fontFamily: "'Roboto', sans-serif",
          padding: "40px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            maxWidth: "600px",
            width: "100%",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Heading
            style={{
              color: "#1a202c",
              fontSize: "32px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
          >
            Course Buy Successfull!!!
          </Heading>

          <div
            style={{
              background: "#f9fafb",
              borderRadius: "10px",
              padding: "30px 20px",
              marginBottom: "20px",
              border: "1px solid #e0e0e0",
            }}
          >
            <h1>Congratulations, {name}!</h1>
            <h3
              style={{
                color: "#4a5568",
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Your Course Purchase was Successful!
            </h3>
            <p
              style={{
                color: "#718096",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              Thank you for purchasing the <strong>SERU Assessment Course - 4</strong>. Your purchase is confirmed and we're excited to have you on this learning journey!
            </p>

            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                marginBottom: "15px",
              }}
            >
              <h2
                style={{
                  color: "#2b6cb0",
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Course Details:
              </h2>
              <p
                style={{
                  color: "#4a5568",
                  fontSize: "16px",
                  marginBottom: "5px",
                }}
              >
                <strong>Course Name:</strong> SERU Assessment Course - 4
              </p>
              <p
                style={{
                  color: "#4a5568",
                  fontSize: "16px",
                }}
              >
                <strong>Purchase Date:</strong> 13/03/2025
              </p>
            </div>

            <p
              style={{
                color: "#4a5568",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              We are thrilled to have you on board! Stay tuned for your course materials and get ready for an amazing learning experience.
            </p>

            <div
              style={{
                marginTop: "30px",
                paddingTop: "20px",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#718096",
                  marginBottom: "10px",
                }}
              >
                Need help? Contact our support team anytime, and we'll assist you promptly.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#718096",
                  marginBottom: "10px",
                }}
              >
                If you did not make this purchase, please disregard this email.
              </p>
            </div>
          </div>

          <footer
            style={{
              color: "#718096",
              fontSize: "14px",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            <p style={{ margin: "0" }}>© 2025 Birds Of Eden. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </Html>
  );
}
