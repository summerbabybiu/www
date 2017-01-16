dev-docker:
	@docker-compose up -d

prod-docker:
	@docker-compose -f production.yml up -d

fe-docker:
	@docker-compose -f fe-compose.yml up -d

stop-dev:
	@docker-compose stop

stop-prod:
	@docker-compose -f docker-compose-prod.yml stop

stop-fe:
	@docker-compose -f fe-compose.yml stop

clone-api:
	@git clone https://github.com/SummerCMS/API.git app/src

clone-html:
	@git clone https://github.com/SummerCMS/static.git app/html

init:
	@make clone-api
	@cd app/src/ && npm install
	@make clone-html
