SELECT
	`person`.`first_name` AS `Name`,
	`person`.`last_name` AS `Last name`,
	COUNT(`order`.`id`) AS `Orders`,
	SUM(`order_item`.`quantity`) AS `Items`,
	SUM(`order_item`.`quantity` * `item`.`price` - `order_item`.`discount`) AS `Total $`
FROM `person`
LEFT JOIN `order`
ON `order`.`person_id` = `person`.`id`
LEFT JOIN `order_item`
ON `order_item`.`order_id` = `order`.`id`
LEFT JOIN `item`
ON `item`.`id` = `order_item`.`item_id`
GROUP BY `person`.`id`
ORDER BY `person`.`id`;
