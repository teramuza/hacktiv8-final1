-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
                              id serial4 NOT NULL,
                              "name" varchar NULL,
                              email varchar NULL,
                              "password" varchar NULL,
                              CONSTRAINT users_pkey PRIMARY KEY (id)
);

-- public.reflection definition

-- Drop table

-- DROP TABLE public.reflection;

CREATE TABLE public.reflection (
                                   id serial4 NOT NULL,
                                   success bool NULL,
                                   low_point varchar NULL,
                                   take_away varchar NULL,
                                   owner_id int4 NULL,
                                   createdat timestamp NULL,
                                   updatedat timestamp NULL,
                                   CONSTRAINT reflection_pkey PRIMARY KEY (id)
);


-- public.reflection foreign keys

ALTER TABLE public.reflection ADD CONSTRAINT reflection_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.users(id) ON DELETE CASCADE;