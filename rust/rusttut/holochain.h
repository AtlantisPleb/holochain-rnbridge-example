#include <stdint.h>

typedef void Dna;
extern Dna *holochain_dna_create();
extern Dna *holochain_dna_create_from_json(const char *buf);
extern void holochain_dna_free(Dna *ptr);
extern char *holochain_dna_to_json(const Dna *ptr);
extern void holochain_dna_string_free(char *s);

extern char *holochain_dna_get_name(const Dna *ptr);
extern void holochain_dna_set_name(const Dna *ptr, const char *val);

extern char *holochain_dna_get_description(const Dna *ptr);
extern void holochain_dna_set_description(const Dna *ptr, const char *val);

extern char *holochain_dna_get_version(const Dna *ptr);
extern void holochain_dna_set_version(const Dna *ptr, const char *val);

extern char *holochain_dna_get_uuid(const Dna *ptr);
extern void holochain_dna_set_uuid(const Dna *ptr, const char *val);

extern char *holochain_dna_get_dna_spec_version(const Dna *ptr);
extern void holochain_dna_set_dna_spec_version(const Dna *ptr, const char *val);

struct CStringVec {
    size_t len;
    const char** ptr;
};

extern void holochain_dna_get_zome_names(const Dna *ptr, struct CStringVec *string_vec);
extern void holochain_dna_free_zome_names(struct CStringVec *string_vec);

extern void holochain_dna_get_capabilities_names(const Dna *ptr, const char *zome_name, struct CStringVec *string_vec);
extern void holochain_dna_get_function_names(const Dna *ptr, const char *zome_name, const char *capability_name, struct CStringVec *string_vec);
extern void holochain_dna_get_function_parameters(const Dna *ptr, const char *zome_name, const char *capability_name, const char *parameter_name, struct CStringVec *string_vec);

typedef void Holochain;
extern Holochain *holochain_new(Dna*);
extern bool holochain_start(Holochain*);
extern bool holochain_stop(Holochain*);
extern char* holochain_call(Holochain*, const char* zome, const char* capability, const char* function, const char* parameters);
