let data: any;

data = "Hello World";
console.log("String:", data);

data = 42;
console.log("Number:", data);

data = true;
console.log("Boolean:", data);

data = { name: "Saranya", age: 22 };
console.log("Object:", data);

data = [1, "two", true];
console.log("Array with mixed types:", data);

// Use case: receiving data from an unknown API
function handleApiResponse(response: any) {
    console.log("API Response:", response);
}

handleApiResponse("Success!");
handleApiResponse({ status: 200, message: "OK" });
