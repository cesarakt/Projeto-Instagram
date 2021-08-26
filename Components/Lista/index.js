import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Lista(props) {
    const [feed, setFeed] = useState(props.data.item);

    const imgPerfil = { uri: feed.imgperfil };
    const nomePerfil = feed.nome;
    const imgPublicacao = { uri: feed.imgPublicacao };
    const send = require('../../assets/send.png');
    const descricao = feed.descricao;
    const curtidas = feed.likers;
    const textoLike = curtidas > 1 ? 'curtidas' : 'curtida';
    const btnCurtida = feed.likeada;

    const mostraLikes = (likers) => {
        if (curtidas <= 0) {
            return;
        }
        return (
            <Text style={styles.likers}>{curtidas} {textoLike}</Text>
        );
    };

    const darLike = () => {
        if (btnCurtida === true) {
            setFeed({
                ...feed,
                likeada: false,
                likers: curtidas - 1
            })
        } else {
            setFeed({
                ...feed,
                likeada: true,
                likers: curtidas + 1
            })
        }
    };

    const imgLike = btnCurtida ? require('../../assets/likeada.png') : require('../../assets/like.png');
    

    return (
        <View style={styles.areaFeed}>
            <View style={styles.viewPerfil}>
                <Image
                    source={imgPerfil}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.nomePerfil}>{nomePerfil}</Text>
            </View>

            <Image
                source={imgPublicacao}
                style={styles.imgPublicacao}
                resizeMode='cover'
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity onPress={darLike}>
                    <Image
                        source={imgLike}
                        style={styles.like}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={send}
                        style={styles.send}
                    />
                </TouchableOpacity>
            </View>

            {mostraLikes(curtidas)}

            <View style={styles.rodape}>
                <Text style={styles.nomeDescricao}>{nomePerfil}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    areaFeed: {
        flex: 1
    },
    viewPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    nomePerfil: {
        fontSize: 22,
        color: '#000',
        marginLeft: 5
    },
    imgPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5

    },
    like: {
        width: 33,
        height: 33,
    },
    send: {
        width: 33,
        height: 33,
        marginLeft: 5
    },
    rodape: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    nomeDescricao: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000'
    },
    descricao: {
        fontSize: 16,
        marginLeft: 5,
        color: '#000'
    },
    likers: {
        fontWeight: 'bold',
        marginLeft: 5
    }
});