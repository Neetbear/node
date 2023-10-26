// 내부에서만 사용할 변수나 함수
function logMessage(message) {
    console.log(`[LOG] ${message}`);
}

function logError(error) {
    console.error(`[ERROR] ${error}`);
}

// 외부에 노출할 API (모듈 exports)
module.exports = {
    info: logMessage, // 로깅 메시지를 출력
    error: logError, // 오류 메시지를 출력
};