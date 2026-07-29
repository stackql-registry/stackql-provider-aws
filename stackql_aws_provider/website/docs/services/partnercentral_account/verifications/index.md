--- 
title: verifications
hide_title: false
hide_table_of_contents: false
keywords:
  - verifications
  - partnercentral_account
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

Creates, updates, deletes, gets or lists a <code>verifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_account.verifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_verification"
    values={[
        { label: 'get_verification', value: 'get_verification' }
    ]}
>
<TabItem value="get_verification">

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
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the verification process was completed. This field is null if the verification is still in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the verification process was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="verification_response_details" /></td>
    <td><code>object</code></td>
    <td>Detailed response information specific to the type of verification performed, including any verification-specific data or results.</td>
</tr>
<tr>
    <td><CopyableCode code="verification_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the verification process. Possible values include pending, in-progress, completed, failed, or expired. (PENDING_CUSTOMER_ACTION, IN_PROGRESS, FAILED, SUCCEEDED, REJECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="verification_status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information explaining the current verification status, particularly useful when the status indicates a failure or requires additional action. (pattern: &lt;code&gt;&#91;\u0020-\u007E\u00A0-\uD7FF\uE000-\uFFFD&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="verification_type" /></td>
    <td><code>string</code></td>
    <td>The type of verification that was requested and processed. (BUSINESS_VERIFICATION, REGISTRANT_VERIFICATION)</td>
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
    <td><a href="#get_verification"><CopyableCode code="get_verification" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current status and details of a verification process for a partner account. This operation allows partners to check the progress and results of business or registrant verification processes.</td>
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
    defaultValue="get_verification"
    values={[
        { label: 'get_verification', value: 'get_verification' }
    ]}
>
<TabItem value="get_verification">

Retrieves the current status and details of a verification process for a partner account. This operation allows partners to check the progress and results of business or registrant verification processes.

```sql
SELECT
completed_at,
started_at,
verification_response_details,
verification_status,
verification_status_reason,
verification_type
FROM aws.partnercentral_account.verifications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
