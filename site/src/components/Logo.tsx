import { JSX } from "preact";

const Logo = (props: JSX.SVGAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 1000 260"
    title="Microsite"
    {...props}
  >
    <path fill="#FF998B" d="M65 97.61v97.5h97.5L65 97.61z" />
    <path fill="#BDBDBD" d="M89.38 73.24v97.5h97.5v-97.5h-97.5z" />
    <path fill="#828282" d="M89.38 73.24v97.5h97.5l-97.5-97.5z" />
    <path
      fill="#333"
      d="M262.88 131.32c0-12.7 8.58-21.27 21.45-21.27 11.26 0 16.08 7.5 16.08 17.7v51.11h19.13v-47.54c0-12.7 8.22-21.27 21.45-21.27 11.26 0 15.9 7.5 15.9 17.7v51.11h19.31v-56.12c0-18.24-8.58-30.03-26.27-30.03-15.55 0-25.38 9.11-29.5 25.2h-1.96c-1.25-15.55-9.12-25.2-24.85-25.2-14.3 0-24.85 8.58-29.5 24.3h-1.6V94.86h-18.77v84.01h19.13v-47.54zM414.93 80.55V65H394v15.55h20.92zm-.9 98.31v-84h-19.3v84h19.3zM491.5 127.56l18.06-3.4c-3.4-20.01-14.3-31.45-38.43-31.45-25.74 0-42.37 16.62-42.37 44.86 0 28.25 16.27 43.62 42.72 43.62 23.06 0 34.86-11.8 38.26-31.28l-17.7-4.3c-2.5 10.2-7.15 18.6-20.74 18.6-15.01 0-22.88-10.37-22.88-27.35 0-18.41 8.58-27.17 22.35-27.17 13.23 0 18.23 7.15 20.73 17.87zM542.57 178.86V139c0-17.16 6.26-23.41 23.95-23.41h4.65V93.96h-3.04c-12.15 0-20.02 5.9-24.84 26.27l-1.61-.17v-25.2h-18.23v84h19.12zM620.3 181.19c26.63 0 42.36-16.98 42.36-44.51 0-27.7-16.62-43.97-42.36-43.97-26.1 0-42.72 16.26-42.72 43.97 0 27.53 15.73 44.5 42.72 44.5zm-.18-72.22c15.55 0 23.42 10.2 23.42 27.53 0 17.34-7.51 28.06-23.42 28.06-16.09 0-23.24-10.72-23.24-28.06 0-17.34 7.69-27.53 23.24-27.53zM709.35 181.19c24.13 0 34.5-10.01 34.5-25.56 0-13.23-7.51-21.63-32.36-26.28-15.9-2.86-19.48-6.97-19.48-12.87 0-6.26 5-10.01 14.84-10.01 10 0 15.01 3.93 17.33 14.3l17.34-3.75c-3.4-14.84-11.26-24.31-34.32-24.31-22.34 0-33.42 9.65-33.42 24.84 0 13.95 7.86 21.45 30.2 25.92 16.63 3.04 21.28 6.26 21.28 12.87 0 7.15-5.37 10.73-15.55 10.73-13.59 0-19.49-6.44-22.17-16.63l-17.34 3.58c3.04 16.08 11.98 27.17 39.15 27.17zM778.15 80.55V65h-20.91v15.55h20.91zm-.9 98.31v-84h-19.3v84h19.3zM801.64 153.3c0 15.73 7.87 27.89 26.28 27.89 8.4 0 12.69-1.07 18.94-3.04l-2.32-17.16c-4.11 1.25-7.87 2.14-12.15 2.14-8.4 0-11.44-4.29-11.44-12.5V110.4h24.66V94.85h-24.66v-22.7h-19.31v22.7h-11.8v15.55h11.8v42.9zM895.74 107.54c13.4 0 19.84 7.51 20.56 21.99h-43.08c1.79-15.02 9.47-21.99 22.52-21.99zm.54 73.47c22.52 0 33.07-10.37 37-25.56l-16.44-4.65c-2.33 8.04-6.98 14.48-20.38 14.48-14.3 0-21.99-7.69-23.42-22.88h60.6c.35-4.3.36-8.05.36-11.26 0-23.06-12.34-38.43-37.72-38.43-26.28 0-42.37 16.8-42.37 45.22 0 28.06 16.63 43.08 42.37 43.08z"
    />
  </svg>
);

export default Logo;