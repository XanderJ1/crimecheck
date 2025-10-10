# 1️⃣ Use an official Node base image
FROM node:20-alpine AS builder

# 2️⃣ Set work directory
WORKDIR /app

# 3️⃣ Copy files
COPY . .

# 4️⃣ Install dependencies
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

# 5️⃣ Build your Nuxt app
RUN pnpm build

# 6️⃣ Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy built output
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

# 7️⃣ Expose port & run Nitro server
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
