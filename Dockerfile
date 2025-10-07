FROM node:22-alpine

ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
ENV CHOKIDAR_USEPOLLING=true

RUN corepack enable && corepack prepare pnpm@10.18.1 --activate

USER node
WORKDIR /home/node/app

COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile


COPY --chown=node:node . .

EXPOSE 5173
CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "5173"]
