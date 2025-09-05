import Footer from "./component/footer";
import Image from "next/image";
import Navbar from "./component/navbar";
export default function Agenda() {
  return (
    <div className="">
      <Navbar />
      <div className="pt-32 mx-24">
        <p className="text-3xl">The Principle behind Freemasonry</p>
        <p className="text-xl pt-8 ml-10">The Degrees of Craft Masonry</p>
        <p className=" ml-10 pt-5">
          The principle idea of Freemasonry as a fraternal organization is to
          take a good man and make him a better man. A better man internally as
          well as externally, a better citizen of his community and country, a
          better husband and father to his children, a better friend and
          co-worker. For the man who seeks out the fraternity, for Freemasonry
          does not seek out members, this quality should already be inherent in
          his person.
        </p>
        <div className="flex justify-center pt-10">
          <Image
            src="/shubham-dhage-Sj-HVUI8zSA-unsplash.jpg"
            width={700}
            height={400}
          />
        </div>
        <p className="text-3xl">Requirements for Membership</p>
        <p className="text-xl pt-8 ml-10">
          1. Being a man, freeborn, of good repute and well-recommended Being a
          man – as Freemasonry is a Fraternity or all-male organization, this is
          a must as the lodge does not admit women. There are, however, Masonic
          organizations which do. A prospective member must be of good repute
          and sponsored by someone who knows his reputation in the community. It
          is important that a member not be admitted who would stain the
          reputation and principles of the craft.
          <br />
          2. A belief in a Supreme Being No man can be made a Mason if he is an
          atheist. All masons must profess a belief in a Supreme Being. This is
          an area where Freemasonry often comes under attack by religious
          opponents. Because Freemasonry accepts Christian, Muslim and Jew
          alike, how that member chooses to worship God, or by which name that
          member knows God, is of no consequence to Freemasonry.
          <br />
          3. Ability to support one’s self and family While not clearly stated
          in all jurisdictions, this condition is placed so that a prospective
          member does not join the craft in the hope of deriving financial
          benefit from the order. It also is in place to show the prospective
          Mason that the Lodge comes after his religious and family
          responsibilities.
          <br />
          4. The prospective Mason must have reached the age of 21, although
          some constitutions allow a member to join at an earlier age.
        </p>
      </div>

      <Footer />
    </div>
  );
}
