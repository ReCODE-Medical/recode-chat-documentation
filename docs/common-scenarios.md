---
sidebar_position: 4
---

# Common Coding Scenarios

Real-world cardiology examples using ReCODE Chat's comprehensive code analysis.

## Understanding Code Analysis

### Example: Echo Code Deep Dive

**Your Query:** `/code` → Tab → `93306`

**ReCODE Chat Response:**
![CPT 93306](/img/screenshots/93306.png)

## Common Queries with Code Analysis

### Cardiac Catheterization

**Your Query:** `/code` → `93458`

**Key Points from Response:**
- **Medical Conditions**: CAD evaluation, pre-CABG assessment, valvular disease
- **Indications**: Chest pain with high-risk features, abnormal stress test
- **Nuances**: Don't bill with 93454 (left heart only). Document all vessels visualized
- **Example**: Patient with unstable angina, bilateral coronary angiography showing 70% LAD stenosis

### PCI with Stent

**Your Query:** `/code` → `92928`

**Comprehensive Analysis:**
- **Conditions**: Acute coronary syndrome, stable angina with significant CAD
- **Instructions**: First vessel PCI includes angioplasty and stent placement
- **Nuances**: Add 92929 for stent, +92944 for additional vessels
- **Scenario**: Single vessel PCI to LAD with DES placement during same session

### EP Study

**Your Query:** `/code` → `93620`

**Detailed Breakdown:**
- **Indications**: SVT evaluation, pre-ablation assessment, syncope workup
- **Coding**: Comprehensive study includes surface EKG, intracardiac recordings
- **Nuances**: Bundle with ablation codes, document stimulation protocols
- **Example**: Patient with recurrent palpitations, EP study revealing AVNRT

## Quick Code Lookups

### Essential Cardiology Codes

**Practice These Queries:**

1. `/code` → `93000` (EKG complete)
2. `/code` → `93015` (Stress test supervision)
3. `/code` → `93289` (Device interrogation)
4. `/code` → `93571` (Intracardiac echo)

### Multi-Procedure Scenarios

**Complex Case Analysis:**

```
/note-code-predict

Clinical Note:
- Emergency cath for STEMI
- Bilateral coronary angiography
- PCI to LAD and RCA
- IABP placement
- Overnight ICU monitoring
```

**Expected Analysis:**
- Code combinations and modifiers
- Documentation requirements
- Billing sequence recommendations

![Note predict](/img/screenshots/note-predict.png)

## Verification Workflow

### Code Validation Process

1. **Initial Query**: `/code` → [primary procedure]
2. **Review Analysis**: Check indications and nuances
3. **Verify Documentation**: Ensure note supports code
4. **Add-on Codes**: Use `/code` for additional procedures
5. **Final Check**: `/note-code-verify` with complete list

### Common Verification Examples

```
/note-code-verify

Proposed codes:
- 93458 (Heart cath)
- 93464 (Aortography)
- 93565 (LV angiography)

Clinical note: [paste documentation]
```

Remember: Each `/code` query provides comprehensive analysis including medical necessity, coding nuances, and real-world applications.

---

*Next: Optimize your workflow with [Advanced Features](/docs/advanced-features).*