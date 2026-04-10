package com.example.docestore.controller;

import com.example.docestore.model.Produto;
import com.example.docestore.repository.ProdutoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ProdutoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ProdutoRepository repository;

    @Test
    void testObterTodos() throws Exception {
        mockMvc.perform(get("/api/produtos"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(19)));
    }

    @Test
    void testBuscarPorTermo() throws Exception {
        mockMvc.perform(get("/api/produtos/buscar?termo=Chocolate"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(4)));
    }

    @Test
    void testObterPorCategoria() throws Exception {
        mockMvc.perform(get("/api/produtos/categoria/Chocolate"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(4)));
    }

    @Test
    void testObterCategorias() throws Exception {
        mockMvc.perform(get("/api/produtos/categorias/lista"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(6)));
    }
}
