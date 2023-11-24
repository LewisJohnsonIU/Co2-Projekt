import { render, screen, fireEvent } from "@testing-library/react";
import Emissions from "./Emissions";

describe("Emissions Component", () => {
  test("renders search inputs and dropdowns", () => {
    render(<Emissions />);
    // Testet, ob Suchfelder vorhanden sind
    expect(screen.getByLabelText(/Land suchen:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Unternehmen suchen:/i)).toBeInTheDocument();

    // Testet, ob Dropdown-Elemente vorhanden sind
    expect(screen.getByLabelText(/Wähle ein Land:/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Wähle ein Unternehmen:/i)
    ).toBeInTheDocument();
  });

  test("updates the dropdown options based on search input", () => {
    render(<Emissions />);
    // Land wählen im Dropdown
    fireEvent.change(screen.getByLabelText(/Land suchen:/i), {
      target: { value: "USA" },
    });
    // Testet, ob die Dropdown-Optionen entsprechend aktualisiert wurden
    expect(screen.getByLabelText(/Wähle ein Land:/i)).toHaveValue("USA");

    // Unternehmen wählen im Dropdown
    fireEvent.change(screen.getByLabelText(/Unternehmen suchen:/i), {
      target: { value: "Unternehmen A" },
    });
    // Überprüfen, ob die Dropdown-Optionen entsprechend aktualisiert wurden
    expect(screen.getByLabelText(/Wähle ein Unternehmen:/i)).toHaveValue(
      "Unternehmen A"
    );
  });

  test("updates the table when form is submitted with selected search options", () => {
    render(<Emissions />);
    // Land über Suchfelder suchen
    fireEvent.change(screen.getByLabelText(/Land suchen:/i), {
      target: { value: "USA" },
    });
    // Unternehmen über Suchfelder suchen
    fireEvent.change(screen.getByLabelText(/Unternehmen suchen:/i), {
      target: { value: "Unternehmen A" },
    });
    // Auswahl absenden
    fireEvent.click(screen.getByText(/Fertig/i));
    // Testet, ob die Tabelle mit den entsprechenden Daten aktualisiert wurde
    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(2);
    expect(tableRows[1]).toHaveTextContent("All");
    expect(tableRows[1]).toHaveTextContent("All");
  });
});
