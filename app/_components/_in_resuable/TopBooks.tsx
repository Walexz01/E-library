import React from "react";
import SectionHeader from "../reusable/SectionHeader";
import Link from "next/link";
import Book from "../reusable/Book";

const TopBooks = () => {
  return (
    <section id="top_book_section">
      <div className="container top_book_container">
        <SectionHeader
          heading="TOP BOOKS"
          subheading="Level Up Your Coding Skills"
          desc=" Whether you're looking to switch to a career in tech or to
          advance in your current role, my courses give you the knowledge and
          experience you need to succeed."
          descClass="intro_desc"
        />
        {/* book list */}

        <div className="books">
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
        <div className="view_all_btn">
          <button className="view_all">
            <Link href={"/books"}>View All Books</Link>
          </button>
          <p className="desc">
            Not sure what to read? Check out our{" "}
            <Link href={"/rec"}>recommended list.</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopBooks;
