$(document).ready(function () {
  $("#donate-now").prop("disabled", true);
  $("#tAndC").change(function () {
    if ($(this).is(":checked")) {
      $("#donate-now").prop("disabled", false);
    } else {
      $("#donate-now").prop("disabled", true);
    }
  });
  $("#donate-now").on("click", async function (e) {
    alert("hello");
    var amount = $("#oneTimeForm input[name='money']:checked").val();
    if (amount === "custom") {
      amount = $("#customAmount").val();
    }
    $("#oneTimeForm").prepend(
      '<input type="hidden" name="amount" value="' + amount + '">'
    );

    e.preventDefault();
    bearCharge = $("#bearCharge").prop("checked");
    var final_amount = amount;
    if (bearCharge == true) {
      final_amount = final_amount * 1.03;
    }
    console.log(final_amount);
    const response = await fetch("/create/orderId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: final_amount * 100,
        name: $(".firstName").val() + " " + $(".secondName").val(),
        email: $(".email").val(),
        phone: $(".phone").val(),
        bearCharges: $("#bearCharge").prop("checked"),
      }),
    });
    const resp = await response.json();
    const data_go = JSON.stringify(resp);
    const data = JSON.parse(data_go);
    console.log(data);
    const options = {
      key: "rzp_test_rtjt3Si2Z4JE7f",
      amount: data.amount,
      currency: "INR",
      order_id: data.orderId,
      name: "Real happiness of Life Foundation",
      description: "Digital Donation",
      image: "assets/images/logo.png",
      notes: {
        name: $(".firstName").val() + " " + $(".secondName").val(),
        email: $(".email-address").val(),
        phone: $(".phone").val(),
        pan: $(".pan-no").val(),
        address: $(".resi-address").val(),
        city: $(".resi-city").val(),
        zip: $(".pincode").val(),
      },
      prefill: {
        name: $(".firstName").val() + " " + $(".secondName").val(),
        email: $(".email").val(),
        phone: $(".phone").val(),
      },
      handler: async function (response) {
        alert(response.razorpay_payment_id);
        $("#oneTimeForm").append(`
        <style>
          #payment-success {
            background: #f5f5f5;
            padding: 2% 5%;
          }
        </style>
          <div id="payment-success">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="payment-success-content">
                    <div class="payment-success-icon">
                      <img src="img/check.png" alt="" />
                    </div>
                    <div class="payment-success-text">
                      <h2>Payment Successful</h2>
                      <p>
                        Thank You so much for donating, you're indeed making a
                        difference in the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);
        fetch("/get/paymentDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Data sent successfully!");
            } else {
              console.log("Error sending data.");
            }
          })
          .catch((error) => {
            console.log("Request failed:", error);
          });
      },
      theme: {
        color: "#e83e8c",
      },
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  });
});

// MONTHLY DONATION
$("#donate-now-btn").prop("disabled", true);
$("#termsAndConditions").change(function () {
  if ($(this).is(":checked")) {
    $("#donate-now-btn").prop("disabled", false);
  } else {
    $("#donate-now-btn").prop("disabled", true);
  }
});
$("#donate-now-btn").on("click", async function (e) {
  radioAmount = $("input[name='money']:checked", "#monthlyForm").val();
  if (radioAmount === "custom") {
    $("#customMoney").prop("disabled", false);
    amount = $("#customMoney").val();
  } else {
    amount = radioAmount;
  }
  console.log(amount);
  $("#monthlyForm").append(
    "<input type='hidden' value='" + amount + "' name='amount'>"
  );
  alert("hello");
  e.preventDefault();
  const response = await fetch("/create/subscriptionId", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: amount * 100,
      name: $(".fName").val() + " " + $(".sName").val(),
      email: $(".email-address").val(),
      phone: $(".mobile").val(),
      bearCharges: $("#bearCharges").prop("checked"),
      pan: $(".pan").val(),
      address: $(".address").val(),
      city: $(".city").val(),
      zip: $(".zip").val(),
    }),
  });
  const resp = await response.json();
  const data_go = JSON.stringify(resp);
  const data = JSON.parse(data_go);
  console.log(data);
  const options = {
    key: "rzp_test_rtjt3Si2Z4JE7f",
    amount: data.amount,
    currency: "INR",
    subscription_id: data.subscription_id,
    name: "Real happiness of Life Foundation",
    description: "Digital Donation",
    image: "assets/images/logo.png",
    notes: {
      name: $(".fName").val() + " " + $(".sName").val(),
      email: $(".email-address").val(),
      phone: $(".mobile").val(),
      pan: $(".pan").val(),
      address: $(".address").val(),
      city: $(".city").val(),
      zip: $(".zip").val(),
    },
    prefill: {
      name: $(".fName").val() + " " + $(".sName").val(),
      email: $(".email-address").val(),
      contact: $(".mobile").val(),
    },
    handler: function (response) {
      alert(response.razorpay_payment_id);
      $("#monthlyForm").append(`
        <style>
          #payment-success {
            background: #f5f5f5;
            padding: 2% 5%;
          }
        </style>
        <div id="payment-success">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="payment-success-content">
                  <div class="payment-success-icon">
                    <img src="img/check.png" alt="" />
                  </div>
                  <div class="payment-success-text">
                    <h2>Payment Successful</h2>
                    <p>
                      Thank You so much for donating, you're indeed making a
                      difference in the world.
                      Now you will be charged ₹${amount} every month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `);
    },
    theme: {
      color: "#e83e8c",
    },
  };
  const rzp1 = new Razorpay(options);
  rzp1.open();
  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });
});
