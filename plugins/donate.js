let handler =  m => m.reply(`

≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *PayPal*
• *Link :* https://paypal.me/dotacionesdelbotagro?country.x=MX&locale.x=es_XC
▢ *Mercado Pago Arg*
• *
▢ *Tigo Money*
• *

_Al donar consigues_  *Premium* 

• Diamantes ilimitados
• comandos de *menu premium* desbloqueado
• Limite de *Descargas +250 MB*, podrá descargar archivos de 300 mb que es lo que permite WhatsApp :'v

Si donas contactame por t.me/fg98f
`.trim())
handler.help = ['donar']
handler.tags = ['main']
handler.command = ['donar', 'apoyar', 'donate'] 

export default handler
