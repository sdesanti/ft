import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import styles from '../assets/Footer.module.css'; // Importa el archivo CSS

function Footer() {
  return (
    <motion.footer
      className="text-center py-3 d-flex flex-column"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.footer-top}>
        <div>© {new Date().getFullYear()} Tailor Economía y Finanzas. Todos los derechos reservados</div>
      </div>
      <div className={styles['footer-bottom']}> {/* Accede a la clase con notación de corchetes */}
      </div>
    </motion.footer>
  );
}

export default Footer;