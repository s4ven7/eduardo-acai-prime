import { Ionicons } from "@expo/vector-icons";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Acaicardsprops = {
    imagemURL: ImageSourcePropType;
    nome: string;
    descricao: string;
    preco: string;
};

export default function AcaiCards({ imagemURL, nome, descricao, preco }: Acaicardsprops) {
    return (
        <View style={styles.card}>
            <Image source={imagemURL} style={styles.imagem}></Image>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <View style={styles.sectionPreco}>
                <Text style={styles.preco}>{preco}</Text>
                <TouchableOpacity style={styles.botao}>
                    <Ionicons name="add" size={24} color="#ffffffff" />
                </TouchableOpacity>
            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffffff",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        elevation: 3,
        marginBottom: 16,
        width: "48%",
    },
    imagem: {
        width: "100%",
        height: 100,
        borderRadius: 8,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        elevation: 3,
    },
    nome: {
        fontWeight: "700",
        fontSize: 15,
    },
    descricao: {
        fontWeight: "400",
        fontSize: 11,
        color: "#644D6A"
    },
    sectionPreco: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    preco: {
        fontSize: 14,
        fontWeight: "800",
        color: "#7B1FA2",

    },
    botao: {
        backgroundColor: "#7B1FA2",
        width: 28,
        height: 28,
        borderRadius: 14,
    },
})