import chromadb
from llama_index.core import VectorStoreIndex, StorageContext
from llama_index.vector_stores.chroma import ChromaVectorStore
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

_retriever = None

def get_retriever():
    global _retriever
    if _retriever:
        return _retriever
    embed_model = HuggingFaceEmbedding(model_name="sentence-transformers/all-MiniLM-L6-v2")
    chroma_client = chromadb.PersistentClient(path="./chroma_db")
    chroma_collection = chroma_client.get_or_create_collection("anchor")
    vector_store = ChromaVectorStore(chroma_collection=chroma_collection)
    storage_context = StorageContext.from_defaults(vector_store=vector_store)
    index = VectorStoreIndex.from_vector_store(
        vector_store,
        storage_context=storage_context,
        embed_model=embed_model
    )
    _retriever = index.as_retriever(similarity_top_k=5)
    return _retriever

def retrieve_context(district: str, language: str, subject: str, grade: str) -> str:
    retriever = get_retriever()
    query = f"immigrant student {district} district {language} language {subject} tutoring grade {grade} rights"
    nodes = retriever.retrieve(query)
    context = "\n---\n".join([n.text for n in nodes])
    return context