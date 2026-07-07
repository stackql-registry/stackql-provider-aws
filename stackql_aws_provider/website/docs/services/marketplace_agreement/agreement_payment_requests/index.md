--- 
title: agreement_payment_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - agreement_payment_requests
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

Creates, updates, deletes, gets or lists an <code>agreement_payment_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agreement_payment_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_agreement.agreement_payment_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agreement_payment_request"
    values={[
        { label: 'get_agreement_payment_request', value: 'get_agreement_payment_request' },
        { label: 'list_agreement_payment_requests', value: 'list_agreement_payment_requests' }
    ]}
>
<TabItem value="get_agreement_payment_request">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the payment request. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreementId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agreement associated with this payment request. Use DescribeAgreement to retrieve full agreement details. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chargeAmount" /></td>
    <td><code>string</code></td>
    <td>The amount charged or to be charged to the buyer. (pattern: &lt;code&gt;&#91;0-9&#93;*(\.&#91;0-9&#93;&#123;0,8&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chargeId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the charge created after the payment request is approved. This field is only present for approved payment requests and follows the pattern ch-&#91;a-zA-Z0-9&#93;+. (pattern: &lt;code&gt;ch-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the payment request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="currencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency code for the charge amount. (pattern: &lt;code&gt;&#91;A-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The detailed description of the payment request, if provided.</td>
</tr>
<tr>
    <td><CopyableCode code="paymentRequestId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the payment request. (pattern: &lt;code&gt;pr-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the payment request. Possible values include: VALIDATING – The payment request is being validated against agreement terms. VALIDATION_FAILED – The payment request failed validation. PENDING_APPROVAL – The payment request is awaiting buyer action. APPROVED – The buyer has approved the payment request. REJECTED – The buyer has rejected the payment request. CANCELLED – The seller has cancelled the payment request. (VALIDATING, VALIDATION_FAILED, PENDING_APPROVAL, APPROVED, REJECTED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>An optional message providing additional context about the payment request status, such as a rejection reason or validation failure details.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the payment request was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agreement_payment_requests">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the payment request. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreementId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agreement associated with this payment request. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chargeAmount" /></td>
    <td><code>string</code></td>
    <td>The amount charged or to be charged to the buyer. (pattern: &lt;code&gt;&#91;0-9&#93;*(\.&#91;0-9&#93;&#123;0,8&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chargeId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the charge created after the payment request is approved. This field is only present for approved payment requests. (pattern: &lt;code&gt;ch-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the payment request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="currencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency code for the charge amount. (pattern: &lt;code&gt;&#91;A-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="paymentRequestId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the payment request. (pattern: &lt;code&gt;pr-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the payment request. Possible values include VALIDATING, VALIDATION_FAILED, PENDING_APPROVAL, APPROVED, REJECTED, and CANCELLED. (VALIDATING, VALIDATION_FAILED, PENDING_APPROVAL, APPROVED, REJECTED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the payment request was last updated.</td>
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
    <td><a href="#get_agreement_payment_request"><CopyableCode code="get_agreement_payment_request" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific payment request. Both sellers (proposers) and buyers (acceptors) can use this operation to view payment requests associated with their agreements. The response includes the current status, charge details, timestamps, and the charge ID if the request has been approved. The calling identity must be either the acceptor or proposer of the payment request. A ResourceNotFoundException is returned if the payment request does not exist.</td>
</tr>
<tr>
    <td><a href="#list_agreement_payment_requests"><CopyableCode code="list_agreement_payment_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists payment requests available to you as a seller or buyer. Both sellers (proposers) and buyers (acceptors) can use this operation to find payment requests by specifying their party type and applying optional parameters. PartyType is a required parameter. A ValidationException is returned if PartyType is not provided. Pagination is supported through maxResults (1-50, default 50) and nextToken parameters.</td>
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
    defaultValue="get_agreement_payment_request"
    values={[
        { label: 'get_agreement_payment_request', value: 'get_agreement_payment_request' },
        { label: 'list_agreement_payment_requests', value: 'list_agreement_payment_requests' }
    ]}
>
<TabItem value="get_agreement_payment_request">

Retrieves detailed information about a specific payment request. Both sellers (proposers) and buyers (acceptors) can use this operation to view payment requests associated with their agreements. The response includes the current status, charge details, timestamps, and the charge ID if the request has been approved. The calling identity must be either the acceptor or proposer of the payment request. A ResourceNotFoundException is returned if the payment request does not exist.

```sql
SELECT
name,
agreementId,
chargeAmount,
chargeId,
createdAt,
currencyCode,
description,
paymentRequestId,
status,
statusMessage,
updatedAt
FROM aws.marketplace_agreement.agreement_payment_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agreement_payment_requests">

Lists payment requests available to you as a seller or buyer. Both sellers (proposers) and buyers (acceptors) can use this operation to find payment requests by specifying their party type and applying optional parameters. PartyType is a required parameter. A ValidationException is returned if PartyType is not provided. Pagination is supported through maxResults (1-50, default 50) and nextToken parameters.

```sql
SELECT
name,
agreementId,
chargeAmount,
chargeId,
createdAt,
currencyCode,
paymentRequestId,
status,
updatedAt
FROM aws.marketplace_agreement.agreement_payment_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
