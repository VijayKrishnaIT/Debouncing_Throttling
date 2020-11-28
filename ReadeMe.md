# Debouncing

    - consider the latest request ignore previous request.

    - if we consider the cart in ecommerce application.

    - from the last request onwards it will be executing.

    Laptop 10000

    Mobile 20000

    ----------------------

    Pay     30000

    - To complete payment, payment gateway taking 5 seconds.

    - once if we click the button we have to wait for 5 minutes.

    - 0sec 1sec 2sec 3sec 4sec 5sec

---

    - without waiting you click at 2sec.

    - ----------0sec 1sec 2sec 3sec 4sec

    - without waiting you click at 4sec.

    - -------------------------------0sec 1sec 2sec 3sec 4sec 5sec.

# Higher Order Functions

    - if we want to write customizable logic then we need to go for HOF.

    - debounce is higher order function.

    - Netscape compnay will approve our code as global code.

    - clearTimeout is the predefined function.

# How to debugging the code?

    - add the break points.

# Throttling

    - consider the first request and ignore all the other requests. process is called throttling.

    - throttling is opposite to debouncing.

    > Clicked the button

    0sec 1sec 2sec 3sec 4sec 5sec

    > Wait till 5 seconds if we keep on clicking no use.
