var numUniqueEmails = function(emails) {
    const m = new Map();
    
    emails.forEach(email => {
        const names = email.split("@");
        
        let local = names[0].split("+")[0];
        local = local.split(".").join("");
        
        const k = local + "@" + names[1];
        if (!m.get(k)) {
            m.set(k, 1);
        }
    });
    
    return m.size;
};
