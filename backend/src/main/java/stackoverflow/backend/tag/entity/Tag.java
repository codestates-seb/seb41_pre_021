package stackoverflow.backend.tag.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.backend.common.BaseEntity;
import stackoverflow.backend.questiontag.entity.QuestionTag;

import javax.persistence.*;
import javax.persistence.metamodel.IdentifiableType;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Tag extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;

    private String tagName;

    private String tagDescription;

    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags = new ArrayList<>();
}
