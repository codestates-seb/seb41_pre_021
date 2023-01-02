package stackoverflow.backend.question.mapper;

import org.mapstruct.Mapper;
import stackoverflow.backend.member.dto.MemberResponseDto;
import stackoverflow.backend.member.entity.Member;
import stackoverflow.backend.profileimage.entity.ProfileImage;
import stackoverflow.backend.question.dto.*;
import stackoverflow.backend.question.entity.Question;
import stackoverflow.backend.tag.entity.Tag;
import stackoverflow.backend.vote.entity.Vote;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        Member member = new Member();
        member.setMemberId(questionPostDto.getMemberId());

        question.setQuestionTitle(questionPostDto.getQuestionTitle());
        question.setContent(questionPostDto.getContent());
        question.setMember(member);

        return question;
    }

    default List<String> questionPostDtoToTags(QuestionPostDto questionPostDto) {
        List<QuestionPostTagDto> questionPostTagDtos = questionPostDto.getQuestionPostTagDtos();
        return questionPostTagDtos.stream()
                .map(s -> new String(s.getTagName()))
                .collect(Collectors.toList());
    }

    default List<String> questionPatchDtoToTags(QuestionPatchDto questionPatchDto) {
        List<QuestionPatchTagDto> questionPatchDtos = questionPatchDto.getQuestionPatchTagDtos();
        return questionPatchDtos.stream()
                .map(s -> new String(s.getTagName()))
                .collect(Collectors.toList());
    }

