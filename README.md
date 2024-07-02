# Teste iCasei: Front-End

## Instruções para Compilar, Testar e Rodar o Projeto

### Pré-requisitos
- Docker
- Node.js
- .NET SDK

### Compilação e Execução

#### MF_DRAWER
1. Navegue até a pasta `mf_drawer`:
    ```sh
    cd mf_drawer
    ```

2. Construa a imagem Docker:
    ```sh
    docker build -t mf_drawer .
    ```

3. Execute o container:
    ```sh
    docker run -p 3000:3000 mf_drawer
    ```

4. Acesse `http://localhost:3000` no navegador.

#### MF_VIDEOS
1. Navegue até a pasta `mf_videos`:
    ```sh
    cd mf_videos
    ```

2. Construa a imagem Docker:
    ```sh
    docker build -t mf_videos .
    ```

3. Execute o container:
    ```sh
    docker run -p 3001:3000 mf_videos
    ```

4. Acesse `http://localhost:3001` no navegador.

#### BFF
1. Navegue até a pasta `bff`:
    ```sh
    cd bff
    ```

2. Construa a imagem Docker:
    ```sh
    docker build -t bff .
    ```

3. Execute o container:
    ```sh
    docker run -p 5000:80 bff
    ```

4. Acesse `http://localhost:5000` no navegador.




