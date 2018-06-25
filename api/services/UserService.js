module.exports = {
    allUsersData : function(callback) {
        sails.models.user.find().then(function(result){
                callback(null, result)
        }, function(err){
                console.log(err);
                callback(err);
        }); 
    }
};