//    default QuestionDetailDto questionToQuestionDetailDto(Question question) {
//        QuestionDetailDto.MemberPart memberPart = new QuestionDetailDto.MemberPart();
//        QuestionDetailDto.QuestionPart questionPart = new QuestionDetailDto.QuestionPart();
//
//        Member member = question.getMember();
//        memberPart.setMemberId(member.getMemberId());
//        memberPart.setReputation(member.getReputation());
//        memberPart.setUsername(member.getUsername());
//
//        questionPart.setQuestionTitle(question.getQuestionTitle());
//        questionPart.setContent(question.getContent());
//        questionPart.setViews(question.getViews());
//        List<String> tags = question.getQuestionTags().stream()
//                .map(questionTag -> questionTag.getTag().getTagName())
//                .collect(Collectors.toList());
//
//        questionPart.setTags(tags);
//        questionPart.setAsked(question.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
//        questionPart.setModified(question.getModifiedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
//
//        List<QuestionDetailDto.QuestionCommentDto> collect = question.getQuestionComments().stream()
//                .map(questionComment -> {
//                    QuestionDetailDto.QuestionCommentDto questionCommentDto = new QuestionDetailDto.QuestionCommentDto();
//                    questionCommentDto.setMemberId(questionComment.getMember().getMemberId());
//                    questionCommentDto.setContent(questionComment.getContent());
//                    questionCommentDto.setCreatedAt(questionComment.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) + " at " +
//                            questionComment.getCreatedAt().format(DateTimeFormatter.ofPattern("hh:mm")) );
//                    return questionCommentDto;
//                }).collect(Collectors.toList());
//        questionPart.setQuestionComments(collect);
//        questionPart.setQuestionVoteCnt(
//                question.getVotes().stream()
//                .map(vote -> vote.getVoteStatus().getNum())
//                .mapToInt(Integer::intValue)
//                .sum()
//        );
//
//        return new QuestionDetailDto(questionPart,memberPart);
//    }


    default QuestionDetailDto.MemberPart setMemberPart(Question question, QuestionDetailDto.MemberPart memberPart)  {
        Member member = question.getMember();
        memberPart.setMemberId(member.getMemberId());
        memberPart.setReputation(member.getReputation());
        memberPart.setUsername(member.getUsername());


        ProfileImage profileImage = member.getProfileImage();
        String storeFileName = profileImage.getStoreFileName();
        int pos = storeFileName.lastIndexOf(".");
        String ext = storeFileName.substring(pos + 1);
        try {
            BufferedImage bImage = ImageIO.read(new File(storeFileName));
            ByteArrayOutputStream bos = new ByteArrayOutputStream();

            ImageIO.write(bImage, ext, bos);
            byte[] data = bos.toByteArray();
            memberPart.setImage(Base64.getEncoder().encodeToString(data));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return memberPart;
    }

    default QuestionDetailDto.QuestionPart setQuestionPart(Question question, QuestionDetailDto.QuestionPart questionPart, Long viewerId) {
        questionPart.setQuestionId(question.getQuestionId());
        questionPart.setQuestionTitle(question.getQuestionTitle());
        questionPart.setContent(question.getContent());
        questionPart.setViews(question.getViews());
        List<String> tags = question.getQuestionTags().stream()
                .map(questionTag -> questionTag.getTag().getTagName())
                .collect(Collectors.toList());

        questionPart.setTags(tags);
        questionPart.setAsked(question.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        questionPart.setModified(question.getModifiedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        questionPart.setAdopt(question.isAdopted());
        List<QuestionDetailDto.QuestionCommentDto> collect = question.getQuestionComments().stream()
                .map(questionComment -> {
                    QuestionDetailDto.QuestionCommentDto questionCommentDto = new QuestionDetailDto.QuestionCommentDto();
                    questionCommentDto.setMemberId(questionComment.getMember().getMemberId());
                    questionCommentDto.setContent(questionComment.getContent());
                    questionCommentDto.setCreatedAt(questionComment.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) + " at " +
                            questionComment.getCreatedAt().format(DateTimeFormatter.ofPattern("HH:mm")) );
                    questionCommentDto.setUsername(questionComment.getMember().getUsername());
                    questionCommentDto.setQuestionCommentId(questionComment.getQuestionCommentId());
                    return questionCommentDto;
                }).collect(Collectors.toList());
        questionPart.setQuestionComments(collect);

        if(viewerId != null){
            for (Vote vote : question.getVotes()) {
                if(vote.getMember().getMemberId() == viewerId) {
                    questionPart.setViewerVoteStatus(vote.getVoteStatus());
                }
            }
        }

        questionPart.setQuestionVoteCnt(
                question.getVotes().stream()
                        .map(vote -> vote.getVoteStatus().getNum())
                        .mapToInt(Integer::intValue)
                        .sum()
        );
        return questionPart;
    }

    default List<QuestionDetailDto.AnswerPart> setListAnswerPart(Question question, Long viewerId) {
        return question.getAnswers().stream()
                .map(answer -> {
                    QuestionDetailDto.AnswerPart answerPart = new QuestionDetailDto.AnswerPart();
                    ProfileImage profileImage = answer.getMember().getProfileImage();
                    String storeFileName = profileImage.getStoreFileName();
                    int pos = storeFileName.lastIndexOf(".");
                    String ext = storeFileName.substring(pos + 1);
                    try {
                        BufferedImage bImage = ImageIO.read(new File(storeFileName));
                        ByteArrayOutputStream bos = new ByteArrayOutputStream();

                        ImageIO.write(bImage, ext, bos);
                        byte[] data = bos.toByteArray();
                        answerPart.setImage(Base64.getEncoder().encodeToString(data));
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }

                    answerPart.setAnswerId(answer.getAnswerId());
                    answerPart.setContent(answer.getContent());
                    answerPart.setCreatedAt(answer.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) + " at " +
                            answer.getCreatedAt().format(DateTimeFormatter.ofPattern("HH:mm")));
                    answerPart.setModifiedAt(answer.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) + " at " +
                            answer.getCreatedAt().format(DateTimeFormatter.ofPattern("HH:mm")));
                    answerPart.setUsername(answer.getMember().getUsername());
                    answerPart.setReputation(answer.getMember().getReputation());
                    answerPart.setMemberId(answer.getMember().getMemberId());
                    answerPart.setAccepted(answer.isAccepted());
                    answerPart.setAnswerVoteCnt(answer.getVotes().stream()
                            .map(vote -> vote.getVoteStatus().getNum())
                            .mapToInt(Integer::intValue)
                            .sum());

                    if (viewerId != null) {
                        for (Vote vote : answer.getVotes()) {
                            if (vote.getMember().getMemberId() == viewerId) {
                                answerPart.setViewerVoteStatus(vote.getVoteStatus());
                            }
                        }
                    }

                    List<QuestionDetailDto.AnswerCommentDto> answerCommentDtos = answer.getAnswerComments().stream()
                            .map(answerComment -> {
                                QuestionDetailDto.AnswerCommentDto answerCommentDto = new QuestionDetailDto.AnswerCommentDto();
                                answerCommentDto.setMemberId(answerComment.getMember().getMemberId());
                                answerCommentDto.setContent(answerComment.getContent());
                                answerCommentDto.setCreatedAt(answerComment.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) + " at " +
                                        answerComment.getCreatedAt().format(DateTimeFormatter.ofPattern("HH:mm")));
                                answerCommentDto.setUsername(answerComment.getMember().getUsername());
                                answerCommentDto.setAnswerCommentId(answerComment.getAnswerCommentId());
                                return answerCommentDto;
                            }).collect(Collectors.toList());
                    answerPart.setAnswerComments(answerCommentDtos);
                    return answerPart;
                }).collect(Collectors.toList());
    }

    default QuestionDetailDto questionToQuestionDetailDto(Question question,Long viewerId) {
        QuestionDetailDto.MemberPart memberPart = new QuestionDetailDto.MemberPart();
        QuestionDetailDto.QuestionPart questionPart = new QuestionDetailDto.QuestionPart();

        memberPart = setMemberPart(question,memberPart);
        questionPart = setQuestionPart(question,questionPart,viewerId);
        List<QuestionDetailDto.AnswerPart> answerParts = setListAnswerPart(question,viewerId);

        return new QuestionDetailDto(questionPart,memberPart,answerParts);
    }

    default List<QuestionsResponseDto> questionsToQuestionsResponseDto(List<Question> questions) {

        return questions.stream().map(question -> {
            QuestionsResponseDto.MemberPart memberPart = new QuestionsResponseDto.MemberPart();
            QuestionsResponseDto.QuestionPart questionPart = new QuestionsResponseDto.QuestionPart();

            Member member = question.getMember();

            ProfileImage profileImage = member.getProfileImage();
            String storeFileName = profileImage.getStoreFileName();
            int pos = storeFileName.lastIndexOf(".");
            String ext = storeFileName.substring(pos + 1);
            try {
                BufferedImage bImage = ImageIO.read(new File(storeFileName));
                ByteArrayOutputStream bos = new ByteArrayOutputStream();

                ImageIO.write(bImage, ext, bos);
                byte[] data = bos.toByteArray();
                memberPart.setImage(Base64.getEncoder().encodeToString(data));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

            memberPart.setUsername(member.getUsername());
            memberPart.setReputation(member.getReputation());
            questionPart.setQuestionId(question.getQuestionId());
            questionPart.setQuestionTitle(question.getQuestionTitle());
            questionPart.setContent(question.getContent());
            questionPart.setViews(question.getViews());
            questionPart.setAdopted(question.isAdopted());
            questionPart.setQuestionVoteCnt(
                    question.getVotes().stream()
                            .map(vote -> vote.getVoteStatus().getNum())
                            .mapToInt(Integer::intValue)
                            .sum()
            );
            List<QuestionsResponseDto.QuestionsTagPart> tags = question.getQuestionTags().stream()
                    .map(questionTag -> {
                        QuestionsResponseDto.QuestionsTagPart questionsTagPart = new QuestionsResponseDto.QuestionsTagPart();
                        Tag tag = questionTag.getTag();
                        questionsTagPart.setTagId(tag.getTagId());
                        questionsTagPart.setTagName(tag.getTagName());
                        questionsTagPart.setTagDescription(tag.getTagDescription());
                        return questionsTagPart;
                    }).collect(Collectors.toList());

            questionPart.setTags(tags);
            questionPart.setAsked(question.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
            questionPart.setAnswerCnt(question.getAnswers().size());
            return new QuestionsResponseDto(questionPart, memberPart);
        }).collect(Collectors.toList());
    }

    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

//    default Question questionPostToQuestion(QuestionPostDto questionPostDto) {
//
//
//        Question question = new Question();
//        Member member = new Member();
//        member.setMemberId(questionPostDto.getMemberId());
//
//        question.setQuestionTitle(questionPostDto.getQuestionTitle());
//        question.setContent(questionPostDto.getContent());
//
//        QuestionTag questionTag = new QuestionTag();
//
//
//        question.setMember(member);
//
//
//        return question;
//    }

//    default Question questionPatchDtoToQuestion(QuestionPatchDto requestBody) {
//        Question question = new Question();
//
//        question.setQuestionId(requestBody.getQuestionId());
//        question.setQuestionTitle(requestBody.getQuestionTitle());
//        question.setContent(requestBody.getContent());
//
//        return question;
//    }

//    default QuestionResponseDto questionToQuestionResponse(MemberMapper memberMapper, Question question) {
//        if ( question == null ) {
//            return null;
//        }
//
//        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
//
//        questionResponseDto.setQuestionId( question.getQuestionId() );
//        questionResponseDto.setQuestionTitle( question.getQuestionTitle() );
//        questionResponseDto.setContent( question.getContent() );
//        questionResponseDto.setViews(question.getViews());
//
//        Member member = question.getMember();
//        questionResponseDto.setMember(memberMapper.memberToMemberResponseDto(member));
//
//
//        return questionResponseDto;
//    }

    default MemberResponseDto memberToMemberResponseDto(Member member){
        if ( member == null ) {
            return null;
        }

        MemberResponseDto memberResponseDto = new MemberResponseDto();

        memberResponseDto.setMemberId( member.getMemberId() );
        memberResponseDto.setEmail( member.getEmail() );
        memberResponseDto.setUsername( member.getUsername() );
        memberResponseDto.setReputation( member.getReputation() );

        return memberResponseDto;
    }

//    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
//        if ( question == null ) {
//            return null;
//        }
//
//        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
//
//        questionResponseDto.setMember( memberToMemberResponseDto  ( question.getMember() ) );
//        questionResponseDto.setQuestionId( question.getQuestionId() );
//        questionResponseDto.setQuestionTitle( question.getQuestionTitle() );
//        questionResponseDto.setContent( question.getContent() );
//        questionResponseDto.setViews(question.getViews());
//
//        return questionResponseDto;
//    }
}