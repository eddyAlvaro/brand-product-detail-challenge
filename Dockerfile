# ---- DEV Dockerfile for Vite + pnpm ----
FROM node:22-alpine

# Configuración de entorno y pnpm
ENV CI=true
ENV PNPM_HOME=/pnpm
ENV PATH="/pnpm:${PATH}"
ENV CHOKIDAR_USEPOLLING=true

RUN corepack enable && corepack prepare pnpm@9.7.0 --activate

WORKDIR /app

# Copiar solo archivos necesarios para instalar dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias con caché optimizado
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm fetch && pnpm install --offline --frozen-lockfile

# Exponer los puertos de desarrollo de Vite
EXPOSE 5173 24678

# Crear usuario no root por seguridad
RUN adduser -D -u 10001 app && chown -R app:app /app
USER app

# Iniciar el servidor de desarrollo
CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "5173"]
