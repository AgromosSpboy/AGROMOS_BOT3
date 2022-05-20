function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *AGROMOS*
▢ Instagram :
  • no hay :v
▢ WhatsApp grupo:

  • https://chat.whatsapp.com/CBoAGmEFcCy44xIoWBSgzJ
▢ GitHub :
  • https://github.com/AgromosSpboy/AGROMOS_BOT3
▢ Telegram : 
  • 
  • no hay :v
  • 
▢ Facebook : 
  • no hay
  • 
▢ YouTube : 
  • https://youtube.com/channel/UCYfOaeRkOwMXzLxx11nwecA
  
 
  *Creador*
▢ 
▢ WhatsApp : wa.me/595983186566
  *Creador²*
▢ 
▢ WhatsApp : wa.me/523931806576
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
