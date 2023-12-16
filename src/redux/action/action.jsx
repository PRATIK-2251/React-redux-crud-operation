import {
  GetApiDetails,
  PostApiDetails,
  PutApiDetails,
  DeleteApiDetails,
} from "../../api/axiosRequest";
const GetApiAction = () => {
  return function (dispatch) {
    return GetApiDetails().then((res) => {
      console.log(res);
      dispatch({
        type: "GET_DETAILS",
        payload: res.data,
      });
    });
  };
};

const PostApiAction = (requestData) => {
  return function (dispatch) {
    return PostApiDetails(requestData).then((res) => {
      console.log(res);
    });
  };
};

const PutApiAction = (data, id) => {
  return function (dispatch) {
    return PutApiDetails(data, id).then((res) => {
      console.log(res);
    });
  };
};

const DeleteApiAction = (requestId) => {
  return function (dispatch) {
    return DeleteApiDetails(requestId).then((res) => {
      console.log(res);
    });
  };
};

export { GetApiAction, PostApiAction, PutApiAction, DeleteApiAction };
