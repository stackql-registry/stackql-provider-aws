--- 
title: enrollment_statuses_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - enrollment_statuses_for_organizations
  - compute_optimizer
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

Creates, updates, deletes, gets or lists an <code>enrollment_statuses_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enrollment_statuses_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer.enrollment_statuses_for_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_enrollment_statuses_for_organization"
    values={[
        { label: 'get_enrollment_statuses_for_organization', value: 'get_enrollment_statuses_for_organization' }
    ]}
>
<TabItem value="get_enrollment_statuses_for_organization">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp, in seconds, of when the account enrollment status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The account enrollment status. (Active, Inactive, Pending, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the account enrollment status. For example, an account might show a status of Pending because member accounts of an organization require more time to be enrolled in the service.</td>
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
    <td><a href="#get_enrollment_statuses_for_organization"><CopyableCode code="get_enrollment_statuses_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account. To get the enrollment status of standalone accounts, use the GetEnrollmentStatus action.</td>
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
    defaultValue="get_enrollment_statuses_for_organization"
    values={[
        { label: 'get_enrollment_statuses_for_organization', value: 'get_enrollment_statuses_for_organization' }
    ]}
>
<TabItem value="get_enrollment_statuses_for_organization">

Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account. To get the enrollment status of standalone accounts, use the GetEnrollmentStatus action.

```sql
SELECT
accountId,
lastUpdatedTimestamp,
status,
statusReason
FROM aws.compute_optimizer.enrollment_statuses_for_organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
