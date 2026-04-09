package com.example;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class EurekaServerApplicationTest {

    @Test
    void contextLoads() {
        assertTrue(true, "Application context loaded successfully");
    }

}
