import json
import chromadb
from llama_index.core import Document, VectorStoreIndex, StorageContext
from llama_index.vector_stores.chroma import ChromaVectorStore
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

def build_index():
    embed_model = HuggingFaceEmbedding(model_name="sentence-transformers/all-MiniLM-L6-v2")
    chroma_client = chromadb.PersistentClient(path="./chroma_db")

    documents = []

    # Index school districts
    with open("data/schools.json") as f:
        schools = json.load(f)
    for s in schools:
        text = f"""
        District: {s['district_name']} | State: {s['state']}
        Title I: {s['title1_status']} | ELL Program: {s['ell_program']}
        Top languages spoken: {', '.join(s['top_languages'])}
        ELL contact: {s['ell_contact_url']} | Phone: {s['ell_phone']}
        Tutoring programs: {', '.join(s['tutoring_programs'])}
        Parent rights: {s['parent_rights_url']}
        """
        documents.append(Document(text=text, metadata={"type": "school", "district_id": s["district_id"]}))

    # Index tutoring platforms
    with open("data/tutors.json") as f:
        tutors = json.load(f)
    for t in tutors:
        text = f"""
        Platform: {t['platform']} | URL: {t['url']}
        Subjects: {', '.join(t['subjects'])}
        Languages: {', '.join(t['languages'])}
        Free: {t['free']} | Format: {t['format']}
        Grades: {t['grades']}
        Best for: {t['best_for']}
        """
        documents.append(Document(text=text, metadata={"type": "tutor"}))

    # Index rights
    with open("data/rights.json") as f:
        rights = json.load(f)
    for r in rights:
        text = f"""
        Right: {r['title']} | Law: {r['law']}
        Explanation: {r['plain_language']}
        What schools cannot do: {r['what_schools_cannot_do']}
        What to do: {r['action']}
        Source: {r['source_url']}
        """
        documents.append(Document(text=text, metadata={"type": "right"}))

    chroma_collection = chroma_client.get_or_create_collection("anchor")
    vector_store = ChromaVectorStore(chroma_collection=chroma_collection)
    storage_context = StorageContext.from_defaults(vector_store=vector_store)

    VectorStoreIndex.from_documents(
        documents,
        storage_context=storage_context,
        embed_model=embed_model
    )
    print(f"Indexed {len(documents)} records into ChromaDB successfully")

if __name__ == "__main__":
    build_index()