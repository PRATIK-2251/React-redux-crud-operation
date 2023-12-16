import axios from "axios";

function axionsRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000,
      });
}

const GetApiDetails = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axionsRequest("http://localhost:3000/details", "GET", headers, {});
};

const PostApiDetails = (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axionsRequest("http://localhost:3000/details", "POST", headers, data);
};

const PutApiDetails = (data, id) => {
  console.log(data, id);
  const headers = {
    "Content-Type": "application/json",
  };
  return axionsRequest(
    `http://localhost:3000/details/${id}`,
    "PUT",
    headers,
    data
  );
};

const DeleteApiDetails = (id) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axionsRequest(
    `http://localhost:3000/details/${id}`,
    "DELETE",
    headers,
    {}
  );
};

export { GetApiDetails, PostApiDetails, PutApiDetails, DeleteApiDetails };
