FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
RUN apk update
RUN npm install -g pnpm


FROM base AS separator
WORKDIR /app

RUN pnpm add turbo
COPY . .

RUN pnpm turbo prune --scope=api --docker


FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=separator /app/out/json/ .
COPY --from=separator /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install


FROM base AS builder
WORKDIR /app

COPY --from=installer /app .
COPY --from=separator /app/out/full .
RUN pnpm turbo run build --filter=api


FROM base AS runner
WORKDIR /app

COPY --from=builder /app .

EXPOSE 4000
CMD node /app/apps/api/dist/main.js
