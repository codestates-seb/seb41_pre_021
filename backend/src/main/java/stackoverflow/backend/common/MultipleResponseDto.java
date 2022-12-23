package stackoverflow.backend.common;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultipleResponseDto<T> {
    private List<T> data;

    public MultipleResponseDto(List<T> data, Page page) {
        this.data = data;
    }
}