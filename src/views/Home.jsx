import Filter from '../components/Filter.jsx';
import FooterFilters from '../components/FooterFilters.jsx';
import TodosList from '../components/TodosList.jsx';
import AddTodoModal from '../components/modals/AddTodoModal.jsx';
import ModalWindow from '../components/modals/ModalWindow.jsx';
import {useTodos} from '../TodosContext.jsx';

function Home() {

    const store = useTodos();

    return (
    <>
        { store.modalIsActive && 
            <ModalWindow>
                <AddTodoModal />
            </ModalWindow>  
        }
        
        <div className="container">
            <Filter />
            <TodosList />

            {/* Example component created to test CSS Modules */}
            <FooterFilters />
            
        </div>

       

    </>
    )
  }
  
  export default Home
