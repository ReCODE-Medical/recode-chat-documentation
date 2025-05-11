---
sidebar_position: 6
---

# Advanced Features

Unlock the full potential of ReCODE Chat with these advanced features and power-user tips.

## Slash Commands

![Slash Command Menu](/img/screenshots/slash-command-menu.png)

### The /code Command

The most powerful feature is the `/code` command. When you type `/code`, ReCODE Chat automatically provides a comprehensive prompt template:

```
Tell me about PROC CODE [procedure code]. Explain the medical 
conditions and indications associated with it thoroughly but 
concisely, explain the coding instructions, and make sure to 
articulate any coding nuances that I should keep in mind. 
Provide an example scenario under which this code would be 
applied. Be sure to explain your thinking aloud as 
justification for your response.
```

**Example Usage:**
1. Type `/code`
2. Tab to the procedure code field
3. Enter the code (e.g., "93306")
4. Press Enter

You'll receive comprehensive information about the code including indications, nuances, and scenarios.

### Other Available Commands:

- `/indications` - Medical necessity and indications
- `/note-code-predict` - Predict codes from clinical notes
- `/note-code-verify` - Verify existing code selections
- `/imaginary-scenario` - Create coding scenarios
- `/imaginary-note` - Generate sample documentation

**Pro Tip:** After selecting a command, press Tab to cycle through the available fields and fill them consecutively.

### Using Commands Effectively

**Example Workflow:**
1. Type `/note-code-predict`
2. Press Tab to enter your clinical note
3. Press Tab again for additional parameters
4. Press Enter to execute

**Common Use Cases:**
- `/code echo` - Quick echo code lookup
- `/indications AFib ablation` - Check procedure indications
- `/note-code-verify 93458` - Verify cardiac cath code

## Chat History Management

### Organizing Conversations

**Naming Tips:**
- Use descriptive titles: "Cardiac_Procedures_2025"
- Include dates: "Jan_Complex_Cases"
- Tag by type: "EP_QuickRef"

**Search Features:**
- Search by keyword or CPT code
- Filter by date range
- Find specific conversations quickly

## Advanced Query Techniques

### Command Combinations

**Power User Workflow:**
1. Use `/indications` to establish necessity
2. Follow with `/note-code-predict` for suggestions
3. End with `/note-code-verify` to confirm

**Example Sequence:**
```
/indications chest pain evaluation
/note-code-predict [paste clinical note]
/note-code-verify 99213, 93010
```

## Workflow Integration

### EMR Integration

**Quick Steps:**
1. Copy note from EMR
2. Use `/note-code-predict`
3. Copy suggested codes back to EMR
4. Save conversation for reference

### Export Options

- Save important conversations
- Export to PDF for records
- Share with team members
- Create reference libraries

## Keyboard Shortcuts

### Essential Shortcuts

```
/         Open command menu
Tab       Navigate command fields
Enter     Execute command
Ctrl+S    Save conversation
Ctrl+F    Search chat history
```

## Custom Preferences

### Personalization Options

- Set default specialty
- Customize response formats
- Save frequently used commands
- Create quick access templates

## Tips for Efficiency

### Best Practices

1. **Memorize top 3 commands** for speed
2. **Use Tab navigation** to fill fields quickly
3. **Save complex scenarios** for reuse
4. **Chain commands** for comprehensive coding

### Common Patterns

**For New Procedures:**
```
/indications [procedure]
/imaginary-scenario [details]
/note-code-predict
```

**For Documentation Review:**
```
/note-code-predict [existing note]
/note-code-verify [suggested codes]
```

---

*Next: Find help and resources in [Support & Resources](/docs/support).*