--- 
title: agreement_cancellation_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - agreement_cancellation_requests
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

Creates, updates, deletes, gets or lists an <code>agreement_cancellation_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agreement_cancellation_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_agreement.agreement_cancellation_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agreement_cancellation_request"
    values={[
        { label: 'get_agreement_cancellation_request', value: 'get_agreement_cancellation_request' },
        { label: 'list_agreement_cancellation_requests', value: 'list_agreement_cancellation_requests' }
    ]}
>
<TabItem value="get_agreement_cancellation_request">

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
    <td><CopyableCode code="agreementCancellationRequestId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the cancellation request. (pattern: &lt;code&gt;acr-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreementId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agreement associated with this cancellation request. Use DescribeAgreement to retrieve full agreement details. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the cancellation request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The detailed description of the cancellation reason, if provided.</td>
</tr>
<tr>
    <td><CopyableCode code="reasonCode" /></td>
    <td><code>string</code></td>
    <td>The reason code provided for the cancellation. (INCORRECT_TERMS_ACCEPTED, REPLACING_AGREEMENT, TEST_AGREEMENT, ALTERNATIVE_PROCUREMENT_CHANNEL, PRODUCT_DISCONTINUED, UNINTENDED_RENEWAL, BUYER_DISSATISFACTION, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the cancellation request. (PENDING_APPROVAL, APPROVED, REJECTED, CANCELLED, VALIDATION_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A message providing additional context about the cancellation request status.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the cancellation request was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agreement_cancellation_requests">

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
    <td><CopyableCode code="agreementCancellationRequestId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the cancellation request. (pattern: &lt;code&gt;acr-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreementId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agreement associated with this cancellation request. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreementType" /></td>
    <td><code>string</code></td>
    <td>The type of agreement. (pattern: &lt;code&gt;&#91;A-Za-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog in which the agreement was created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the cancellation request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="reasonCode" /></td>
    <td><code>string</code></td>
    <td>The reason code provided for the cancellation. (INCORRECT_TERMS_ACCEPTED, REPLACING_AGREEMENT, TEST_AGREEMENT, ALTERNATIVE_PROCUREMENT_CHANNEL, PRODUCT_DISCONTINUED, UNINTENDED_RENEWAL, BUYER_DISSATISFACTION, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the cancellation request. Possible values include PENDING_APPROVAL, APPROVED, REJECTED, CANCELLED, and VALIDATION_FAILED. (PENDING_APPROVAL, APPROVED, REJECTED, CANCELLED, VALIDATION_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the cancellation request was last updated.</td>
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
    <td><a href="#get_agreement_cancellation_request"><CopyableCode code="get_agreement_cancellation_request" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific agreement cancellation request. Both sellers (proposers) and buyers (acceptors) can use this operation to view cancellation requests associated with their agreements.</td>
</tr>
<tr>
    <td><a href="#list_agreement_cancellation_requests"><CopyableCode code="list_agreement_cancellation_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists agreement cancellation requests available to you as a seller or buyer. Both sellers (proposers) and buyers (acceptors) can use this operation to find cancellation requests by specifying their party type and applying optional filters. PartyType is a required parameter. A ValidationException is returned if PartyType is not provided.</td>
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
    defaultValue="get_agreement_cancellation_request"
    values={[
        { label: 'get_agreement_cancellation_request', value: 'get_agreement_cancellation_request' },
        { label: 'list_agreement_cancellation_requests', value: 'list_agreement_cancellation_requests' }
    ]}
>
<TabItem value="get_agreement_cancellation_request">

Retrieves detailed information about a specific agreement cancellation request. Both sellers (proposers) and buyers (acceptors) can use this operation to view cancellation requests associated with their agreements.

```sql
SELECT
agreementCancellationRequestId,
agreementId,
createdAt,
description,
reasonCode,
status,
statusMessage,
updatedAt
FROM aws.marketplace_agreement.agreement_cancellation_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agreement_cancellation_requests">

Lists agreement cancellation requests available to you as a seller or buyer. Both sellers (proposers) and buyers (acceptors) can use this operation to find cancellation requests by specifying their party type and applying optional filters. PartyType is a required parameter. A ValidationException is returned if PartyType is not provided.

```sql
SELECT
agreementCancellationRequestId,
agreementId,
agreementType,
catalog,
createdAt,
reasonCode,
status,
updatedAt
FROM aws.marketplace_agreement.agreement_cancellation_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
