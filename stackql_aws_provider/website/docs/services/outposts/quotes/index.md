--- 
title: quotes
hide_title: false
hide_table_of_contents: false
keywords:
  - quotes
  - outposts
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

Creates, updates, deletes, gets or lists a <code>quotes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="quotes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.quotes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_quote"
    values={[
        { label: 'get_quote', value: 'get_quote' },
        { label: 'list_quotes', value: 'list_quotes' }
    ]}
>
<TabItem value="get_quote">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>The country code for the Outpost site location. (pattern: &lt;code&gt;^&#91;A-Z&#93;&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the quote was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the quote. (pattern: &lt;code&gt;^&#91;\S \n&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the quote expires.</td>
</tr>
<tr>
    <td><CopyableCode code="ordering_requirements" /></td>
    <td><code>array</code></td>
    <td>The requirements that must be met before an order can be submitted for the quote.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quote_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the quote. (pattern: &lt;code&gt;^oq-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quote_options" /></td>
    <td><code>array</code></td>
    <td>The configuration and pricing options for the quote. Each option includes capacity details, physical specifications, and pricing information.</td>
</tr>
<tr>
    <td><CopyableCode code="quote_status" /></td>
    <td><code>string</code></td>
    <td>The status of the quote. CREATED - The quote has been created and is available for review. ORDER_SUBMITTED - An order has been submitted for the quote. EXPIRED - The quote has expired and can no longer be used to submit an order. (CREATED, ORDER_SUBMITTED, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_capacities" /></td>
    <td><code>array</code></td>
    <td>The capacity requirements specified in the quote request.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_constraints" /></td>
    <td><code>array</code></td>
    <td>The physical constraints specified in the quote request.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_payment_options" /></td>
    <td><code>array</code></td>
    <td>The payment options specified in the quote request.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_payment_terms" /></td>
    <td><code>array</code></td>
    <td>The payment terms specified in the quote request.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message about the status of the quote. (pattern: &lt;code&gt;^&#91;\S \n&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="submitted_order_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the order submitted for the quote. (pattern: &lt;code&gt;^oo-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_quotes">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>The country code for the Outpost site location. (pattern: &lt;code&gt;^&#91;A-Z&#93;&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the quote was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the quote. (pattern: &lt;code&gt;^&#91;\S \n&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the quote expires.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quote_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the quote. (pattern: &lt;code&gt;^oq-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quote_options" /></td>
    <td><code>array</code></td>
    <td>The configuration and pricing options for the quote.</td>
</tr>
<tr>
    <td><CopyableCode code="quote_status" /></td>
    <td><code>string</code></td>
    <td>The status of the quote. (CREATED, ORDER_SUBMITTED, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_capacities" /></td>
    <td><code>array</code></td>
    <td>The capacity requirements specified in the quote request.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_constraints" /></td>
    <td><code>array</code></td>
    <td>The physical constraints specified in the quote request.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_payment_options" /></td>
    <td><code>array</code></td>
    <td>The payment options specified in the quote request.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_payment_terms" /></td>
    <td><code>array</code></td>
    <td>The payment terms specified in the quote request.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message about the status of the quote. (pattern: &lt;code&gt;^&#91;\S \n&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="submitted_order_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the order submitted for the quote. (pattern: &lt;code&gt;^oo-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_quote"><CopyableCode code="get_quote" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-quote_identifier"><code>quote_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified quote.</td>
</tr>
<tr>
    <td><a href="#list_quotes"><CopyableCode code="list_quotes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists the quotes for your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_quote"><CopyableCode code="create_quote" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CountryCode"><code>CountryCode</code></a>, <a href="#parameter-RequestedCapacities"><code>RequestedCapacities</code></a></td>
    <td></td>
    <td>Creates a quote for an Outpost. A quote provides pricing and configuration options based on the requested capacity. You can optionally associate the quote with an existing Outpost or create a standalone quote by specifying only the country code and requested capacities.</td>
</tr>
<tr>
    <td><a href="#update_quote"><CopyableCode code="update_quote" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-quote_identifier"><code>quote_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified quote. You can modify the requested capacities, constraints, payment options, payment terms, or Outpost association.</td>
</tr>
<tr>
    <td><a href="#delete_quote"><CopyableCode code="delete_quote" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-quote_identifier"><code>quote_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified quote.</td>
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
<tr id="parameter-quote_identifier">
    <td><CopyableCode code="quote_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the quote.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum page size.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_quote"
    values={[
        { label: 'get_quote', value: 'get_quote' },
        { label: 'list_quotes', value: 'list_quotes' }
    ]}
>
<TabItem value="get_quote">

Gets information about the specified quote.

```sql
SELECT
account_id,
country_code,
created_date,
description,
expiration_date,
ordering_requirements,
outpost_arn,
quote_id,
quote_options,
quote_status,
requested_capacities,
requested_constraints,
requested_payment_options,
requested_payment_terms,
status_message,
submitted_order_id
FROM aws.outposts.quotes
WHERE quote_identifier = '{{ quote_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_quotes">

Lists the quotes for your Amazon Web Services account.

```sql
SELECT
account_id,
country_code,
created_date,
description,
expiration_date,
outpost_arn,
quote_id,
quote_options,
quote_status,
requested_capacities,
requested_constraints,
requested_payment_options,
requested_payment_terms,
status_message,
submitted_order_id
FROM aws.outposts.quotes
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_quote"
    values={[
        { label: 'create_quote', value: 'create_quote' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_quote">

Creates a quote for an Outpost. A quote provides pricing and configuration options based on the requested capacity. You can optionally associate the quote with an existing Outpost or create a standalone quote by specifying only the country code and requested capacities.

```sql
INSERT INTO aws.outposts.quotes (
OutpostIdentifier,
CountryCode,
RequestedCapacities,
RequestedConstraints,
RequestedPaymentOptions,
RequestedPaymentTerms,
Description,
region
)
SELECT 
'{{ OutpostIdentifier }}',
'{{ CountryCode }}' /* required */,
'{{ RequestedCapacities }}' /* required */,
'{{ RequestedConstraints }}',
'{{ RequestedPaymentOptions }}',
'{{ RequestedPaymentTerms }}',
'{{ Description }}',
'{{ region }}'
RETURNING
quote
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: quotes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the quotes resource.
    - name: OutpostIdentifier
      value: "{{ OutpostIdentifier }}"
    - name: CountryCode
      value: "{{ CountryCode }}"
    - name: RequestedCapacities
      value:
        - QuoteCapacityType: "{{ QuoteCapacityType }}"
          Unit: "{{ Unit }}"
          Quantity: {{ Quantity }}
    - name: RequestedConstraints
      value:
        - QuoteConstraintType: "{{ QuoteConstraintType }}"
          Value: "{{ Value }}"
    - name: RequestedPaymentOptions
      value:
        - "{{ RequestedPaymentOptions }}"
    - name: RequestedPaymentTerms
      value:
        - "{{ RequestedPaymentTerms }}"
    - name: Description
      value: "{{ Description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_quote"
    values={[
        { label: 'update_quote', value: 'update_quote' }
    ]}
>
<TabItem value="update_quote">

Updates the specified quote. You can modify the requested capacities, constraints, payment options, payment terms, or Outpost association.

```sql
UPDATE aws.outposts.quotes
SET 
OutpostIdentifier = '{{ OutpostIdentifier }}',
CountryCode = '{{ CountryCode }}',
RequestedCapacities = '{{ RequestedCapacities }}',
RequestedConstraints = '{{ RequestedConstraints }}',
RequestedPaymentOptions = '{{ RequestedPaymentOptions }}',
RequestedPaymentTerms = '{{ RequestedPaymentTerms }}',
Description = '{{ Description }}'
WHERE 
quote_identifier = '{{ quote_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
quote;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_quote"
    values={[
        { label: 'delete_quote', value: 'delete_quote' }
    ]}
>
<TabItem value="delete_quote">

Deletes the specified quote.

```sql
DELETE FROM aws.outposts.quotes
WHERE quote_identifier = '{{ quote_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
