--- 
title: invoice_units
hide_title: false
hide_table_of_contents: false
keywords:
  - invoice_units
  - invoicing
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>invoice_units</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invoice_units" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.invoicing.invoice_units" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_invoice_unit"
    values={[
        { label: 'get_invoice_unit', value: 'get_invoice_unit' },
        { label: 'list_invoice_units', value: 'list_invoice_units' }
    ]}
>
<TabItem value="get_invoice_unit">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The assigned description for an invoice unit. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_receiver" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID chosen to be the receiver of an invoice unit. All invoices generated for that invoice unit will be sent to this account ID. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_unit_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN to identify an invoice unit. This information can't be modified or deleted. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;-a-zA-Z0-9/:_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date the invoice unit response was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the invoice unit that is shown on the generated invoice. (pattern: &lt;code&gt;(?! )&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;Z&#125;-_&#93;*(?&lt;! )&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td>This is used to categorize the invoice unit. Values are Amazon Web Services account IDs. Currently, the only supported rule is LINKED_ACCOUNT.</td>
</tr>
<tr>
    <td><CopyableCode code="tax_inheritance_disabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the invoice unit based tax inheritance is/ should be enabled or disabled.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_invoice_units">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The assigned description for an invoice unit. This information can't be modified or deleted. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_receiver" /></td>
    <td><code>string</code></td>
    <td>The account that receives invoices related to the invoice unit. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_unit_arn" /></td>
    <td><code>string</code></td>
    <td>ARN to identify an invoice unit. This information can't be modified or deleted. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;-a-zA-Z0-9/:_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the invoice unit was updated. This is important to determine the version of invoice unit configuration used to create the invoices. Any invoice created after this modified time will use this invoice unit configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A unique name that is distinctive within your Amazon Web Services. (pattern: &lt;code&gt;(?! )&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;Z&#125;-_&#93;*(?&lt;! )&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td>This is used to categorize the invoice unit. Values are Amazon Web Services account IDs. Currently, the only supported rule is LINKED_ACCOUNT.</td>
</tr>
<tr>
    <td><CopyableCode code="tax_inheritance_disabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the invoice unit based tax inheritance is/ should be enabled or disabled.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_invoice_unit"><CopyableCode code="get_invoice_unit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This retrieves the invoice unit definition.</td>
</tr>
<tr>
    <td><a href="#list_invoice_units"><CopyableCode code="list_invoice_units" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This fetches a list of all invoice unit definitions for a given account, as of the provided AsOf date.</td>
</tr>
<tr>
    <td><a href="#create_invoice_unit"><CopyableCode code="create_invoice_unit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InvoiceReceiver"><code>InvoiceReceiver</code></a></td>
    <td></td>
    <td>This creates a new invoice unit with the provided definition.</td>
</tr>
<tr>
    <td><a href="#update_invoice_unit"><CopyableCode code="update_invoice_unit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InvoiceUnitArn"><code>InvoiceUnitArn</code></a></td>
    <td></td>
    <td>You can update the invoice unit configuration at any time, and Amazon Web Services will use the latest configuration at the end of the month.</td>
</tr>
<tr>
    <td><a href="#delete_invoice_unit"><CopyableCode code="delete_invoice_unit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This deletes an invoice unit with the provided invoice unit ARN.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_invoice_unit"
    values={[
        { label: 'get_invoice_unit', value: 'get_invoice_unit' },
        { label: 'list_invoice_units', value: 'list_invoice_units' }
    ]}
>
<TabItem value="get_invoice_unit">

This retrieves the invoice unit definition.

```sql
SELECT
description,
invoice_receiver,
invoice_unit_arn,
last_modified,
name,
rule,
tax_inheritance_disabled
FROM aws.invoicing.invoice_units
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_invoice_units">

This fetches a list of all invoice unit definitions for a given account, as of the provided AsOf date.

```sql
SELECT
description,
invoice_receiver,
invoice_unit_arn,
last_modified,
name,
rule,
tax_inheritance_disabled
FROM aws.invoicing.invoice_units
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_invoice_unit"
    values={[
        { label: 'create_invoice_unit', value: 'create_invoice_unit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_invoice_unit">

This creates a new invoice unit with the provided definition.

```sql
INSERT INTO aws.invoicing.invoice_units (
Name,
InvoiceReceiver,
Description,
TaxInheritanceDisabled,
Rule,
ResourceTags,
region
)
SELECT 
'{{ Name }}',
'{{ InvoiceReceiver }}' /* required */,
'{{ Description }}',
{{ TaxInheritanceDisabled }},
'{{ Rule }}',
'{{ ResourceTags }}',
'{{ region }}'
RETURNING
invoice_unit_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: invoice_units
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the invoice_units resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The unique name of the invoice unit that is shown on the generated invoice. This can't be changed once it is set. To change this name, you must delete the invoice unit recreate.
    - name: InvoiceReceiver
      value: "{{ InvoiceReceiver }}"
      description: |
        The Amazon Web Services account ID chosen to be the receiver of an invoice unit. All invoices generated for that invoice unit will be sent to this account ID.
    - name: Description
      value: "{{ Description }}"
      description: |
        The invoice unit's description. This can be changed at a later time.
    - name: TaxInheritanceDisabled
      value: {{ TaxInheritanceDisabled }}
      description: |
        Whether the invoice unit based tax inheritance is/ should be enabled or disabled.
    - name: Rule
      description: |
        The InvoiceUnitRule object used to create invoice units.
      value:
        LinkedAccounts:
          - "{{ LinkedAccounts }}"
        BillSourceAccounts:
          - "{{ BillSourceAccounts }}"
    - name: ResourceTags
      description: |
        The tag structure that contains a tag key and value.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_invoice_unit"
    values={[
        { label: 'update_invoice_unit', value: 'update_invoice_unit' }
    ]}
>
<TabItem value="update_invoice_unit">

You can update the invoice unit configuration at any time, and Amazon Web Services will use the latest configuration at the end of the month.

```sql
UPDATE aws.invoicing.invoice_units
SET 
InvoiceUnitArn = '{{ InvoiceUnitArn }}',
Description = '{{ Description }}',
TaxInheritanceDisabled = {{ TaxInheritanceDisabled }},
Rule = '{{ Rule }}'
WHERE 
region = '{{ region }}' --required
AND InvoiceUnitArn = '{{ InvoiceUnitArn }}' --required
RETURNING
invoice_unit_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_invoice_unit"
    values={[
        { label: 'delete_invoice_unit', value: 'delete_invoice_unit' }
    ]}
>
<TabItem value="delete_invoice_unit">

This deletes an invoice unit with the provided invoice unit ARN.

```sql
DELETE FROM aws.invoicing.invoice_units
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
