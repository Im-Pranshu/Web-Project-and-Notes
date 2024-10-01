import { 
    Outlet,
    NavLink,
    useLoaderData,
    Form,
    redirect,
    useNavigation, // iska live search me refresh 
    useSubmit,// live update hota rahe har ek value pe search iske liye use kara hai isko humne
 } from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { useEffect } from "react";

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
}

export default function Root() {
    const { contacts , q} = useLoaderData();
    const navigation = useNavigation();
    
    const submit = useSubmit();// ye form submit karne ke liye obeject bnaya hai iski help se form apne aap submit ho jaega.

    // jab search hora hai to ye pata lagaega or spinner ko visible rakhega tab tak.
    const searching =
      navigation.location &&
      new URLSearchParams(navigation.location.search).has(
        "q"
      );

    // jab back kare to search form empty ho jae.
    useEffect(()=>{
      document.getElementById("q").value = q;
    }, [q]);

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                className={searching ? "loading" : ""} // spinner dikhao warna class hata do.
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"

                defaultValue={q}// refresh karne par value bani rahe search me

                // jab type kar rahe hai search me tabhi form submit karo or data update karte raho yani list ko filter karte raho.
                onChange={(event)=>{
                  const isFirstSearch = q == null; // cmp karo aur jo bhi ho uske according value ko replace kar dena.
                  submit(event.currentTarget.form, {
                      replace: !isFirstSearch,}
                  );
                }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}// jab search  nahi karra hai to spinner ko hide rakho
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
            <Form method="post">
                <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {contacts.length ? (
                <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                    <NavLink
                      to={`contacts/${contact.id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                          ? "pending"
                          : ""
                      }
                    >
                        {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                        ) : (
                        <i>No Name</i>
                        )}{" "}
                        {contact.favorite && <span>★</span>}
                    </NavLink>
                    </li>
                ))}
                </ul>
            ) : (
                <p>
                <i>No contacts</i>
                </p>
            )}
          </nav>
        </div>
        <div 
          id="detail"
          className={
            navigation.state === "loading" ? "loading" : ""
          }
        >
          <Outlet/>
        </div>
      </>
    );
  }