<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: 'Renseignement pour adhésion Loisir',
  message: ''
})

const subjectOptions = [
  'Renseignement pour adhésion Loisir',
  'Renseignement pour licence Compétiteur',
  'Autre demande'
]

const errors = reactive({ name: '', email: '' })
const submitted = ref(false)

const CLUB_EMAIL = 'contact@sghm.fr'

function validate() {
  errors.name = form.name.trim() ? '' : 'Merci de renseigner votre nom.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Adresse email invalide.'
  return !errors.name && !errors.email
}

function onSubmit() {
  submitted.value = false
  if (!validate()) return

  const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
  const subject = encodeURIComponent(form.subject)
  window.location.href = `mailto:${CLUB_EMAIL}?subject=${subject}&body=${body}`
  submitted.value = true
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="section__head section__head--center">
        <span class="section__eyebrow">Contact &amp; Adhésion</span>
        <h2 class="section__title">Venez Nous Rencontrer</h2>
        <p class="section__lede">
          Aucune séance d'essai gratuite : une prise de contact avec le bureau est nécessaire avant
          l'adhésion.
        </p>
      </div>

      <div class="contact__grid">
        <div class="card contact__info">
          <h3 class="contact__info-title">Visite &amp; Informations</h3>
          <p class="contact__info-lede">
            Accueil en salle le lundi et le mercredi, de 18h00 à 20h00, pour toute question sur le
            club ou l'adhésion.
          </p>

          <ul class="contact__info-list">
            <li>
              <IconGlyph name="pin" :size="18" />
              <span>Salle des Sports J.Ménager, Guérande</span>
            </li>
            <li>
              <IconGlyph name="mail" :size="18" />
              <a :href="`mailto:${CLUB_EMAIL}`">{{ CLUB_EMAIL }}</a>
            </li>
          </ul>
        </div>

        <form class="card contact__form" novalidate @submit.prevent="onSubmit">
          <div class="contact__row">
            <div class="contact__field">
              <label for="name">Nom complet *</label>
              <input id="name" v-model="form.name" type="text" autocomplete="name" :aria-invalid="!!errors.name" />
              <span v-if="errors.name" class="contact__error">{{ errors.name }}</span>
            </div>

            <div class="contact__field">
              <label for="email">Adresse email *</label>
              <input id="email" v-model="form.email" type="email" autocomplete="email" :aria-invalid="!!errors.email" />
              <span v-if="errors.email" class="contact__error">{{ errors.email }}</span>
            </div>
          </div>

          <div class="contact__field">
            <label for="subject">Objet de votre demande *</label>
            <select id="subject" v-model="form.subject">
              <option v-for="option in subjectOptions" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>

          <div class="contact__field">
            <label for="message">Votre message</label>
            <textarea id="message" v-model="form.message" rows="4" placeholder="Parlez-nous de vos objectifs ou indiquez à quel créneau vous souhaitez passer…" />
          </div>

          <button type="submit" class="btn btn-primary contact__submit">Envoyer ma demande</button>
          <p v-if="submitted" class="contact__success">
            Votre messagerie va s'ouvrir pour finaliser l'envoi au secrétariat du club.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  gap: var(--space-5);
}

.contact__info {
  padding: var(--space-6);
}

.contact__info-title {
  font-size: 18px;
  color: var(--text-primary);
}

.contact__info-lede {
  margin-top: var(--space-3);
  font-size: 14px;
  color: var(--text-secondary);
}

.contact__info-list {
  margin: var(--space-6) 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--space-4);
}

.contact__info-list li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: 14px;
  color: var(--text-secondary);
}

.contact__info-list svg {
  flex-shrink: 0;
  color: var(--color-red);
}

.contact__info-list a {
  color: var(--text-primary);
  text-decoration: underline;
}

.contact__form {
  padding: var(--space-6);
  display: grid;
  gap: var(--space-4);
  align-content: start;
}

.contact__row {
  display: grid;
  gap: var(--space-4);
}

.contact__field {
  display: grid;
  gap: var(--space-2);
  min-width: 0;
}

.contact__field label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.contact__field input,
.contact__field select,
.contact__field textarea {
  font-family: var(--font-body);
  font-size: 15px;
  padding: 11px 14px;
  border-radius: var(--radius);
  border: 1px solid var(--border-card);
  background: var(--bg-base);
  color: var(--text-primary);
  resize: vertical;
}

.contact__field select {
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: calc(100% - 18px) center, calc(100% - 13px) center;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
  color: var(--text-primary);
}

.contact__field input[aria-invalid='true'] {
  border-color: var(--color-red);
}

.contact__error {
  font-size: 13px;
  color: var(--color-red);
}

.contact__submit {
  margin-top: var(--space-2);
  border-radius: var(--radius-pill);
}

.contact__success {
  font-size: 14px;
  color: var(--text-secondary);
}

@media (min-width: 640px) {
  .contact__row {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .contact__grid {
    grid-template-columns: 1fr 1.4fr;
  }
}
</style>
