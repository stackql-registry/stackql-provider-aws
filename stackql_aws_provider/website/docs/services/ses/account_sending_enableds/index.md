--- 
title: account_sending_enableds
hide_title: false
hide_table_of_contents: false
keywords:
  - account_sending_enableds
  - ses
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

Creates, updates, deletes, gets or lists an <code>account_sending_enableds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_sending_enableds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.account_sending_enableds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_sending_enabled"
    values={[
        { label: 'get_account_sending_enabled', value: 'get_account_sending_enabled' }
    ]}
>
<TabItem value="get_account_sending_enabled">

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Describes whether email sending is enabled or disabled for your Amazon SES account in the current Amazon Web Services Region.</td>
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
    <td><a href="#get_account_sending_enabled"><CopyableCode code="get_account_sending_enabled" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the email sending status of the Amazon SES account for the current Region. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#update_account_sending_enabled"><CopyableCode code="update_account_sending_enabled" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Enabled"><code>Enabled</code></a></td>
    <td>Enables or disables email sending across your entire Amazon SES account in the current Amazon Web Services Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given Amazon Web Services Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-Enabled">
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Describes whether email sending is enabled or disabled for your Amazon SES account in the current Amazon Web Services Region.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_account_sending_enabled"
    values={[
        { label: 'get_account_sending_enabled', value: 'get_account_sending_enabled' }
    ]}
>
<TabItem value="get_account_sending_enabled">

Returns the email sending status of the Amazon SES account for the current Region. You can execute this operation no more than once per second.

```sql
SELECT
enabled
FROM aws.ses.account_sending_enableds
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_sending_enabled"
    values={[
        { label: 'update_account_sending_enabled', value: 'update_account_sending_enabled' }
    ]}
>
<TabItem value="update_account_sending_enabled">

Enables or disables email sending across your entire Amazon SES account in the current Amazon Web Services Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given Amazon Web Services Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds. You can execute this operation no more than once per second.

```sql
UPDATE aws.ses.account_sending_enableds
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND Enabled = {{ Enabled}};
```
</TabItem>
</Tabs>
