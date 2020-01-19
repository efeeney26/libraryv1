package library.app.payload;

import lombok.*;

import java.util.*;

@AllArgsConstructor
public class ResponsePayload {
    private String message;

    public Map<String, String> getPayload() {
        Map<String, String> payload = new HashMap<>();
        payload.put("message", this.message);
        return payload;
    }
}
