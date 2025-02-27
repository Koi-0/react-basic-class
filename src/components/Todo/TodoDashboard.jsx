import { FileCheck, LaptopMinimal, Video } from "lucide-react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../api/todo-api";

const TodoDashboard = () => {
    const [searchParams] = useSearchParams();
    const seletedFilter = searchParams.get("filter");

    const {
        data: all,
        // isLoading,
        // error,
    } = useQuery({
        queryKey: ["todos"],
        queryFn: () => getTodos(),
    });

    const {
        data: completed,
        // isLoading,
        // error,
    } = useQuery({
        queryKey: ["todos", "completed"],
        queryFn: () => getTodos("completed"),
    });

    const {
        data: pending,
        // isLoading,
        // error,
    } = useQuery({
        queryKey: ["todos", "pending"],
        queryFn: () => getTodos("pending"),
    });

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error fetching todos - {error}</div>;
    // }

    return (
        <TodoDashboardSection>
            <TodoDashboardHeader>Quick Access</TodoDashboardHeader>
            <TodoDashboardCardList>
                <TodoDashboardWrapper $flex={2}>
                    <TodoDashboardCard to="/" $seleted={!seletedFilter}>
                        <div>
                            <FileCheck />
                        </div>
                        <TodoDashboardCardContent>
                            {all?.length} <br /> <span>All Tasks</span>
                        </TodoDashboardCardContent>
                    </TodoDashboardCard>
                </TodoDashboardWrapper>
                <TodoDashboardWrapper>
                    <TodoDashboardCard
                        to="?filter=completed"
                        $bgColor="#582be6"
                        $seleted={seletedFilter === "completed"}
                    >
                        <div>
                            <LaptopMinimal />
                        </div>
                        <TodoDashboardCardContent>
                            {completed?.length} <br />{" "}
                            <span>Completed Tasks</span>
                        </TodoDashboardCardContent>
                    </TodoDashboardCard>
                </TodoDashboardWrapper>
                <TodoDashboardWrapper>
                    <TodoDashboardCard
                        to="?filter=pending"
                        $bgColor="#242424"
                        $seleted={seletedFilter === "pending"}
                    >
                        <div>
                            <Video />
                        </div>
                        <TodoDashboardCardContent>
                            {pending?.length} <br /> <span>Pending Tasks</span>
                        </TodoDashboardCardContent>
                    </TodoDashboardCard>
                </TodoDashboardWrapper>
            </TodoDashboardCardList>
        </TodoDashboardSection>
    );
};

const TodoDashboardHeader = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`;

const TodoDashboardSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const TodoDashboardCardList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`;

const TodoDashboardWrapper = styled.li`
    flex: ${({ $flex = 1 }) => $flex};
`;

const TodoDashboardCard = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 184px;
    background-color: ${({ $bgColor = "#e6582b" }) => $bgColor};
    color: white;
    padding: 1.25rem;
    border-radius: 1rem;
    text-decoration: ${({ $seleted }) => ($seleted ? "underline" : "none")};
    cursor: pointer;
`;

const TodoDashboardCardContent = styled.p`
    font-size: 1rem;
    font-weight: 600;

    span {
        font-size: 1rem;
        font-weight: 400;
    }
`;

export default TodoDashboard;
