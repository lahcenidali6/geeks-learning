interface ApiResponse<T> {
  status: number;
  data: T;
  message: string;
}

function parseResponse<T>(raw: any): ApiResponse<T> {
  return raw as ApiResponse<T>;
}


type User = { id: number; name: string };

const rawResponse = {
  status: 200,
  data: { id: 1, name: "Alice" },
  message: "Success"
};

const userResponse = parseResponse<User>(rawResponse);
console.log(userResponse.data.name); 
