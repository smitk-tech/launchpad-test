import { MobileFrame } from '@/components/common/MobileFrame'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LOGIN_COPY } from '@/const/auth/login.const'
import { ROUTES } from '@/const/common/routes.const'
import { useAuth } from '@/store/useAuth'
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    login()
    navigate(ROUTES.dashboard.root)
  }

  return (
    <MobileFrame className="justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-sm"
      >
        <div className="text-left">
          <h1 className="text-2xl font-semibold text-foreground">
            {LOGIN_COPY.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {LOGIN_COPY.subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="login-email"
            className="text-sm font-medium text-foreground"
          >
            {LOGIN_COPY.emailLabel}
          </label>
          <Input
            id="login-email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="login-password"
            className="text-sm font-medium text-foreground"
          >
            {LOGIN_COPY.passwordLabel}
          </label>
          <Input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          {LOGIN_COPY.submit}
        </Button>
      </form>
    </MobileFrame>
  )
}
