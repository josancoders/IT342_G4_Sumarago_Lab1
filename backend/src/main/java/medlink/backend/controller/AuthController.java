package medlink.backend.controller;

import medlink.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // NOTE: Vite runs on 5173, not 3000
public class AuthController {

    @Autowired
    private AuthService authService;

    // Data Transfer Objects (DTOs)
    public record RegisterRequest(String email, String password, String role) {}
    public record LoginRequest(String email, String password) {}

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        try {
            String result = authService.registerUser(req.email(), req.password(), req.role());
            return ResponseEntity.status(201).body(Map.of("message", result));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        try {
            String token = authService.authenticate(req.email(), req.password());
            return ResponseEntity.ok(Map.of("token", token));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid Credentials"));
        }
    }
}