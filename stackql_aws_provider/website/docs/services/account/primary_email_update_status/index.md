--- 
title: primary_email_update_status
hide_title: false
hide_table_of_contents: false
keywords:
  - primary_email_update_status
  - account
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

Creates, updates, deletes, gets or lists a <code>primary_email_update_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="primary_email_update_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.account.primary_email_update_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_primary_email_update_status"
    values={[
        { label: 'get_primary_email_update_status', value: 'get_primary_email_update_status' }
    ]}
>
<TabItem value="get_primary_email_update_status">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the most recent primary email update request. (PENDING, ACCEPTED, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the most recent primary email update status was last changed.</td>
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
    <td><a href="#get_primary_email_update_status"><CopyableCode code="get_primary_email_update_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status of the most recent primary email update for the specified account. For complete details about how to update the primary email address, see Update the primary email address for your AWS account.</td>
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
    defaultValue="get_primary_email_update_status"
    values={[
        { label: 'get_primary_email_update_status', value: 'get_primary_email_update_status' }
    ]}
>
<TabItem value="get_primary_email_update_status">

Retrieves the status of the most recent primary email update for the specified account. For complete details about how to update the primary email address, see Update the primary email address for your AWS account.

```sql
SELECT
status,
updated_at
FROM aws.account.primary_email_update_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
