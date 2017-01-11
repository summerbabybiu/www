onkey-init:
	@make install-dependency
	@make dev-docker

install-dependency:
	@npm install -g cnpm --registry=https://registry.npm.taobao.org
	@cnpm install -g supervisor
	@cd app/src/
	@cnpm install

deploy-prod:
	@make install-dependency
	@make stop-prod
	@make prod-docker

dev-docker:
	@docker-compose up -d

prod-docker:
	@docker-compose -f docker-compose-prod.yml up -d

stop-dev:
	@docker-compose stop

stop-prod:
	@docker-compose -f docker-compose-prod.yml stop
