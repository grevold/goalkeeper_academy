import { ContactsDesktop } from "./ContactsDesktop/ContactsDesktop";
import { ContactsMobile } from "./ContactsMobile/ContactsMobile";

export function Contacts() {
  return (
    <div id="contacts">
      <ContactsMobile />
      <ContactsDesktop />
    </div>
  );
}
