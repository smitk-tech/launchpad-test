import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginWithCredentials } from "@/api/auth.api";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import decorationRightUrl from "@/assets/Decoration right.svg";
import { LOGIN_COPY } from "@/const/auth/login.const";
import { ROUTES } from "@/const/common/routes.const";
import { loginSchema, type LoginFormValues } from "@/schemas/auth/login.schema";
import { useAuthStore } from "@/store/auth.store";

export function LoginPage() {
  const navigate = useNavigate();
  const setToken = useAuthStore((s) => s.setToken);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setSubmitError(null);
    try {
      const { token } = await loginWithCredentials(values);
      setToken(token, { remember: rememberMe });
      navigate(ROUTES.root, { replace: true });
    } catch (e) {
      setSubmitError(e instanceof Error ? e.message : "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[hsl(var(--brand-login-bg))]">
      <div className="flex flex-1 flex-col items-center px-4 pb-8 pt-24 sm:pt-[118px]">
        <div className="mb-16 flex w-full max-w-[368px] justify-center sm:mb-[64px]">
          <BrandLogo />
        </div>

        <div className="flex w-full max-w-[450px] flex-col gap-6 rounded-xl border border-border bg-card p-8 shadow-sm">
          <div className="flex w-full flex-col gap-2">
            <h1 className="text-center text-xl font-normal leading-6 text-brand-navy">
              {LOGIN_COPY.title}
            </h1>
            <p className="text-center text-sm leading-[21px] text-brand-slate">
              {LOGIN_COPY.subtitle}
            </p>
          </div>

          <form
            className="flex w-full flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">{LOGIN_COPY.emailLabel}</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder={LOGIN_COPY.emailPlaceholder}
                className="rounded-lg"
                aria-invalid={Boolean(errors.email)}
                {...register("email")}
              />
              {errors.email?.message ? (
                <p className="text-xs text-destructive" role="alert">
                  {errors.email.message}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="password">{LOGIN_COPY.passwordLabel}</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder={LOGIN_COPY.passwordPlaceholder}
                  className="rounded-lg pr-10"
                  aria-invalid={Boolean(errors.password)}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center text-brand-teal hover:opacity-80"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  <img
                    src={decorationRightUrl}
                    alt=""
                    className="size-5"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              {errors.password?.message ? (
                <p className="text-xs text-destructive" role="alert">
                  {errors.password.message}
                </p>
              ) : null}
            </div>

            <div className="flex flex-row items-start justify-between gap-2">
              <div className="flex max-w-[264px] flex-row items-center gap-2">
                <Switch
                  checked={rememberMe}
                  onCheckedChange={setRememberMe}
                  aria-label={LOGIN_COPY.rememberMe}
                />
                <span className="text-sm leading-[21px] text-brand-navy">
                  {LOGIN_COPY.rememberMe}
                </span>
              </div>
              <button
                type="button"
                className="shrink-0 text-right text-sm leading-6 text-brand-link hover:underline"
              >
                {LOGIN_COPY.forgotPassword}
              </button>
            </div>

            {submitError ? (
              <p className="text-center text-sm text-destructive" role="alert">
                {submitError}
              </p>
            ) : null}

            <Button
              type="submit"
              className="h-9 w-full rounded-lg bg-primary px-4 py-[7.5px] text-sm font-normal text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {LOGIN_COPY.login}
            </Button>
          </form>

          <div className="relative mx-auto h-8 w-full max-w-[386px] text-sm">
            <span className="absolute left-[111px] top-1.5 text-brand-slate max-sm:left-1/2 max-sm:top-0 max-sm:-translate-x-[76px] max-sm:text-center">
              {LOGIN_COPY.needHelp}
            </span>
            <a
              href={LOGIN_COPY.contactMailto}
              className="absolute left-[187px] top-0 flex h-8 items-center justify-center rounded-lg px-1.5 py-[5.5px] text-brand-link hover:underline max-sm:left-1/2 max-sm:top-6 max-sm:-translate-x-1/2"
            >
              {LOGIN_COPY.contactUs}
            </a>
          </div>
        </div>
      </div>

      <footer className="mx-auto flex w-full max-w-[450px] flex-row items-center justify-between px-4 pb-8 text-sm leading-[14px] text-brand-teal">
        <span>{LOGIN_COPY.version}</span>
        <span className="text-center">{LOGIN_COPY.privacyAndTerms}</span>
      </footer>
    </div>
  );
}
