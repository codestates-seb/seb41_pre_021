package stackoverflow.backend.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    MEMBER_UNAUTHORIZED(401, "unauthorized member"),

    QUESTION_NOT_FOUND(404, "Question not found"),
    QUESTION_COMMENT_NOT_FOUND(404, "Question comment not found"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    ANSWER_COMMENT_NOT_FOUND(404, "Answer comment not found"),
    ANSWER_ALREADY_ADOPTED(409, "this question already adopted answer");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}