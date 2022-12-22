package stackoverflow.backend.common;


import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
public class BaseEntity {

/*    @Column(updatable = false)
    @CreatedDate
   private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime modifiedAt;

 */
}
