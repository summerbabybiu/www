dev-docker:
	@docker-compose up -d

prod-docker:
	@docker-compose -f docker-compose-prod.yml up -d

stop-dev:
	@docker-compose stop

stop-prod:
	@docker-compose -f docker-compose-prod.yml stop

clone-api:
	@git clone https://github.com/SummerCMS/API.git app/src

init:
	@make clone-api
	@cd app/src/ && npm install
