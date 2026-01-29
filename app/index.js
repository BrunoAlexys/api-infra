const getFormattedDate = () => {
    return new Date().toISOString();
};

exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "API Online - Bolsa Futuro Digital APONTI",
            data_atual: getFormattedDate()
        }),
    };
};

exports.getFormattedDate = getFormattedDate;