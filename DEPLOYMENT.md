# Deployment Guide - Mihaela Doran Website

## Environment Variables Setup

### Local Development (.env.local)

The `.env.local` file contains sensitive API keys and should **never** be committed to Git (already in `.gitignore`).

Required variables:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

### Vercel Production Environment

**IMPORTANT:** When adding environment variables in Vercel, ensure there are **NO newlines** - only the API key value.

#### Steps to Configure Vercel Environment Variables:

1. **Access Vercel Dashboard:**
   - Go to https://vercel.com
   - Select project: `mihaela`
   - Navigate to: **Settings → Environment Variables**

2. **Add RESEND_API_KEY:**
   ```
   Name: RESEND_API_KEY
   Value: re_CJJ258YX_4NoVDKDYPvPJPRaJkbxDV9X4
   Environments: ✓ Production ✓ Preview ✓ Development
   ```

   **Critical:** Paste the API key with **NO trailing newline**. The value should be:
   ```
   re_CJJ258YX_4NoVDKDYPvPJPRaJkbxDV9X4
   ```
   NOT:
   ```
   re_CJJ258YX_4NoVDKDYPvPJPRaJkbxDV9X4
   ↵ (newline here will break it)
   ```

3. **Save and Redeploy:**
   - Click **Save**
   - Trigger a new deployment: `vercel --prod`
   - Or redeploy from Vercel dashboard: **Deployments → [Latest] → ⋯ → Redeploy**

4. **Verify Environment Variable:**
   ```bash
   vercel env pull .env.vercel
   cat .env.vercel
   ```

## Contact Form Configuration

### Email Settings

The contact form sends emails via Resend to:
- **Recipient:** `info@doranhomesdesign.com`
- **Sender:** `Mihaela Doran Website <boris@199.bio>`
- **Reply-To:** User's email address

### Email Template

Luxury-branded HTML email template with:
- Gradient header
- Structured field layout
- Clickable email/phone links
- Responsive design
- Professional footer

### Form Validation

**Client-side:**
- Name: minimum 2 characters
- Email: valid format check
- Message: 10-5000 characters
- Real-time error display

**Server-side:**
- Same validations enforced
- XSS protection (data sanitization)
- Rate limiting (built into Resend)

### Testing Locally

```bash
# Test successful submission
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+34 123 456 789",
    "message": "Test message for property enquiry"
  }'

# Expected response:
# {"success":true,"message":"Your message has been sent successfully...","emailId":"..."}

# Test validation
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"A","email":"invalid","message":"Too short"}'

# Expected response:
# {"error":"Invalid email address format"}
```

## Deployment Checklist

### Before Deploying:

- [ ] Verify `.env.local` exists locally with RESEND_API_KEY
- [ ] Test form submission locally (should receive email)
- [ ] Check no `.env.local` in Git: `git status` (should not show .env.local)
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors: `npm run lint`

### During Deployment:

- [ ] Add RESEND_API_KEY to Vercel (NO newlines!)
- [ ] Deploy: `vercel --prod`
- [ ] Verify environment variables loaded in deployment logs

### After Deployment:

- [ ] Test form on production URL
- [ ] Verify email received at `info@doranhomesdesign.com`
- [ ] Check spam folder if email not received
- [ ] Test validation errors display correctly
- [ ] Test success message appears
- [ ] Verify mobile responsiveness

## Troubleshooting

### Email Not Sending

1. **Check Vercel Logs:**
   ```bash
   vercel logs mihaela-[deployment-id] --follow
   ```

2. **Verify Environment Variable:**
   - No trailing newlines
   - Correct API key format
   - Applied to Production environment

3. **Check Resend Dashboard:**
   - https://resend.com/emails
   - View delivery status
   - Check for API errors

### Common Errors

**Error:** `render2 is not a function`
- **Cause:** Using `react` parameter with React component in API route
- **Solution:** Use `html` parameter with HTML string (already fixed)

**Error:** `RESEND_API_KEY is not defined`
- **Cause:** Environment variable not set or has newline
- **Solution:** Remove and re-add in Vercel without newlines

**Error:** `Failed to send email`
- **Cause:** Invalid sender domain or Resend quota exceeded
- **Solution:** Check Resend dashboard for account status

## Resend Configuration

### Sender Email

Currently using: `boris@199.bio` (verified domain)

**To use custom domain:**
1. Add DNS records in Resend dashboard
2. Verify domain ownership
3. Update sender in `app/api/contact/route.ts`:
   ```typescript
   from: 'Mihaela Doran <contact@mihaeladoran.com>',
   ```

### Rate Limits

Resend Free Tier:
- 100 emails/day
- 3,000 emails/month

For production, consider upgrading plan at https://resend.com/pricing

## Security Notes

- ✅ API key stored in environment variables (not in code)
- ✅ `.env.local` in `.gitignore`
- ✅ Server-side validation prevents injection
- ✅ Rate limiting handled by Resend
- ✅ CORS not required (same-origin API route)

## Support

For issues with:
- **Resend API:** https://resend.com/support
- **Vercel Deployment:** https://vercel.com/help
- **Environment Variables:** https://vercel.com/docs/environment-variables
