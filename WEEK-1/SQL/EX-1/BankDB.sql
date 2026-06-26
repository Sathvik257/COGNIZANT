SET SERVEROUTPUT ON;

BEGIN
    FOR rec IN (
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ID ' || rec.CustomerID ||
            ', Loan ID ' || rec.LoanID ||
            ', Due Date: ' || TO_CHAR(rec.DueDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/