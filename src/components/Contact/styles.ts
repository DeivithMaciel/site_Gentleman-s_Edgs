import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: ${colors.veryDarkBrown};
  color: ${colors.brown};
  padding: 96px 0;
  text-align: center;

  .container {
    background-color: ${colors.darkBrown};
    padding: 48px;
    border-radius: 16px;
  }

  .contact-header {
    margin-bottom: 72px;

    h2 {
      margin: 0;
      font-size: 48px;
      font-weight: 900;
    }

    p {
      font-size: 22px;
      font-weight: 500;
      margin: 24px 0 40px;
    }

    button {
      margin: 0 auto;
      color: inherit;
      text-decoration: none;
      color: ${colors.lightBrown};
    }
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h3 {
      margin: 0 0 16px;
      font-size: 24px;
    }

    input,
    textarea {
      padding: 12px;
      border-radius: 8px;
      border: none;
      font-size: 16px;
    }

    textarea {
      min-height: 120px;
      resize: none;
    }

    button {
      margin: 0 auto;
      color: ${colors.lightBrown};
    }
  }

  .icons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding-top: 72px;
    gap: 48px;

    a {
      color: inherit;
      text-decoration: none;
      transition: 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`
