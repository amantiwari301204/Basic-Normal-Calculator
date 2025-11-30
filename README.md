Basic Normal Calculator

A simple calculator that performs basic arithmetic operations: addition, subtraction, multiplication, division, and percentage.
Built using HTML, CSS, and JavaScript, with optional support for the math.js library.

🔧 Running the Project
Modern browsers block JavaScript when opening files directly using the file:// protocol.
Because of this, the calculator will not work if you double-click index.html.

You must run it through a local HTTP server.

Steps
git clone https://github.com/amantiwari301204/Basic-Normal-Calculator
cd Basic-Normal-Calculator
python3 -m http.server 8080

Now open:
http://localhost:8080
Your calculator will work normally.

❗ Why a server is required
When you open the file like this:
file:///home/aman/Basic-Normal-Calculator/index.html
The browser assigns origin = null and blocks loading script.js for security reasons (CORS rules).
Running a local server fixes this because the page loads using:
http://localhost
which is a valid origin.
