FROM public.ecr.aws/lambda/nodejs:20

COPY package*.json ./
RUN npm install --production

COPY index.js ${LAMBDA_TASK_ROOT}

CMD [ "index.js.handler" ]