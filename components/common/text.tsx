import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";

const TextComp = () => {
  return (
    <ScrollView>
      <ThemedText style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quidem
        magni cum, deleniti veritatis porro! Atque tempora temporibus iure,
        facere aspernatur nesciunt deserunt rerum illum, magni velit nemo,
        distinctio veniam consequatur! Quos, libero culpa similique minus
        tempore nostrum eum sit perspiciatis aut accusantium vel in ipsa
        asperiores architecto voluptatum animi a magni expedita inventore
        accusamus optio! Laborum repudiandae adipisci maxime tenetur id facilis
        totam soluta quasi dicta quidem! Adipisci ad consequuntur quis
        dignissimos vitae error debitis? Provident aspernatur iste dolore
        obcaecati laborum ullam quaerat praesentium dolor earum, nemo, quisquam
        excepturi maiores dolorum repudiandae adipisci natus deserunt expedita
        explicabo, rem cupiditate. Natus, iusto. Dolores, fugiat quis autem id
        veniam sequi nostrum enim. Deserunt assumenda necessitatibus, officiis
        temporibus tempora non nesciunt fugit, eum impedit libero ab eius. Ipsum
        sapiente, rem ipsa maiores, fugiat doloribus cupiditate blanditiis,
        labore reprehenderit ab odit libero. Maxime ducimus perferendis, magnam
        dignissimos quas repudiandae similique culpa rerum. Quos magnam numquam
        maxime doloribus voluptates recusandae accusamus et rerum ipsam illum
        possimus suscipit repellendus error, corporis aliquid excepturi odio
        fugiat quia, officiis at. Libero aliquam sunt vitae amet dolore nisi
        nihil necessitatibus laboriosam ipsum architecto. Sequi fugiat cum quasi
        consequuntur. Necessitatibus dolorum nulla aperiam eius aspernatur
        doloribus repellat iste? Nobis.
      </ThemedText>
    </ScrollView>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: "white",
  },
});
