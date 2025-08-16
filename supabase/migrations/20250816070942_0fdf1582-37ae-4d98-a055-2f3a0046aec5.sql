-- Fix security issue: Function Search Path Mutable only
-- Update the handle_new_user function to have proper search_path
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, phone_number, full_name)
  VALUES (
    NEW.id, 
    NEW.phone,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', '')
  );
  RETURN NEW;
END;
$$;