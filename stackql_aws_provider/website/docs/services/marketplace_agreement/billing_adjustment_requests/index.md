--- 
title: billing_adjustment_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_adjustment_requests
  - marketplace_agreement
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

Creates, updates, deletes, gets or lists a <code>billing_adjustment_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_adjustment_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_agreement.billing_adjustment_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_billing_adjustment_request"
    values={[
        { label: 'get_billing_adjustment_request', value: 'get_billing_adjustment_request' },
        { label: 'list_billing_adjustment_requests', value: 'list_billing_adjustment_requests' }
    ]}
>
<TabItem value="get_billing_adjustment_request">

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
    <td><CopyableCode code="adjustment_amount" /></td>
    <td><code>string</code></td>
    <td>The adjustment amount as a string representation of a decimal number. (pattern: &lt;code&gt;&#91;0-9&#93;*(\.&#91;0-9&#93;&#123;0,8&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="adjustment_reason_code" /></td>
    <td><code>string</code></td>
    <td>The reason code for the billing adjustment. (INCORRECT_TERMS_ACCEPTED, INCORRECT_METERING, TEST_ENVIRONMENT_CHARGES, ALTERNATIVE_PROCUREMENT_CHANNEL, UNINTENDED_RENEWAL, BUYER_DISSATISFACTION, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="agreement_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agreement associated with this billing adjustment request. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_adjustment_request_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the billing adjustment request. (pattern: &lt;code&gt;ba-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the billing adjustment request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The currency code for the adjustment amount (e.g., USD). (pattern: &lt;code&gt;&#91;A-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The detailed description of the billing adjustment reason, if provided.</td>
</tr>
<tr>
    <td><CopyableCode code="original_invoice_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the original invoice being adjusted.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the billing adjustment request. (PENDING, VALIDATION_FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message providing additional context about the billing adjustment request status. This field is populated only when the status is VALIDATION_FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the billing adjustment request was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_billing_adjustment_requests">

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
    <td><CopyableCode code="adjustment_amount" /></td>
    <td><code>string</code></td>
    <td>The adjustment amount as a string representation of a decimal number. (pattern: &lt;code&gt;&#91;0-9&#93;*(\.&#91;0-9&#93;&#123;0,8&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreement_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agreement associated with this billing adjustment request. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreement_type" /></td>
    <td><code>string</code></td>
    <td>The type of agreement. (pattern: &lt;code&gt;&#91;A-Za-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_adjustment_request_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the billing adjustment request. (pattern: &lt;code&gt;ba-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog in which the agreement was created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the billing adjustment request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The currency code for the adjustment amount. (pattern: &lt;code&gt;&#91;A-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="original_invoice_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the original invoice being adjusted.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the billing adjustment request. (PENDING, VALIDATION_FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the billing adjustment request was last updated.</td>
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
    <td><a href="#get_billing_adjustment_request"><CopyableCode code="get_billing_adjustment_request" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific billing adjustment request. Sellers (proposers) can use this operation to view the status and details of a billing adjustment request they submitted.</td>
</tr>
<tr>
    <td><a href="#list_billing_adjustment_requests"><CopyableCode code="list_billing_adjustment_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists billing adjustment requests for a specific agreement. Sellers (proposers) can use this operation to view all billing adjustment requests associated with an agreement.</td>
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
    defaultValue="get_billing_adjustment_request"
    values={[
        { label: 'get_billing_adjustment_request', value: 'get_billing_adjustment_request' },
        { label: 'list_billing_adjustment_requests', value: 'list_billing_adjustment_requests' }
    ]}
>
<TabItem value="get_billing_adjustment_request">

Retrieves detailed information about a specific billing adjustment request. Sellers (proposers) can use this operation to view the status and details of a billing adjustment request they submitted.

```sql
SELECT
adjustment_amount,
adjustment_reason_code,
agreement_id,
billing_adjustment_request_id,
created_at,
currency_code,
description,
original_invoice_id,
status,
status_message,
updated_at
FROM aws.marketplace_agreement.billing_adjustment_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_billing_adjustment_requests">

Lists billing adjustment requests for a specific agreement. Sellers (proposers) can use this operation to view all billing adjustment requests associated with an agreement.

```sql
SELECT
adjustment_amount,
agreement_id,
agreement_type,
billing_adjustment_request_id,
catalog,
created_at,
currency_code,
original_invoice_id,
status,
updated_at
FROM aws.marketplace_agreement.billing_adjustment_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
