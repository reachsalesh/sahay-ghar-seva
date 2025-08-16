-- Fix security issue: Function Search Path Mutable
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

-- Fix OTP expiry time to be shorter (5 minutes instead of default)
-- Add constraint to ensure OTP expires within 5 minutes
ALTER TABLE public.otp_verification 
ADD CONSTRAINT check_otp_expires_within_5_minutes 
CHECK (expires_at <= created_at + INTERVAL '5 minutes');

-- Update existing records to comply (if any)
UPDATE public.otp_verification 
SET expires_at = created_at + INTERVAL '5 minutes' 
WHERE expires_at > created_at + INTERVAL '5 minutes';