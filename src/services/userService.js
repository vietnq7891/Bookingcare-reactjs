import axios from "../axios";
// Hàm để lấy token từ localStorage
const getToken = () => {
    return localStorage.getItem("token");
};

// Hàm gọi API với token
const callApiWithToken = (url, method, data) => {
    const token = getToken();

    const config = {
        method: method,
        url: url,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: data,
    };

    return axios(config);
};

const handleLoginApi = (username, password) => {
    return axios.post("/api/login", { username, password });
};

const getAllUsers = (inputId) => {
    const url = `/api/get-all-users?id=${inputId}`;
    return callApiWithToken(url, "GET", null);
};

// const createNewUserService = (data) => {
//     const url = "/api/create-new-user";
//     return callApiWithToken(url, "POST", data);
// };

const createNewUserService = (userData) => {
    console.log("user", userData);

    // Tạo FormData object để chứa dữ liệu người dùng và tệp tin avatar
    const formData = new FormData();

    // Kiểm tra xem userData có chứa avatar hay không trước khi đưa vào FormData
    if (userData.avatar) {
        formData.append("avatar", userData.avatar);
        delete userData.avatar;
    } else {
        formData.append("avatar", null);
    }

    // Đưa dữ liệu người dùng vào FormData
    formData.append("user", JSON.stringify(userData));

    const url = "/api/create-new-user";
    for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
    }
    // Gọi API với method POST và truyền FormData
    return callApiWithToken(url, "POST", formData);
};

const editUserService = (inputData) => {
    // Tạo FormData object để chứa dữ liệu người dùng và tệp tin avatar
    const formData = new FormData();

    // Kiểm tra xem userData có chứa avatar hay không trước khi đưa vào FormData
    if (inputData.avatar) {
        formData.append("avatar", inputData.avatar);
        delete inputData.avatar;
    } else {
        formData.append("avatar", null);
    }

    // Đưa dữ liệu người dùng vào FormData
    formData.append("user", JSON.stringify(inputData));

    const url = "/api/edit-user";

    // Gọi API với method POST và truyền FormData
    return callApiWithToken(url, "PUT", formData);
};

// const editUserService = (inputData) => {
//     const url = "/api/edit-user";
//     return callApiWithToken(url, "PUT", inputData);
// };

const deleteUSerService = (userId) => {
    const url = "/api/delete-user";
    return callApiWithToken(url, "DELETE", {
        id: userId,
    });
};

const getAllCodeService = (inputType) => {
    const url = `/api/allcode?type=${inputType}`;
    return callApiWithToken(url, "GET", null);
};

const getTopDoctorHomeService = (limit) => {
    const url = `/api/top-doctor-home?limit=${limit}`;
    return callApiWithToken(url, "GET", null);
};

const getAllDoctors = () => {
    const url = `/api/get-all-doctors`;
    return callApiWithToken(url, "GET", null);
};

const saveDetailDoctorService = (data) => {
    const url = "/api/save-infor-doctors";
    return callApiWithToken(url, "POST", data);
};

const getDetailInforDoctor = (inputId) => {
    const url = `/api/get-detail-doctor-by-id?id=${inputId}`;
    return callApiWithToken(url, "GET", null);
};

const saveBulkScheduleDoctor = (data) => {
    const url = "/api/bulk-create-schedule";
    return callApiWithToken(url, "POST", data);
};

const getScheduleDoctorByDate = (doctorId, date) => {
    const url = `/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`;
    return callApiWithToken(url, "GET", null);
};
const getExtraInforDoctorById = (doctorId) => {
    const url = `/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`;
    return callApiWithToken(url, "GET", null);
};

const getProfileDoctorById = (doctorId) => {
    const url = `/api/get-profile-doctor-by-id?doctorId=${doctorId}`;
    return callApiWithToken(url, "GET", null);
};

const postPatientBookAppointment = (data) => {
    const url = "/api/patient-book-appointment";
    return callApiWithToken(url, "POST", data);
};
const postVerifyBookAppointment = (data) => {
    const url = "/api/verify-book-appointment";
    return callApiWithToken(url, "POST", data);
};

const postCancelBookAppointment = (data) => {
    const url = "/api/cancel-book-appointment";
    return callApiWithToken(url, "POST", data);
};

// ================================ Specialty =============================
const createNewSpecialty = (data) => {
    const url = "/api/create-new-specialty";
    return callApiWithToken(url, "POST", data);
};

const getAllSpecialty = () => {
    const url = `/api/get-specialty`;
    return callApiWithToken(url, "GET", null);
};

const deleteSpecialty = (specialtyId) => {
    const url = "/api/delete-specialty";
    return callApiWithToken(url, "DELETE", {
        id: specialtyId,
    });
};

const getDetailSpecialtyById = (data) => {
    const url = `/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`;
    return callApiWithToken(url, "GET", null);
};

const editSpecialtyService = (inputData) => {
    const url = "/api/edit-specialty";
    return callApiWithToken(url, "PUT", inputData);
};

// ========================= Clinic ============================
const createNewClinic = (data) => {
    const url = "/api/create-new-clinic";
    return callApiWithToken(url, "POST", data);
};

const getAllClinic = () => {
    const url = `/api/get-clinic`;
    return callApiWithToken(url, "GET", null);
};

const getDetailClinicById = (data) => {
    const url = `/api/get-detail-clinic-by-id?id=${data.id}`;
    return callApiWithToken(url, "GET", null);
};

const editClinicService = (inputData) => {
    const url = "/api/edit-clinic";
    return callApiWithToken(url, "PUT", inputData);
};

const deleteClinic = (specialtyId) => {
    const url = "/api/delete-clinic";
    return callApiWithToken(url, "DELETE", {
        id: specialtyId,
    });
};

// ========= manage booking patient ================

const getAllPatientForDoctor = (data) => {
    const url = `/api/get-list-patient-for-doctor?doctorId=${data.doctorId}&date=${data.date}`;
    return callApiWithToken(url, "GET", null);
};

const getAllPatientForDoctorSuceed = (data) => {
    const url = `/api/get-list-booking-for-doctor-suceed?doctorId=${data.doctorId}&date=${data.date}`;
    return callApiWithToken(url, "GET", null);
};

const postSendRemedy = (data) => {
    const url = "/api/send-remedy";
    return callApiWithToken(url, "POST", data);
};

const getDoctorNameBySpecialtyId = (doctorId) => {
    const url = `/api/get-doctor-name-by-specialty-id?doctorId=${doctorId}`;
    return callApiWithToken(url, "GET", null);
};

export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUSerService,
    editUserService,
    getAllCodeService,
    getTopDoctorHomeService,
    getAllDoctors,
    saveDetailDoctorService,
    getDetailInforDoctor,
    saveBulkScheduleDoctor,
    getScheduleDoctorByDate,
    getExtraInforDoctorById,
    getProfileDoctorById,
    postPatientBookAppointment,
    postVerifyBookAppointment,
    createNewSpecialty,
    getAllSpecialty,
    deleteSpecialty,
    getDetailSpecialtyById,
    editSpecialtyService,
    createNewClinic,
    getAllClinic,
    getDetailClinicById,
    editClinicService,
    deleteClinic,
    getAllPatientForDoctor,
    postSendRemedy,
    getDoctorNameBySpecialtyId,
    postCancelBookAppointment,
    getAllPatientForDoctorSuceed,
};
