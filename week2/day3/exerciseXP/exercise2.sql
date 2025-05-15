-- q1
update film 
set language_id=2
where  film_id in (1,5,3);
-- q2
--  foreign keys are defined for the customer table are store_id and address_id
-- when  we are inserting if the id of the foreign keys isn't exist we got the error so we can use  IF EXISTS to be safe
-- q3
drop table  customer_review

-- q4

select count(*) as outstanding from rental
where return_date is null;

-- q5

select film.title , film.rental_rate from film
inner join inventory on film.film_id=inventory.film_id
inner join rental on rental.inventory_id=rental.inventory_id
where rental.return_date is null
order by film.rental_rate desc
limit 30;

-- q6

select film.title , film.description from film 
inner join film_actor on film_actor.film_id= film.film_id
inner join actor on actor.actor_id=film_actor.actor_id
where actor.first_name='Penelope' and actor.last_name='Monroe' and lower(film.description) like '%sumo wrestler%';

select * from film
inner join film_category on film_category.film_id= film.film_id
inner join category on category.category_id=film_category.category_id
where film.length < 60 and film.rating='R' and  category.name='Documentary'

select film.* from film 
inner join inventory on film.film_id=inventory.film_id
inner join rental on rental.inventory_id=rental.inventory_id
inner join customer on customer.customer_id=rental.customer_id
where 
	customer.first_name='Matthew'
	and customer.last_name='Mahan'
	and film.rental_rate>4
	and rental.return_date between '2005-07-28' and '2005-08-01';

select * from film 
where lower(title) like '%boat%' or lower(description) like '%boat%'
order by replacement_cost desc





