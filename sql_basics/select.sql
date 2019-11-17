SELECT
	`person`.`first_name` AS `first_name`,
	`person`.`last_name` AS `last_name`,
	COUNT(DISTINCT `order`.`id`) AS `total_orders`,
	SUM(`order_item`.`quantity`) AS `total_items_bought`,
	SUM(`order_item`.`quantity` * `item`.`price` - `order_item`.`discount`) AS `total_money_spent`
FROM `person`
LEFT JOIN `order`
ON `order`.`person_id` = `person`.`id`
LEFT JOIN `order_item`
ON `order_item`.`order_id` = `order`.`id`
LEFT JOIN `item`
ON `item`.`id` = `order_item`.`item_id`
GROUP BY `person`.`id`;
