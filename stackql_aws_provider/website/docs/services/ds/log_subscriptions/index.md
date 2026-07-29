--- 
title: log_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - log_subscriptions
  - ds
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

Creates, updates, deletes, gets or lists a <code>log_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.log_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_log_subscriptions"
    values={[
        { label: 'list_log_subscriptions', value: 'list_log_subscriptions' }
    ]}
>
<TabItem value="list_log_subscriptions">

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
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>Identifier (ID) of the directory that you want to associate with the log subscription. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the log group. (pattern: &lt;code&gt;&#91;-._/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_created_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the log subscription was created.</td>
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
    <td><a href="#list_log_subscriptions"><CopyableCode code="list_log_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the active log subscriptions for the Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_log_subscription"><CopyableCode code="create_log_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-LogGroupName"><code>LogGroupName</code></a></td>
    <td></td>
    <td>Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_log_subscription"><CopyableCode code="delete_log_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified log subscription.</td>
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
    defaultValue="list_log_subscriptions"
    values={[
        { label: 'list_log_subscriptions', value: 'list_log_subscriptions' }
    ]}
>
<TabItem value="list_log_subscriptions">

Lists the active log subscriptions for the Amazon Web Services account.

```sql
SELECT
directory_id,
log_group_name,
subscription_created_date_time
FROM aws.ds.log_subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_log_subscription"
    values={[
        { label: 'create_log_subscription', value: 'create_log_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_log_subscription">

Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.

```sql
INSERT INTO aws.ds.log_subscriptions (
DirectoryId,
LogGroupName,
region
)
SELECT 
'{{ DirectoryId }}' /* required */,
'{{ LogGroupName }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: log_subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the log_subscriptions resource.
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: |
        Identifier of the directory to which you want to subscribe and receive real-time logs to your specified CloudWatch log group.
    - name: LogGroupName
      value: "{{ LogGroupName }}"
      description: |
        The name of the CloudWatch log group where the real-time domain controller logs are forwarded.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_log_subscription"
    values={[
        { label: 'delete_log_subscription', value: 'delete_log_subscription' }
    ]}
>
<TabItem value="delete_log_subscription">

Deletes the specified log subscription.

```sql
DELETE FROM aws.ds.log_subscriptions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
