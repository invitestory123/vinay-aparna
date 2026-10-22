# Customer Editing Guide — kalyana-mandapam

This template is a traditional Telugu Hindu wedding invitation (Shubha Muhurtham) with Kalamkari styling, sacred mantras, OpenStreetMap venue embed, calendar export, and marquee banner.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/kalyana-mandapam/editable/wedding-data.js)

### Couple & Families
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `groom`: Names (e.g. `"Meghana"`, `"Karthik"`)
- `hashtag`: Wedding hashtag (e.g. `"#MeghanaWedsKarthik"`)
- `brideFamily` & `groomFamily`: Family names (e.g. `"The Lakshminarayana Family"`)

### Ceremony & Muhurtham
Edit `ceremony` in `editable/wedding-data.js`:
- `blessing`: Opening Sanskrit/Telugu prayer (e.g. `"॥ శ్రీ మహాగణాధిపతయే నమః ॥"`)
- `occasionTelugu`: Occasion in Telugu (e.g. `"శుభ ముహూర్తం"`)
- `weekdayLabel`: Day of week (e.g. `"Sunday"`)
- `dateLabel`: Formatted date (e.g. `"December 6th, 2026"`)
- `muhurthamTimeLabel`: Muhurtham auspicious time string (e.g. `"Muhurtham at 10:35 AM"`)
- `muhurthamISO`: ISO timestamp (`YYYY-MM-DDTHH:MM:SS+05:30`), drives countdown timer and calendar
- `inviteLine1` & `inviteLine2`: Main invitation copy

### Events / Celebrations
Edit `events` array in `editable/wedding-data.js`:
- `title`, `telugu`, `dateLabel`, `timeLabel`, `startISO`, `endISO`, `note`, `icon`

### Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: Mandapam / Hall name
- `line1` & `line2`: City and State line
- `address`: Full address string
- `mapsQuery`: Query for Google Maps directions
- `osmEmbed`: OpenStreetMap iframe embed URL

### WhatsApp RSVP
Edit `rsvp` in `editable/wedding-data.js`:
- `phone`: Contact phone number (e.g. `"9885758054"`)
- `whatsappNumber`: International format number without symbols (e.g. `"919885758054"`)
- `formattedPhone`: Formatted display number (e.g. `"+91 98857 58054"`)
- `message`: Pre-filled WhatsApp message sent by guests

### Images
Replace files directly in `editable/assets/` or update paths in `images` in `editable/wedding-data.js`:
- Couple illustration/photo: `editable/assets/couple.webp`
- Top garland decorative header: `editable/assets/garland-top.webp`
- Mandapam footer graphic: `editable/assets/mandap-footer.webp`

---

## Special Sections & Features

- **Telugu Muhurtham Heading**: Native Telugu font for muhurtham headings.
- **OpenStreetMap Embed**: Interactive map card with Google Maps directions button.
- **Marquee Ribbon**: Scrolling hashtag and wedding date ribbon.
- **Calendar Download**: Google Calendar and Apple `.ics` download buttons.

---

## Rules for Future Agents

1. Make edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless a customer specifically requests structural code changes.
3. Preserve Telugu typography, auspicious styling, and responsiveness.
4. Verify by opening the page locally or running `node --check editable/wedding-data.js`.
