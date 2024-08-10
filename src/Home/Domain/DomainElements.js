import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./Domain.css"

export default function DomainElements(props) {
    return (
        <section class="expand-collapse-section">
            <div data-testid="expand-section-Departments" class="-ml-4 -mr-4 relative mt-2 mb-1">
                <div role="tab" class="m-0 text-lg">
                    <button type="button" class="bg-white border-0 flex items-center justify-between pl-4 pr-4 pointer sans-serif w-full" aria-expanded="false">
                        <div class="inline-block text-gray-950 text-lg leading-6 text-left w-100 pt-4" style={{ fontWeight: 600, paddingBottom: "1.2rem" }}>{props.element}</div>
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
            </div>
            <hr aria-hidden="true" class="sectionBreak" />
        </section>
    )
}
