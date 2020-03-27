const AppMode = {
    PROFESSIONAL: "ProfessionalMode",
	MUSIC: "MusicMode",
	REVIEW: "ReviewMode",
    REVIEW_NEWREVIEW: "ReviewMode-NewReview",
};

Object.freeze(AppMode); //This ensures that the object is immutable.

export default AppMode;